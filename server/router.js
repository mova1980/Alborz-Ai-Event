import './env.js'
import { json, readBody, bearer, pathnameOf, publicOrigin, sendBinary } from './http.js'
import { load, mutate, persistenceKind, getRegByCode, getRegById } from './store.js'
import {
  normalizeMobile, isIranMobile, signToken, verifyToken, otpCode, hashOtp,
  checkAdmin, newId, trackingCode,
} from './auth.js'
import faDefaults from '../src/i18n/fa.js'
import enDefaults from '../src/i18n/en.js'
import { DEFAULT_MEDIA } from '../src/lib/cms.js'
import { sendOtp, smsConfigured } from './sms.js'
import { statusUrl } from './qr.js'
import { barcodeDataUrl, tehranDay, codesMatch, displayCode } from './barcode.js'
import { IS_PROD } from './env.js'
import {
  clip, clientIp, hitLimit, parseFile, readPerson, assertPerson,
} from './validate.js'
import { excelXml, reportHtml, sendDownload, registrationRows, secretariatRows } from './report.js'
import { upsertRegistration, upsertSecretariat, upsertFile, insertCheckin, insertScan } from './tables.js'

const ALLOWED_IMG = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'])

function publicContent(c = {}) {
  return {
    registrationOpen: c.registrationOpen !== false,
    noticeFa: c.noticeFa || '',
    noticeEn: c.noticeEn || '',
    fa: c.fa || null,
    en: c.en || null,
    images: c.images || {},
    updatedAt: c.updatedAt || 0,
  }
}

function mediaItem(m) {
  return { id: m.id, name: m.name, mime: m.mime, size: m.size || 0, createdAt: m.createdAt, url: `/api/media/${m.id}` }
}

function parseImage(body) {
  const raw = String(body.data || '')
  const m = raw.match(/^data:([^;]+);base64,(.+)$/)
  const mime = String(body.mime || m?.[1] || '').toLowerCase()
  const b64 = m ? m[2] : raw
  if (!ALLOWED_IMG.has(mime)) return { error: 'نوع فایل مجاز نیست.' }
  const buf = Buffer.from(b64, 'base64')
  if (!buf.length) return { error: 'فایل خالی است.' }
  if (buf.length > 1_800_000) return { error: 'حجم تصویر حداکثر ۱٫۸ مگابایت است.' }
  return { mime, buf, b64: buf.toString('base64') }
}

const OTP_TTL = 120_000
const OTP_RESEND = 90_000

function auth(req) {
  return verifyToken(bearer(req))
}

function need(session, roles) {
  if (!session) return 'auth'
  if (roles && !roles.includes(session.role)) return 'forbidden'
  return null
}

function withBarcode(r) {
  if (!r) return r
  try { r.barcode = barcodeDataUrl(displayCode(r.code)) } catch { /* ignore */ }
  return r
}

function publicReg(r, { barcode } = {}) {
  if (!r) return null
  const name = [r.firstName, r.lastName].filter(Boolean).join(' ')
  const code = displayCode(r.code)
  const out = {
    id: r.id,
    code,
    status: r.status,
    firstName: r.firstName || '',
    lastName: r.lastName || '',
    displayName: name || r.companyName || '',
    companyName: r.companyName || '',
    createdAt: r.createdAt,
    updatedAt: r.updatedAt,
    booth: r.booth || '',
    adminNote: r.adminNote || '',
    statusUrl: r.statusUrl,
    checkedInAt: r.checkedInAt || 0,
    checkins: r.checkins || [],
  }
  if (barcode) out.barcode = barcodeDataUrl(code)
  return out
}

function findReg(d, scanned) {
  const n = displayCode(scanned)
  if (!n) return null
  return d.registrations.find((r) => codesMatch(r.code, n) || r.id === n) || null
}

function uniqueCode(d) {
  d.seq = Math.max(1, Number(d.seq) || 1)
  for (let i = 0; i < 40; i++) {
    const code = trackingCode(d.seq)
    d.seq += 1
    if (!d.registrations.some((r) => codesMatch(r.code, code))) return code
  }
  return `ATW${String(Date.now()).slice(-9)}`
}

function faWhen(ms) {
  if (!ms) return ''
  return new Date(ms).toLocaleString('fa-IR', { timeZone: 'Asia/Tehran' })
}

function normalizeDay(c) {
  if (!c) return null
  if (c.inAt || c.lastDir || typeof c.inside === 'boolean') {
    return {
      day: c.day,
      inAt: c.inAt || c.at || 0,
      outAt: c.outAt || 0,
      inside: c.inside === true,
      lastAt: c.lastAt || c.outAt || c.inAt || c.at || 0,
      lastDir: c.lastDir || (c.inside ? 'in' : 'out'),
      by: c.by || '',
      scans: Array.isArray(c.scans) ? c.scans : [],
    }
  }
  return {
    day: c.day,
    inAt: c.at || 0,
    outAt: 0,
    inside: true,
    lastAt: c.at || 0,
    lastDir: 'in',
    by: c.by || '',
    scans: [{ at: c.at, dir: 'in', by: c.by || '' }],
  }
}

function fileMeta(rec) {
  if (!rec) return null
  return { id: rec.id, name: rec.name, mime: rec.mime, size: rec.size || 0, createdAt: rec.createdAt }
}

export async function handleApi(req, res) {
  try {
    const url = pathnameOf(req)
    let path = url.pathname.replace(/^\/api/, '') || '/'
    if (!path.startsWith('/')) path = `/${path}`
    const orig = String(req.headers['x-forwarded-uri'] || '').split('?')[0]
    if (orig.startsWith('/api/') && !orig.includes('[')) {
      path = orig.replace(/^\/api/, '') || path
      if (!path.startsWith('/')) path = `/${path}`
    }
    const aliases = {
      '/login': '/auth/admin',
      '/me': '/auth/me',
      '/otp-request': '/auth/otp/request',
      '/otp-verify': '/auth/otp/verify',
      '/status-lookup': '/status/lookup',
    }
    if (aliases[path]) path = aliases[path]
    const method = (req.method || 'GET').toUpperCase()

    if (method === 'OPTIONS') {
      res.statusCode = 204
      res.end()
      return
    }

    if (path === '/health' && method === 'GET') {
      return json(res, 200, {
        ok: true,
        persistence: persistenceKind(),
        sms: smsConfigured(),
        domain: 'https://www.alborz-digitex.ir',
      })
    }

    if (path === '/content' && method === 'GET') {
      const data = await load()
      return json(res, 200, { content: publicContent(data.content || {}) })
    }

    if (path.startsWith('/media/') && method === 'GET') {
      const id = decodeURIComponent(path.slice('/media/'.length)).replace(/[^a-zA-Z0-9_-]/g, '')
      const data = await load()
      const meta = (data.media || []).find((m) => m.id === id)
      const b64 = data.mediaBlobs?.[id]
      if (!meta || !b64) return json(res, 404, { error: 'not_found' })
      return sendBinary(res, { mime: meta.mime, buf: Buffer.from(b64, 'base64') })
    }

    /* ---------- OTP ---------- */
    if (path === '/auth/otp/request' && method === 'POST') {
      const body = await readBody(req)
      const mobile = normalizeMobile(body.mobile)
      if (!isIranMobile(mobile)) return json(res, 400, { error: 'invalid_mobile', message: 'شماره باید 09xxxxxxxxx باشد.' })
      const now = Date.now()
      const data = await load()
      const prev = data.otps[mobile]
      if (prev && now - (prev.sentAt || 0) < OTP_RESEND) {
        const wait = Math.ceil((OTP_RESEND - (now - prev.sentAt)) / 1000)
        return json(res, 429, { error: 'too_soon', wait, message: `لطفاً ${wait} ثانیه صبر کنید.` })
      }
      const code = otpCode()
      const sms = await sendOtp(mobile, code)
      await mutate((d) => {
        d.otps[mobile] = { hash: hashOtp(mobile, code), exp: now + OTP_TTL, sentAt: now, tries: 0 }
      })
      return json(res, 200, {
        ok: true,
        mobile,
        ttl: 120,
        sms: sms.sent,
        ...(sms.devCode && !IS_PROD ? { devCode: sms.devCode } : {}),
        ...(sms.error ? { smsError: sms.error } : {}),
      })
    }

    if (path === '/auth/otp/verify' && method === 'POST') {
      const body = await readBody(req)
      const mobile = normalizeMobile(body.mobile)
      const code = String(body.code || '').replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).trim()
      if (!isIranMobile(mobile) || !/^\d{6}$/.test(code)) {
        return json(res, 400, { error: 'invalid', message: 'کد شش‌رقمی و شماره معتبر لازم است.' })
      }
      const now = Date.now()
      let ok = false
      let err = 'invalid_code'
      await mutate((d) => {
        const row = d.otps[mobile]
        if (!row) { err = 'not_found'; return }
        if (row.exp < now) { err = 'expired'; return }
        if ((row.tries || 0) >= 5) { err = 'locked'; return }
        row.tries = (row.tries || 0) + 1
        if (row.hash !== hashOtp(mobile, code)) return
        delete d.otps[mobile]
        ok = true
      })
      if (!ok) {
        const map = { expired: 'کد منقضی شده است.', locked: 'تلاش بیش از حد.', not_found: 'ابتدا کد را درخواست کنید.' }
        return json(res, 401, { error: err, message: map[err] || 'کد نادرست است.' })
      }
      const token = signToken({ role: 'company', mobile }, 60 * 60 * 24 * 7)
      const data = await load()
      const mine = data.registrations.filter((r) => r.mobile === mobile).map((r) => publicReg(r, { barcode: true }))
      return json(res, 200, { ok: true, token, mobile, registrations: mine })
    }

    if (path === '/auth/me' && method === 'GET') {
      const s = auth(req)
      if (!s) return json(res, 401, { error: 'auth' })
      if (s.role === 'company') {
        const data = await load()
        const mine = data.registrations.filter((r) => r.mobile === s.mobile).map((r) => publicReg(r, { barcode: true }))
        return json(res, 200, { role: 'company', mobile: s.mobile, registrations: mine })
      }
      return json(res, 200, { role: s.role, user: s.user })
    }

    /* ---------- Admin login ---------- */
    if (path === '/auth/admin' && method === 'POST') {
      const body = await readBody(req)
      const acc = checkAdmin(body.user, body.pass)
      if (!acc) return json(res, 401, { error: 'invalid', message: 'نام کاربری یا گذرواژه نادرست است.' })
      const token = signToken({ role: acc.role, user: acc.user }, 60 * 60 * 12)
      return json(res, 200, { ok: true, token, role: acc.role, user: acc.user })
    }

    /* ---------- Public status ---------- */
    if (path.startsWith('/status/') && method === 'GET') {
      const code = decodeURIComponent(path.slice('/status/'.length)).trim().toUpperCase()
      const r = await getRegByCode(code)
      if (!r) return json(res, 404, { error: 'not_found', message: 'کد پیگیری یافت نشد.' })
      return json(res, 200, { registration: publicReg(r, { barcode: true }) })
    }

    if (path === '/status/lookup' && method === 'POST') {
      const body = await readBody(req)
      const code = String(body.code || '').trim().toUpperCase()
      const r = await getRegByCode(code)
      if (!r) return json(res, 404, { error: 'not_found', message: 'کد پیگیری یافت نشد.' })
      const mobile = body.mobile ? normalizeMobile(body.mobile) : ''
      if (mobile && r.mobile !== mobile) return json(res, 404, { error: 'not_found', message: 'کد یا شماره هم‌خوان نیست.' })
      return json(res, 200, { registration: publicReg(r, { barcode: true }) })
    }

    /* ---------- Public register (no SMS) ---------- */
    if (path === '/register' && method === 'POST') {
      const data0 = await load()
      if (data0.content && data0.content.registrationOpen === false) {
        return json(res, 403, { error: 'closed', message: 'ثبت‌نام در حال حاضر بسته است.' })
      }
      const b = await readBody(req)
      if (clip(b.website || b.hp || '', 80)) {
        return json(res, 201, { ok: true })
      }
      const person = readPerson(b)
      const bad = assertPerson(person)
      if (bad) return json(res, 400, { error: 'required', message: bad })
      const companyName = clip(b.companyName, 160)
      const activityField = clip(b.activityField, 80)
      const registerPlace = clip(b.registerPlace, 120)
      const companyType = clip(b.companyType, 80)
      const address = clip(b.address, 500)
      const phone = clip(b.phone, 40)
      const representative = {
        name: clip(b.representative?.name || b.repName || `${person.firstName} ${person.lastName}`, 80),
        role: clip(b.representative?.role || b.repRole, 80),
        mobile: normalizeMobile(b.representative?.mobile || b.repMobile || person.mobile),
      }
      const equipment = clip(b.equipment, 500)
      const staff = Array.isArray(b.staff)
        ? b.staff.map((p) => ({
          name: clip(p.name, 80),
          role: clip(p.role, 80),
          mobile: p.mobile ? normalizeMobile(p.mobile) : '',
        })).filter((p) => p.name).slice(0, 12)
        : []
      const origin = publicOrigin(req)
      const ip = clientIp(req)
      let err = ''
      const rec = await mutate(async (d) => {
        const wait = hitLimit(d, `reg:${ip}`, 8, 60 * 60 * 1000)
        if (wait) { err = `too_many:${wait}`; return null }
        if (d.registrations.some((r) => r.nationalId === person.nationalId)) {
          err = 'dup_nid'
          return null
        }
        if (d.registrations.some((r) => r.mobile === person.mobile)) {
          err = 'dup_mobile'
          return null
        }
        const code = uniqueCode(d)
        const statusLink = statusUrl(origin, code)
        const barcode = barcodeDataUrl(code)
        const now = Date.now()
        const row = {
          id: newId('reg'),
          code,
          firstName: person.firstName,
          lastName: person.lastName,
          nationalId: person.nationalId,
          mobile: person.mobile,
          status: 'submitted',
          companyName,
          activityField,
          registerPlace,
          companyType,
          knowledgeBased: Boolean(b.knowledgeBased),
          nasrMember: Boolean(b.nasrMember),
          kbAssocMember: Boolean(b.kbAssocMember),
          address,
          phone,
          representative,
          equipment,
          staff,
          booth: '',
          adminNote: '',
          barcode,
          statusUrl: statusLink,
          createdAt: now,
          updatedAt: now,
          checkedInAt: 0,
          checkins: [],
          ip,
        }
        d.registrations.unshift(row)
        return row
      })
      if (err === 'dup_nid') return json(res, 409, { error: 'duplicate', message: 'با این کد ملی قبلاً ثبت‌نام شده است.' })
      if (err === 'dup_mobile') return json(res, 409, { error: 'duplicate', message: 'با این شماره همراه قبلاً ثبت‌نام شده است.' })
      if (err.startsWith('too_many:')) {
        return json(res, 429, { error: 'rate', message: 'تعداد درخواست‌ها زیاد است. بعداً تلاش کنید.' })
      }
      if (!rec) return json(res, 500, { error: 'server', message: 'ثبت انجام نشد.' })
      upsertRegistration(rec).catch(() => {})
      return json(res, 201, { ok: true, registration: publicReg(rec, { barcode: true }) })
    }

    /* ---------- Secretariat ---------- */
    if (path === '/secretariat' && method === 'POST') {
      const b = await readBody(req)
      if (clip(b.website || b.hp || '', 80)) return json(res, 201, { ok: true })
      const name = clip(b.name, 80)
      const message = clip(b.message, 4000)
      const actorType = clip(b.actorType || b.type, 40)
      if (!name || !message) return json(res, 400, { error: 'required', message: 'نام و متن پیام لازم است.' })
      const ip = clientIp(req)
      let fileRec = null
      if (b.file && b.file.data) {
        const parsed = parseFile(b.file)
        if (parsed?.error) return json(res, 400, { error: 'file', message: parsed.error })
        if (parsed) {
          fileRec = {
            id: newId('file'),
            name: parsed.name,
            mime: parsed.mime,
            size: parsed.size,
            b64: parsed.b64,
            createdAt: Date.now(),
          }
        }
      }
      let err = ''
      const rec = await mutate((d) => {
        const wait = hitLimit(d, `sec:${ip}`, 6, 60 * 60 * 1000)
        if (wait) { err = 'rate'; return null }
        if (fileRec) {
          d.files = d.files || {}
          d.files[fileRec.id] = fileRec
        }
        const row = {
          id: newId('sec'),
          kind: 'secretariat',
          actorType: actorType || 'other',
          name,
          org: clip(b.org, 160),
          role: clip(b.role, 80),
          email: clip(b.email, 120),
          phone: clip(b.phone, 40),
          subject: clip(b.subject, 160),
          message,
          fileId: fileRec?.id || '',
          file: fileRec ? fileMeta(fileRec) : null,
          status: 'new',
          createdAt: Date.now(),
          ip,
        }
        d.secretariat = d.secretariat || []
        d.secretariat.unshift(row)
        return row
      })
      if (err === 'rate') return json(res, 429, { error: 'rate', message: 'تعداد درخواست‌ها زیاد است. بعداً تلاش کنید.' })
      if (!rec) return json(res, 500, { error: 'server' })
      upsertSecretariat(rec).catch(() => {})
      if (fileRec) upsertFile(fileRec).catch(() => {})
      return json(res, 201, { ok: true, id: rec.id })
    }

    /* ---------- Contact / existing forms ---------- */
    if (path === '/messages' && method === 'POST') {
      const b = await readBody(req)
      const kind = String(b.kind || 'contact')
      const row = await mutate((d) => {
        const rec = {
          id: newId('msg'),
          kind,
          name: String(b.name || '').trim(),
          org: String(b.org || '').trim(),
          role: String(b.role || '').trim(),
          email: String(b.email || '').trim(),
          phone: String(b.phone || '').trim(),
          type: String(b.type || '').trim(),
          message: String(b.message || '').trim(),
          extra: b.extra || {},
          status: 'new',
          createdAt: Date.now(),
        }
        d.messages.unshift(rec)
        return rec
      })
      return json(res, 201, { ok: true, id: row.id })
    }

    /* ---------- Admin ---------- */
    const isAdminPath = path.startsWith('/admin')
    if (isAdminPath) {
      const s = auth(req)
      const gate = need(s, ['admin', 'supervisor'])
      if (gate) return json(res, 401, { error: gate, message: 'ورود مدیریت لازم است.' })
      const isAdmin = s.role === 'admin'

      if (path === '/admin/overview' && method === 'GET') {
        const d = await load()
        const by = {}
        const byDayMap = {}
        const entryByDay = {}
        const exitByDay = {}
        let checkedIn = 0
        const today = tehranDay()
        const start = Date.now() - 13 * 86400000
        for (let i = 0; i < 14; i++) {
          const day = tehranDay(start + i * 86400000)
          byDayMap[day] = 0
          entryByDay[day] = 0
          exitByDay[day] = 0
        }
        const inside = []
        const todayPeople = []
        for (const r of d.registrations) {
          by[r.status] = (by[r.status] || 0) + 1
          const days = (r.checkins || []).map(normalizeDay).filter(Boolean)
          if (r.status === 'checked_in' || r.checkedInAt || days.length) checkedIn += 1
          const createdDay = tehranDay(r.createdAt || 0)
          if (createdDay in byDayMap) byDayMap[createdDay] += 1
          for (const ed of days) {
            if (ed.day in entryByDay) entryByDay[ed.day] += 1
            if (ed.outAt && ed.day in exitByDay) exitByDay[ed.day] += 1
          }
          const todayRow = days.find((c) => c.day === today)
          if (todayRow) {
            const person = {
              id: r.id,
              code: displayCode(r.code),
              firstName: r.firstName || '',
              lastName: r.lastName || '',
              name: [r.firstName, r.lastName].filter(Boolean).join(' ') || r.companyName || displayCode(r.code),
              mobile: r.mobile,
              companyName: r.companyName || '',
              at: todayRow.lastAt || todayRow.inAt,
              inAt: todayRow.inAt,
              outAt: todayRow.outAt || 0,
              inside: todayRow.inside,
              lastDir: todayRow.lastDir,
              firstEntryAt: r.checkedInAt || todayRow.inAt,
              checkedInAt: r.checkedInAt || todayRow.inAt,
            }
            todayPeople.push(person)
            if (todayRow.inside) inside.push(person)
          }
        }
        inside.sort((a, b) => b.at - a.at)
        todayPeople.sort((a, b) => b.at - a.at)
        const traffic = (d.scans || []).filter((x) => x.day === today).slice(0, 80)
        const deniedToday = traffic.filter((x) => x.allowed === false).length
        const secs = d.secretariat || []
        return json(res, 200, {
          role: s.role,
          persistence: persistenceKind(),
          sms: smsConfigured(),
          today,
          counts: {
            registrations: d.registrations.length,
            messages: d.messages.length,
            unread: d.messages.filter((m) => m.status === 'new').length,
            byStatus: by,
            checkedIn,
            todayIn: inside.length,
            todayPeople: todayPeople.length,
            todayPass: traffic.filter((x) => x.allowed !== false).length,
            deniedToday,
            secretariat: secs.length,
            secretariatNew: secs.filter((m) => m.status === 'new').length,
            byDay: Object.keys(byDayMap).sort().map((k) => ({ d: k, n: byDayMap[k] })),
            entryByDay: Object.keys(entryByDay).sort().map((k) => ({ d: k, n: entryByDay[k] })),
            exitByDay: Object.keys(exitByDay).sort().map((k) => ({ d: k, n: exitByDay[k] })),
          },
          inside,
          todayPeople,
          traffic,
          content: d.content,
        })
      }

      if (path === '/admin/registrations' && method === 'GET') {
        const d = await load()
        const q = (url.searchParams.get('q') || '').trim().toLowerCase()
        const st = url.searchParams.get('status') || ''
        let list = d.registrations
        if (st) list = list.filter((r) => r.status === st)
        if (q) {
          list = list.filter((r) => [r.code, r.companyName, r.mobile, r.phone, r.nationalId,
            r.firstName, r.lastName, r.representative?.name]
            .join(' ').toLowerCase().includes(q))
        }
        return json(res, 200, { items: list })
      }

      if (path.startsWith('/admin/registrations/') && method === 'GET') {
        const id = path.slice('/admin/registrations/'.length)
        const r = await getRegById(id) || await getRegByCode(id)
        if (!r) return json(res, 404, { error: 'not_found' })
        return json(res, 200, { item: withBarcode(r) })
      }

      if (path.startsWith('/admin/registrations/') && method === 'PATCH') {
        const id = path.slice('/admin/registrations/'.length)
        const b = await readBody(req)
        const allowed = ['submitted', 'reviewing', 'approved', 'waitlist', 'rejected', 'checked_in']
        const row = await mutate((d) => {
          const r = d.registrations.find((x) => x.id === id)
          if (!r) return null
          if (b.status && allowed.includes(b.status)) {
            r.status = b.status
            if (b.status === 'checked_in' && !r.checkedInAt) {
              r.checkedInAt = Date.now()
              r.checkedInBy = s.user
            }
          }
          if (typeof b.booth === 'string') r.booth = b.booth.trim()
          if (typeof b.adminNote === 'string') r.adminNote = b.adminNote.trim()
          r.updatedAt = Date.now()
          r.updatedBy = s.user
          upsertRegistration(r).catch(() => {})
          return r
        })
        if (!row) return json(res, 404, { error: 'not_found' })
        return json(res, 200, { item: row })
      }

      if (path === '/admin/checkin' && method === 'POST') {
        const b = await readBody(req)
        const raw = String(b.code || '')
        const code = displayCode(raw)
        const now = Date.now()
        const day = tehranDay(now)
        if (!code) {
          return json(res, 200, { allowed: false, message: 'غیر مجاز' })
        }
        const result = await mutate((d) => {
          d.scans = d.scans || []
          const r = findReg(d, code)
          if (!r) {
            const rec = {
              id: newId('scan'),
              registrationId: '',
              code,
              raw,
              day,
              dir: 'deny',
              allowed: false,
              at: now,
              by: s.user,
              name: '',
              mobile: '',
            }
            d.scans.unshift(rec)
            d.scans = d.scans.slice(0, 3000)
            insertScan(rec).catch(() => {})
            return { allowed: false }
          }
          const firstEver = !r.checkedInAt
          r.checkins = (r.checkins || []).map(normalizeDay).filter(Boolean)
          let row = r.checkins.find((c) => c.day === day)
          let dir = 'in'
          if (!row) {
            row = {
              day,
              inAt: now,
              outAt: 0,
              inside: true,
              lastAt: now,
              lastDir: 'in',
              by: s.user,
              scans: [{ at: now, dir: 'in', by: s.user }],
            }
            r.checkins.push(row)
            dir = 'in'
          } else if (row.inside) {
            dir = 'out'
            row.inside = false
            row.lastDir = 'out'
            row.outAt = now
            row.lastAt = now
            row.by = s.user
            row.scans = row.scans || []
            row.scans.push({ at: now, dir: 'out', by: s.user })
          } else {
            dir = 'in'
            row.inside = true
            row.lastDir = 'in'
            row.lastAt = now
            row.by = s.user
            if (!row.inAt) row.inAt = now
            row.scans = row.scans || []
            row.scans.push({ at: now, dir: 'in', by: s.user })
          }
          if (dir === 'in' && !r.checkedInAt) r.checkedInAt = now
          r.status = 'checked_in'
          r.checkedInBy = s.user
          r.updatedAt = now
          const scan = {
            id: newId('scan'),
            registrationId: r.id,
            code: displayCode(r.code),
            raw,
            day,
            dir,
            allowed: true,
            at: now,
            by: s.user,
            name: [r.firstName, r.lastName].filter(Boolean).join(' ') || r.companyName || '',
            mobile: r.mobile || '',
          }
          d.scans.unshift(scan)
          d.scans = d.scans.slice(0, 3000)
          upsertRegistration(r).catch(() => {})
          insertCheckin({
            id: `${r.id}_${day}`,
            registrationId: r.id,
            code: displayCode(r.code),
            day,
            inAt: row.inAt,
            outAt: row.outAt,
            at: row.inAt,
            lastAt: row.lastAt,
            lastDir: row.lastDir,
            inside: row.inside,
            by: s.user,
            scans: row.scans,
            scanCount: row.scans.length,
          }).catch(() => {})
          insertScan(scan).catch(() => {})
          return { allowed: true, row: r, dir, firstEver, dayRow: row }
        })
        if (!result?.allowed) {
          return json(res, 200, { allowed: false, message: 'غیر مجاز' })
        }
        const row = result.row
        const name = [row.firstName, row.lastName].filter(Boolean).join(' ') || row.companyName || displayCode(row.code)
        const item = withBarcode(row)
        return json(res, 200, {
          item,
          allowed: true,
          message: 'مجاز',
          dir: result.dir,
          firstEver: Boolean(result.firstEver),
          day,
          name,
          firstName: row.firstName || '',
          lastName: row.lastName || '',
          mobile: row.mobile,
          checkedInAt: row.checkedInAt || 0,
          barcode: item.barcode,
        })
      }

      if (path === '/admin/messages' && method === 'GET') {
        const d = await load()
        return json(res, 200, { items: d.messages })
      }

      if (path === '/admin/secretariat' && method === 'GET') {
        const d = await load()
        const items = (d.secretariat || []).map((m) => ({ ...m, file: m.file || null }))
        return json(res, 200, { items })
      }

      if (path.startsWith('/admin/secretariat/') && method === 'GET') {
        const id = path.slice('/admin/secretariat/'.length)
        const d = await load()
        const m = (d.secretariat || []).find((x) => x.id === id)
        if (!m) return json(res, 404, { error: 'not_found' })
        return json(res, 200, { item: m })
      }

      if (path.startsWith('/admin/secretariat/') && method === 'PATCH') {
        const id = path.slice('/admin/secretariat/'.length)
        const b = await readBody(req)
        const row = await mutate((d) => {
          const m = (d.secretariat || []).find((x) => x.id === id)
          if (!m) return null
          if (b.status) m.status = String(b.status)
          if (typeof b.adminNote === 'string') m.adminNote = b.adminNote.trim()
          m.updatedAt = Date.now()
          upsertSecretariat(m).catch(() => {})
          return m
        })
        if (!row) return json(res, 404, { error: 'not_found' })
        return json(res, 200, { item: row })
      }

      if (path.startsWith('/admin/files/') && method === 'GET') {
        const id = path.slice('/admin/files/'.length).replace(/[^a-zA-Z0-9_-]/g, '')
        const d = await load()
        const f = d.files?.[id]
        if (!f?.b64) return json(res, 404, { error: 'not_found' })
        const buf = Buffer.from(f.b64, 'base64')
        res.statusCode = 200
        res.setHeader('Content-Type', f.mime || 'application/octet-stream')
        res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(f.name || id)}"`)
        res.setHeader('Cache-Control', 'no-store')
        res.end(buf)
        return
      }

      if (path.startsWith('/admin/messages/') && method === 'PATCH') {
        const id = path.slice('/admin/messages/'.length)
        const b = await readBody(req)
        const row = await mutate((d) => {
          const m = d.messages.find((x) => x.id === id)
          if (!m) return null
          if (b.status) m.status = b.status
          m.updatedAt = Date.now()
          return m
        })
        if (!row) return json(res, 404, { error: 'not_found' })
        return json(res, 200, { item: row })
      }

      if (path === '/admin/content' && method === 'GET') {
        if (!isAdmin) return json(res, 403, { error: 'forbidden' })
        const d = await load()
        return json(res, 200, {
          content: publicContent(d.content),
          defaults: { fa: faDefaults, en: enDefaults, images: DEFAULT_MEDIA },
          media: (d.media || []).map(mediaItem),
          persistence: persistenceKind(),
          sms: smsConfigured(),
        })
      }

      if (path === '/admin/content' && method === 'PUT') {
        if (!isAdmin) return json(res, 403, { error: 'forbidden' })
        const b = await readBody(req)
        const content = await mutate((d) => {
          const prev = d.content || {}
          const next = { ...prev }
          if ('registrationOpen' in b) next.registrationOpen = b.registrationOpen !== false
          if ('noticeFa' in b) next.noticeFa = String(b.noticeFa || '')
          if ('noticeEn' in b) next.noticeEn = String(b.noticeEn || '')
          if (b.fa && typeof b.fa === 'object') next.fa = b.fa
          if (b.en && typeof b.en === 'object') next.en = b.en
          if (b.images && typeof b.images === 'object') next.images = b.images
          next.updatedAt = Date.now()
          d.content = next
          return next
        })
        return json(res, 200, { content: publicContent(content) })
      }

      if (path === '/admin/media' && method === 'GET') {
        if (!isAdmin) return json(res, 403, { error: 'forbidden' })
        const d = await load()
        return json(res, 200, { items: (d.media || []).map(mediaItem) })
      }

      if (path === '/admin/media' && method === 'POST') {
        if (!isAdmin) return json(res, 403, { error: 'forbidden' })
        const b = await readBody(req)
        const parsed = parseImage(b)
        if (parsed.error) return json(res, 400, { error: 'invalid', message: parsed.error })
        const item = await mutate((d) => {
          if (!d.media) d.media = []
          if (!d.mediaBlobs) d.mediaBlobs = {}
          const rec = {
            id: newId('img'),
            name: String(b.name || 'image').slice(0, 120),
            mime: parsed.mime,
            size: parsed.buf.length,
            createdAt: Date.now(),
          }
          d.media.unshift(rec)
          d.mediaBlobs[rec.id] = parsed.b64
          return rec
        })
        return json(res, 201, { item: mediaItem(item) })
      }

      if (path.startsWith('/admin/media/') && method === 'DELETE') {
        if (!isAdmin) return json(res, 403, { error: 'forbidden' })
        const id = path.slice('/admin/media/'.length).replace(/[^a-zA-Z0-9_-]/g, '')
        await mutate((d) => {
          d.media = (d.media || []).filter((m) => m.id !== id)
          if (d.mediaBlobs) delete d.mediaBlobs[id]
        })
        return json(res, 200, { ok: true })
      }

      if ((path === '/admin/export' || path === '/admin/export.csv') && method === 'GET') {
        const d = await load()
        const { headers, rows } = registrationRows(d.registrations)
        const lines = [headers.join(',')]
        for (const r of rows) {
          lines.push(r.map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(','))
        }
        sendDownload(res, {
          mime: 'text/csv; charset=utf-8',
          filename: 'atw-registrations.csv',
          body: `\ufeff${lines.join('\n')}`,
        })
        return
      }

      if (path === '/admin/export.xls' && method === 'GET') {
        const d = await load()
        const { headers, rows } = registrationRows(d.registrations)
        sendDownload(res, {
          mime: 'application/vnd.ms-excel; charset=utf-8',
          filename: 'atw-registrations.xls',
          body: excelXml('registrations', headers, rows),
        })
        return
      }

      if (path === '/admin/export.pdf' && method === 'GET') {
        const d = await load()
        const { headers, rows } = registrationRows(d.registrations)
        sendDownload(res, {
          mime: 'text/html; charset=utf-8',
          filename: 'atw-registrations.html',
          body: reportHtml({ title: 'ثبت‌نام‌های هفته تکنولوژی البرز', headers, rows, rtl: true }),
        })
        return
      }

      if (path === '/admin/secretariat.xls' && method === 'GET') {
        const d = await load()
        const { headers, rows } = secretariatRows(d.secretariat || [])
        sendDownload(res, {
          mime: 'application/vnd.ms-excel; charset=utf-8',
          filename: 'atw-secretariat.xls',
          body: excelXml('secretariat', headers, rows),
        })
        return
      }

      if (path === '/admin/secretariat.pdf' && method === 'GET') {
        const d = await load()
        const { headers, rows } = secretariatRows(d.secretariat || [])
        sendDownload(res, {
          mime: 'text/html; charset=utf-8',
          filename: 'atw-secretariat.html',
          body: reportHtml({ title: 'دبیرخانه هفته تکنولوژی البرز', headers, rows, rtl: true }),
        })
        return
      }

      if (path === '/admin/presence.xls' || path === '/admin/presence.pdf') {
        const d = await load()
        const today = tehranDay()
        const headers = ['کد', 'نام', 'موبایل', 'شرکت', 'اولین ورود', 'ورود امروز', 'خروج امروز', 'وضعیت', 'اسکن امروز']
        const rows = []
        for (const r of d.registrations) {
          const todayRow = (r.checkins || []).map(normalizeDay).find((c) => c.day === today)
          if (!todayRow) continue
          rows.push([
            displayCode(r.code),
            [r.firstName, r.lastName].filter(Boolean).join(' ') || r.companyName || '',
            r.mobile || '',
            r.companyName || '',
            faWhen(r.checkedInAt || todayRow.inAt),
            faWhen(todayRow.inAt),
            faWhen(todayRow.outAt),
            todayRow.inside ? 'داخل' : 'خارج',
            String((todayRow.scans || []).length || 1),
          ])
        }
        if (path.endsWith('.xls')) {
          sendDownload(res, {
            mime: 'application/vnd.ms-excel; charset=utf-8',
            filename: `atw-presence-${today}.xls`,
            body: excelXml('presence', headers, rows),
          })
          return
        }
        sendDownload(res, {
          mime: 'text/html; charset=utf-8',
          filename: `atw-presence-${today}.html`,
          body: reportHtml({ title: `ورود و خروج امروز ${today}`, headers, rows, rtl: true }),
        })
        return
      }

      return json(res, 404, { error: 'not_found' })
    }

    return json(res, 404, { error: 'not_found' })
  } catch (e) {
    console.error(e)
    return json(res, 500, { error: 'server', message: e.message || 'server_error' })
  }
}
