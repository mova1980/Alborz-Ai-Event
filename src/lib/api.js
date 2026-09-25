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
  if (r.headers.get('content-type')?.includes('text/csv')) {
    const blob = await r.blob()
    if (!r.ok) throw new Error('export_failed')
    return blob
  }
  const data = await r.json().catch(() => ({}))
  if (!r.ok) {
    const err = new Error(data.message || data.error || 'request_failed')
    err.status = r.status
    err.data = data
    throw err
  }
  return data
}
