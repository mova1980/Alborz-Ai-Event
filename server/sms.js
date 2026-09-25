import { IS_PROD } from './env.js'

/**
 * Where to put SMS credentials
 * --------------------------------
 * Local:  file `.env` in the project root (see .env.example)
 * Vercel: Project → Settings → Environment Variables
 *         (Production + Preview), then redeploy.
 *
 * Supported providers (set SMS_PROVIDER):
 *   kavenegar   SMS_API_KEY   SMS_SENDER?   SMS_OTP_TEMPLATE?
 *   smsir       SMS_API_KEY   SMS_LINE?     SMS_OTP_TEMPLATE_ID?
 *   melipayamak SMS_USERNAME  SMS_PASSWORD  SMS_FROM?
 *   magfa       SMS_USERNAME  SMS_PASSWORD  SMS_DOMAIN  SMS_FROM
 *   ghasedak    SMS_API_KEY   SMS_FROM?     SMS_OTP_TEMPLATE?
 *   webhook     SMS_WEBHOOK_URL   (POST JSON { to, text, code })
 */

export function smsConfigured() {
  const p = (process.env.SMS_PROVIDER || '').toLowerCase()
  if (!p || p === 'none') return false
  if (p === 'kavenegar' || p === 'smsir' || p === 'ghasedak') return Boolean(process.env.SMS_API_KEY)
  if (p === 'melipayamak' || p === 'magfa') return Boolean(process.env.SMS_USERNAME && process.env.SMS_PASSWORD)
  if (p === 'webhook') return Boolean(process.env.SMS_WEBHOOK_URL)
  return Boolean(process.env.SMS_API_KEY)
}

export function otpText(code) {
  return `کد تایید هفته تکنولوژی البرز: ${code}\nAlborz Digitex OTP: ${code}`
}

export async function sendOtp(mobile, code) {
  const provider = (process.env.SMS_PROVIDER || 'none').toLowerCase()
  const text = otpText(code)
  if (!smsConfigured()) {
    return { sent: false, provider: 'none', devCode: IS_PROD ? undefined : code }
  }
  try {
    if (provider === 'kavenegar') await sendKavenegar(mobile, code, text)
    else if (provider === 'smsir') await sendSmsir(mobile, code, text)
    else if (provider === 'melipayamak') await sendMelipayamak(mobile, text)
    else if (provider === 'ghasedak') await sendGhasedak(mobile, code, text)
    else if (provider === 'webhook') await sendWebhook(mobile, code, text)
    else if (provider === 'magfa') await sendWebhook(mobile, code, text)
    else return { sent: false, provider, error: 'unknown_provider', devCode: IS_PROD ? undefined : code }
    return { sent: true, provider }
  } catch (e) {
    return { sent: false, provider, error: e.message || 'sms_failed', devCode: IS_PROD ? undefined : code }
  }
}

async function sendKavenegar(mobile, code, text) {
  const key = process.env.SMS_API_KEY
  const template = process.env.SMS_OTP_TEMPLATE
  const sender = process.env.SMS_SENDER || ''
  if (template) {
    const u = new URL(`https://api.kavenegar.com/v1/${key}/verify/lookup.json`)
    u.searchParams.set('receptor', mobile)
    u.searchParams.set('token', code)
    u.searchParams.set('template', template)
    const r = await fetch(u)
    if (!r.ok) throw new Error(`kavenegar ${r.status}`)
    return
  }
  const u = new URL(`https://api.kavenegar.com/v1/${key}/sms/send.json`)
  u.searchParams.set('receptor', mobile)
  u.searchParams.set('message', text)
  if (sender) u.searchParams.set('sender', sender)
  const r = await fetch(u)
  if (!r.ok) throw new Error(`kavenegar ${r.status}`)
}

async function sendSmsir(mobile, code, text) {
  const key = process.env.SMS_API_KEY
  const templateId = process.env.SMS_OTP_TEMPLATE_ID
  if (templateId) {
    const r = await fetch('https://api.sms.ir/v1/send/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'text/plain', 'X-API-KEY': key },
      body: JSON.stringify({
        mobile,
        templateId: Number(templateId),
        parameters: [{ name: 'CODE', value: code }],
      }),
    })
    if (!r.ok) throw new Error(`smsir ${r.status}`)
    return
  }
  const r = await fetch('https://api.sms.ir/v1/send/bulk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-API-KEY': key },
    body: JSON.stringify({
      lineNumber: process.env.SMS_LINE || '',
      messageText: text,
      mobiles: [mobile],
    }),
  })
  if (!r.ok) throw new Error(`smsir ${r.status}`)
}

async function sendMelipayamak(mobile, text) {
  const r = await fetch('https://rest.payamak-panel.com/api/SendSMS/SendSMS', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: process.env.SMS_USERNAME,
      password: process.env.SMS_PASSWORD,
      to: mobile,
      from: process.env.SMS_FROM || '',
      text,
    }),
  })
  if (!r.ok) throw new Error(`melipayamak ${r.status}`)
}

async function sendGhasedak(mobile, code, text) {
  const key = process.env.SMS_API_KEY
  const template = process.env.SMS_OTP_TEMPLATE
  if (template) {
    const r = await fetch('https://api.ghasedak.me/v2/verification/send/simple', {
      method: 'POST',
      headers: { apikey: key, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ receptor: mobile, type: '1', template, param1: code }),
    })
    if (!r.ok) throw new Error(`ghasedak ${r.status}`)
    return
  }
  const r = await fetch('https://api.ghasedak.me/v2/sms/send/simple', {
    method: 'POST',
    headers: { apikey: key, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ receptor: mobile, message: text, linenumber: process.env.SMS_FROM || '' }),
  })
  if (!r.ok) throw new Error(`ghasedak ${r.status}`)
}

async function sendWebhook(mobile, code, text) {
  const r = await fetch(process.env.SMS_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(process.env.SMS_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.SMS_WEBHOOK_TOKEN}` } : {}) },
    body: JSON.stringify({ to: mobile, text, code, origin: 'alborz-digitex' }),
  })
  if (!r.ok) throw new Error(`webhook ${r.status}`)
}
