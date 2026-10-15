import crypto from 'node:crypto'
import { isIranMobile, normalizeMobile } from './auth.js'

const FA = '۰۱۲۳۴۵۶۷۸۹'

export function asciiDigits(s) {
  return String(s || '')
    .replace(/[۰-۹]/g, (d) => String(FA.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[^\d]/g, '')
}

export function clip(s, n) {
  return String(s || '').trim().slice(0, n)
}

export function isNationalId(raw) {
  const t = asciiDigits(raw)
  if (!/^\d{10}$/.test(t)) return false
  if (/^(\d)\1{9}$/.test(t)) return false
  const check = Number(t[9])
  let sum = 0
  for (let i = 0; i < 9; i++) sum += Number(t[i]) * (10 - i)
  const r = sum % 11
  return (r < 2 && check === r) || (r >= 2 && check === 11 - r)
}

export function clientIp(req) {
  const x = String(req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || '').split(',')[0].trim()
  return x || req.socket?.remoteAddress || '0.0.0.0'
}

export function hitLimit(d, key, max, windowMs) {
  d.limits = d.limits || {}
  const now = Date.now()
  for (const k of Object.keys(d.limits)) {
    if (now - (d.limits[k].t || 0) > windowMs * 4) delete d.limits[k]
  }
  const row = d.limits[key]
  if (!row || now - row.t > windowMs) {
    d.limits[key] = { n: 1, t: now }
    return 0
  }
  if (row.n >= max) return Math.ceil((windowMs - (now - row.t)) / 1000)
  row.n += 1
  return 0
}

export function parseFile(body, { max = 1_800_000 } = {}) {
  if (!body || !body.data) return null
  const raw = String(body.data || '')
  const m = raw.match(/^data:([^;]+);base64,(.+)$/)
  const mime = String(body.mime || m?.[1] || '').toLowerCase()
  const b64 = m ? m[2] : raw.replace(/\s/g, '')
  const allowed = new Set([
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ])
  if (!allowed.has(mime)) return { error: 'نوع فایل مجاز نیست. PDF، تصویر یا Word.' }
  let buf
  try { buf = Buffer.from(b64, 'base64') } catch { return { error: 'فایل خراب است.' } }
  if (!buf.length) return { error: 'فایل خالی است.' }
  if (buf.length > max) return { error: 'حجم فایل حداکثر ۱٫۸ مگابایت است.' }
  return {
    mime,
    buf,
    b64: buf.toString('base64'),
    name: clip(body.name || 'file', 120),
    size: buf.length,
  }
}

export function hashNid(id) {
  return crypto.createHash('sha256').update(String(id)).digest('hex')
}

export function readPerson(b) {
  const firstName = clip(b.firstName || b.repName || '', 80)
  const lastName = clip(b.lastName || '', 80)
  const mobile = normalizeMobile(b.mobile || b.repMobile || b.phone || '')
  const nationalId = asciiDigits(b.nationalId || b.national_id || '')
  return { firstName, lastName, mobile, nationalId }
}

export function assertPerson({ firstName, lastName, mobile, nationalId }) {
  if (!firstName || !lastName) return 'نام و نام خانوادگی لازم است.'
  if (!isIranMobile(mobile)) return 'شماره همراه باید ۰۹ و ۱۱ رقم باشد.'
  if (!isNationalId(nationalId)) return 'کد ملی نامعتبر است.'
  return null
}
