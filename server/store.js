import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { createClient } from '@supabase/supabase-js'

const empty = () => ({
  registrations: [],
  messages: [],
  otps: {},
  content: { registrationOpen: true, noticeFa: '', noticeEn: '' },
  media: [],
  mediaBlobs: {},
  seq: 1,
})

function filePath() {
  if (process.env.DATA_FILE) return process.env.DATA_FILE
  if (process.env.VERCEL) return '/tmp/atw-store.json'
  return join(process.cwd(), 'data', 'store.json')
}

let cache = null
let writeChain = Promise.resolve()
let sql = null
let sbClient = null

function supabase() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  if (sbClient) return sbClient
  sbClient = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return sbClient
}

export function persistenceKind() {
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) return 'supabase'
  if (process.env.DATABASE_URL) return 'postgres'
  if (process.env.VERCEL) return 'ephemeral'
  return 'file'
}

async function pg() {
  if (!process.env.DATABASE_URL) return null
  if (sql) return sql
  try {
    const postgres = (await import('postgres')).default
    const ssl = /localhost|127\.0\.0\.1/.test(process.env.DATABASE_URL) ? false : 'require'
    sql = postgres(process.env.DATABASE_URL, { max: 1, ssl, idle_timeout: 20, connect_timeout: 10 })
    await sql`create table if not exists atw_store (id int primary key default 1, data jsonb not null)`
    return sql
  } catch (e) {
    console.error('postgres unavailable', e.message)
    sql = null
    return null
  }
}

async function readDisk() {
  const s = supabase()
  if (s) {
    const { data, error } = await s.from('atw_store').select('data').eq('id', 1).maybeSingle()
    if (error) throw new Error(error.message || 'supabase_read')
    if (!data) {
      const seed = empty()
      const ins = await s.from('atw_store').insert({ id: 1, data: seed })
      if (ins.error) throw new Error(ins.error.message || 'supabase_insert')
      return seed
    }
    return { ...empty(), ...(data.data || {}) }
  }
  const db = await pg()
  if (db) {
    const rows = await db`select data from atw_store where id = 1`
    if (!rows[0]) {
      const seed = empty()
      await db`insert into atw_store (id, data) values (1, ${db.json(seed)}) on conflict (id) do nothing`
      return seed
    }
    return { ...empty(), ...rows[0].data }
  }
  const p = filePath()
  if (!existsSync(p)) return empty()
  try {
    return { ...empty(), ...JSON.parse(readFileSync(p, 'utf8')) }
  } catch {
    return empty()
  }
}

async function writeDisk(data) {
  const s = supabase()
  if (s) {
    const { error } = await s.from('atw_store').upsert({
      id: 1,
      data,
      updated_at: new Date().toISOString(),
    })
    if (error) throw new Error(error.message || 'supabase_write')
    return
  }
  const db = await pg()
  if (db) {
    await db`insert into atw_store (id, data) values (1, ${db.json(data)})
      on conflict (id) do update set data = excluded.data`
    return
  }
  const p = filePath()
  mkdirSync(dirname(p), { recursive: true })
  writeFileSync(p, JSON.stringify(data))
}

export async function load() {
  cache = await readDisk()
  return cache
}

export async function mutate(fn) {
  const run = async () => {
    // Always re-read so two Vercel instances cannot overwrite each other with a stale cache.
    const data = await readDisk()
    const out = await fn(data)
    cache = data
    await writeDisk(data)
    return out
  }
  const p = writeChain.then(run, run)
  writeChain = p.then(() => {}, () => {})
  return p
}

export async function getRegByCode(code) {
  const data = await readDisk()
  const c = String(code || '').trim().toUpperCase()
  return data.registrations.find((r) => r.code === c) || null
}

export async function getRegById(id) {
  const data = await readDisk()
  return data.registrations.find((r) => r.id === id) || null
}
