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
  if (ct.includes('text/csv')) {
    const blob = await r.blob()
    if (!r.ok) throw new Error('export_failed')
    return blob
  }
  const data = ct.includes('json') ? await r.json().catch(() => ({})) : {}
  if (!r.ok) {
    const err = new Error(messageOf(data, r.status === 404 ? 'مسیر یافت نشد' : 'request_failed'))
    err.status = r.status
    err.data = data
    throw err
  }
  return data
}
