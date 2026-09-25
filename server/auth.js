import crypto from 'node:crypto'
import { JWT_SECRET, ADMIN_USER, ADMIN_PASS, SUPER_USER, SUPER_PASS } from './env.js'

const FA = '۰۱۲۳۴۵۶۷۸۹'

export function normalizeMobile(s) {
  let t = String(s || '').trim()
  t = t.replace(/[۰-۹]/g, (d) => String(FA.indexOf(d)))
  t = t.replace(/[\s\-()]/g, '')
  if (t.startsWith('+98')) t = `0${t.slice(3)}`
  else if (t.startsWith('0098')) t = `0${t.slice(4)}`
  else if (t.startsWith('98') && t.length === 12) t = `0${t.slice(2)}`
  return t
}

export function isIranMobile(t) {
  return /^09\d{9}$/.test(t)
}

function b64url(input) {
  return Buffer.from(input).toString('base64url')
}

export function signToken(payload, ttlSec) {
  const h = b64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const p = b64url(JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + ttlSec }))
  const sig = crypto.createHmac('sha256', JWT_SECRET).update(`${h}.${p}`).digest('base64url')
  return `${h}.${p}.${sig}`
}

export function verifyToken(token) {
  try {
    const [h, p, s] = String(token || '').split('.')
    if (!h || !p || !s) return null
    const expect = crypto.createHmac('sha256', JWT_SECRET).update(`${h}.${p}`).digest('base64url')
    const a = Buffer.from(s)
    const b = Buffer.from(expect)
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null
    const data = JSON.parse(Buffer.from(p, 'base64url').toString())
    if (!data.exp || data.exp < Math.floor(Date.now() / 1000)) return null
    return data
  } catch {
    return null
  }
}

export function otpCode() {
  return String(crypto.randomInt(100000, 1000000))
}

export function hashOtp(mobile, code) {
  return crypto.createHmac('sha256', JWT_SECRET).update(`${mobile}:${code}`).digest('hex')
}

export function checkAdmin(user, pass) {
  const u = String(user || '').trim()
  const p = String(pass || '')
  if (u === ADMIN_USER && p === ADMIN_PASS) return { role: 'admin', user: ADMIN_USER }
  if (u === SUPER_USER && p === SUPER_PASS) return { role: 'supervisor', user: SUPER_USER }
  return null
}

export function newId(prefix = 'id') {
  return `${prefix}_${crypto.randomBytes(8).toString('hex')}`
}

export function trackingCode() {
  const n = crypto.randomBytes(5).toString('hex').toUpperCase()
  return `ATW26-${n.slice(0, 4)}-${n.slice(4)}`
}
