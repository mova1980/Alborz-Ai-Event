import './env.js'
import { json, readBody, bearer, pathnameOf, publicOrigin } from './http.js'
import { load, mutate, persistenceKind, getRegByCode, getRegById } from './store.js'
import {
  normalizeMobile, isIranMobile, signToken, verifyToken, otpCode, hashOtp,
  checkAdmin, newId, trackingCode,
} from './auth.js'
import { sendOtp, smsConfigured } from './sms.js'
import { makeQr, statusUrl } from './qr.js'
import { IS_PROD } from './env.js'

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

function publicReg(r, { qr } = {}) {
  if (!r) return null
  const out = {
    id: r.id,
    code: r.code,
    status: r.status,
    companyName: r.companyName,
    createdAt: r.createdAt,
    updatedAt: r.updatedAt,
    booth: r.booth || '',
    adminNote: r.adminNote || '',
    statusUrl: r.statusUrl,
  }
  if (qr) out.qr = r.qr
  return out
}

export async function handleApi(req, res) {
  try {
    const url = pathnameOf(req)
    let path = url.pathname.replace(/^\/api/, '') || '/'
    if (!path.startsWith('/')) path = `/${path}`
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
      return json(res, 200, { content: data.content || {} })
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
      const mine = data.registrations.filter((r) => r.mobile === mobile).map((r) => publicReg(r, { qr: true }))
      return json(res, 200, { ok: true, token, mobile, registrations: mine })
    }

    if (path === '/auth/me' && method === 'GET') {
      const s = auth(req)
      if (!s) return json(res, 401, { error: 'auth' })
      if (s.role === 'company') {
        const data = await load()
        const mine = data.registrations.filter((r) => r.mobile === s.mobile).map((r) => publicReg(r, { qr: true }))
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
      return json(res, 200, { registration: publicReg(r, { qr: true }) })
    }

    if (path === '/status/lookup' && method === 'POST') {
      const body = await readBody(req)
      const code = String(body.code || '').trim().toUpperCase()
      const mobile = normalizeMobile(body.mobile)
      const r = await getRegByCode(code)
      if (!r || r.mobile !== mobile) return json(res, 404, { error: 'not_found', message: 'کد یا شماره هم‌خوان نیست.' })
      return json(res, 200, { registration: publicReg(r, { qr: true }) })
    }

    /* ---------- Company register ---------- */
    if (path === '/register' && method === 'POST') {
      const s = auth(req)
      const denied = need(s, ['company'])
      if (denied) return json(res, 401, { error: denied, message: 'با شماره همراه وارد شوید.' })
      const data0 = await load()
      if (data0.content && data0.content.registrationOpen === false) {
        return json(res, 403, { error: 'closed', message: 'ثبت‌نام در حال حاضر بسته است.' })
      }
      const b = await readBody(req)
      const companyName = String(b.companyName || '').trim()
      const activityField = String(b.activityField || '').trim()
      const registerPlace = String(b.registerPlace || '').trim()
      const companyType = String(b.companyType || '').trim()
      const address = String(b.address || '').trim()
      const phone = String(b.phone || '').trim()
      const representative = {
        name: String(b.representative?.name || b.repName || '').trim(),
        role: String(b.representative?.role || b.repRole || '').trim(),
        mobile: normalizeMobile(b.representative?.mobile || b.repMobile || s.mobile),
      }
      const equipment = String(b.equipment || '').trim()
      const staff = Array.isArray(b.staff)
        ? b.staff.map((p) => ({
          name: String(p.name || '').trim(),
          role: String(p.role || '').trim(),
          mobile: p.mobile ? normalizeMobile(p.mobile) : '',
        })).filter((p) => p.name)
        : []
      const knowledgeBased = Boolean(b.knowledgeBased)
      const nasrMember = Boolean(b.nasrMember)
      const kbAssocMember = Boolean(b.kbAssocMember)

      if (!companyName || !activityField || !registerPlace || !companyType || !address || !phone || !representative.name) {
        return json(res, 400, { error: 'required', message: 'فیلدهای ستاره‌دار را کامل کنید.' })
      }
      if (staff.length < 1) return json(res, 400, { error: 'staff', message: 'دست‌کم یک نفر غرفه را وارد کنید.' })

      const origin = publicOrigin(req)
      const rec = await mutate(async (d) => {
        const code = trackingCode()
        const statusLink = statusUrl(origin, code)
        const qr = await makeQr(statusLink)
        const now = Date.now()
        const row = {
          id: newId('reg'),
          code,
          mobile: s.mobile,
          status: 'submitted',
          companyName,
          activityField,
          registerPlace,
          companyType,
          knowledgeBased,
          nasrMember,
          kbAssocMember,
          address,
          phone,
          representative,
          equipment,
          staff,
          booth: '',
          adminNote: '',
          qr,
          statusUrl: statusLink,
          createdAt: now,
          updatedAt: now,
        }
        d.registrations.unshift(row)
        return row
      })
      return json(res, 201, { ok: true, registration: publicReg(rec, { qr: true }) })
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
        for (const r of d.registrations) by[r.status] = (by[r.status] || 0) + 1
        return json(res, 200, {
          role: s.role,
          persistence: persistenceKind(),
          sms: smsConfigured(),
          counts: {
            registrations: d.registrations.length,
            messages: d.messages.length,
            unread: d.messages.filter((m) => m.status === 'new').length,
            byStatus: by,
          },
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
          list = list.filter((r) => [r.code, r.companyName, r.mobile, r.phone, r.representative?.name]
            .join(' ').toLowerCase().includes(q))
        }
        return json(res, 200, { items: list })
      }

      if (path.startsWith('/admin/registrations/') && method === 'GET') {
        const id = path.slice('/admin/registrations/'.length)
        const r = await getRegById(id) || await getRegByCode(id)
        if (!r) return json(res, 404, { error: 'not_found' })
        return json(res, 200, { item: r })
      }

      if (path.startsWith('/admin/registrations/') && method === 'PATCH') {
        const id = path.slice('/admin/registrations/'.length)
        const b = await readBody(req)
        const allowed = ['submitted', 'reviewing', 'approved', 'waitlist', 'rejected', 'checked_in']
        const row = await mutate((d) => {
          const r = d.registrations.find((x) => x.id === id)
          if (!r) return null
          if (b.status && allowed.includes(b.status)) r.status = b.status
          if (typeof b.booth === 'string') r.booth = b.booth.trim()
          if (typeof b.adminNote === 'string') r.adminNote = b.adminNote.trim()
          r.updatedAt = Date.now()
          r.updatedBy = s.user
          return r
        })
        if (!row) return json(res, 404, { error: 'not_found' })
        return json(res, 200, { item: row })
      }

      if (path === '/admin/messages' && method === 'GET') {
        const d = await load()
        return json(res, 200, { items: d.messages })
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
        return json(res, 200, { content: d.content, persistence: persistenceKind(), sms: smsConfigured() })
      }

      if (path === '/admin/content' && method === 'PUT') {
        if (!isAdmin) return json(res, 403, { error: 'forbidden' })
        const b = await readBody(req)
        const content = await mutate((d) => {
          d.content = {
            registrationOpen: b.registrationOpen !== false,
            noticeFa: String(b.noticeFa || ''),
            noticeEn: String(b.noticeEn || ''),
          }
          return d.content
        })
        return json(res, 200, { content })
      }

      if (path === '/admin/export' && method === 'GET') {
        const d = await load()
        const header = ['code', 'status', 'companyName', 'mobile', 'activityField', 'registerPlace', 'companyType', 'knowledgeBased', 'nasrMember', 'kbAssocMember', 'address', 'phone', 'repName', 'repMobile', 'staff', 'equipment', 'booth', 'createdAt']
        const lines = [header.join(',')]
        for (const r of d.registrations) {
          const cells = [
            r.code, r.status, r.companyName, r.mobile, r.activityField, r.registerPlace, r.companyType,
            r.knowledgeBased, r.nasrMember, r.kbAssocMember, r.address, r.phone,
            r.representative?.name, r.representative?.mobile,
            (r.staff || []).map((p) => p.name).join('|'),
            r.equipment, r.booth, new Date(r.createdAt).toISOString(),
          ].map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`)
          lines.push(cells.join(','))
        }
        const csv = `\ufeff${lines.join('\n')}`
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/csv; charset=utf-8')
        res.setHeader('Content-Disposition', 'attachment; filename="atw-registrations.csv"')
        res.end(csv)
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
