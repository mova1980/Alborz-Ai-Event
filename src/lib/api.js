const TOKEN_KEY = 'atw_token'
const ADMIN_KEY = 'atw_admin'

export function getToken(kind = 'user') {
  try {
    return localStorage.getItem(kind === 'admin' ? ADMIN_KEY : TOKEN_KEY) || ''
  } catch {
    return ''
  }
}

export function setToken(token, kind = 'user') {
  const k = kind === 'admin' ? ADMIN_KEY : TOKEN_KEY
  try {
    if (token) localStorage.setItem(k, token)
    else localStorage.removeItem(k)
  } catch { /* ignore */ }
}

function messageOf(data, fallback = 'request_failed') {
  if (typeof data === 'string' && data.trim()) return data
  if (!data || typeof data !== 'object') return fallback
  if (typeof data.message === 'string' && data.message.trim()) return data.message
  if (typeof data.error === 'string' && data.error.trim()) return data.error
  if (typeof data.error?.message === 'string') return data.error.message
  return fallback
}

export function errorText(ex, fallback = 'خطا در ارتباط با سرور') {
  if (!ex) return fallback
  if (typeof ex === 'string') return ex
  const m = ex.message
  if (typeof m === 'string' && m && m !== '[object Object]') return m
  return messageOf(ex.data, fallback)
}

export async function api(path, { method = 'GET', body, admin = false } = {}) {
  const headers = { Accept: 'application/json' }
  if (body !== undefined) headers['Content-Type'] = 'application/json'
  const t = getToken(admin ? 'admin' : 'user')
  if (t) headers.Authorization = `Bearer ${t}`
  const r = await fetch(`/api${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  const ct = r.headers.get('content-type') || ''
  const disp = r.headers.get('content-disposition') || ''
  if (
    disp.includes('attachment')
    || ct.includes('text/csv')
    || ct.includes('excel')
    || ct.includes('spreadsheet')
    || ct.includes('application/pdf')
    || ct.includes('octet-stream')
    || ct.startsWith('image/')
    || ct.includes('msword')
    || ct.includes('officedocument')
  ) {
    const blob = await r.blob()
    if (!r.ok) throw new Error('export_failed')
    return blob
  }
  let data = {}
  if (ct.includes('json')) {
    data = await r.json().catch(() => ({}))
  } else {
    const text = await r.text().catch(() => '')
    const line = String(text).split('\n')[0].trim()
    if (line) data = { message: line }
  }
  if (!r.ok) {
    const err = new Error(messageOf(data, r.status === 404 ? 'مسیر API پیدا نشد. بعد از دیپلوی دوباره تلاش کنید.' : 'request_failed'))
    err.status = r.status
    err.data = data
    throw err
  }
  return data
}
