import { existsSync, readFileSync } from 'node:fs'

if (!process.env.VERCEL) {
  for (const name of ['.env.local', '.env']) {
    if (!existsSync(name)) continue
    for (const line of readFileSync(name, 'utf8').split('\n')) {
      const t = line.trim()
      if (!t || t.startsWith('#')) continue
      const i = t.indexOf('=')
      if (i < 1) continue
      const k = t.slice(0, i).trim()
      let v = t.slice(i + 1).trim()
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1)
      if (process.env[k] == null) process.env[k] = v
    }
  }
}

export const PUBLIC_URL = (process.env.PUBLIC_URL || 'https://www.alborz-digitex.ir').replace(/\/$/, '')
export const JWT_SECRET = process.env.JWT_SECRET || 'atw-alborz-digitex-change-me-in-vercel'
export const ADMIN_USER = process.env.ADMIN_USER || 'admin'
export const ADMIN_PASS = process.env.ADMIN_PASS || 'Digitex@123456'
export const SUPER_USER = process.env.SUPERVISOR_USER || 'supervisor'
export const SUPER_PASS = process.env.SUPERVISOR_PASS || '123456'
export const IS_PROD = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'
