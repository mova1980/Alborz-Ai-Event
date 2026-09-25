export function json(res, status, data) {
  const body = JSON.stringify(data)
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(body)
}

export function readBody(req) {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
    return Promise.resolve(req.body)
  }
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (c) => chunks.push(c))
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8').trim()
      if (!raw) return resolve({})
      try {
        resolve(JSON.parse(raw))
      } catch {
        resolve({})
      }
    })
    req.on('error', reject)
  })
}

export function bearer(req) {
  const h = req.headers.authorization || req.headers.Authorization || ''
  const m = String(h).match(/^Bearer\s+(.+)$/i)
  return m ? m[1].trim() : ''
}

export function pathnameOf(req) {
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost'
  const proto = req.headers['x-forwarded-proto'] || 'http'
  try {
    return new URL(req.url, `${proto}://${host}`)
  } catch {
    return new URL(req.url || '/', 'http://localhost')
  }
}

export function publicOrigin(req) {
  if (process.env.PUBLIC_URL) return process.env.PUBLIC_URL.replace(/\/$/, '')
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'www.alborz-digitex.ir'
  const proto = req.headers['x-forwarded-proto'] || 'https'
  return `${proto}://${host}`
}
