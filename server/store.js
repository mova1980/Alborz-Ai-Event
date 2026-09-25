import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import postgres from 'postgres'

const empty = () => ({
  registrations: [],
  messages: [],
  otps: {},
  content: { registrationOpen: true, noticeFa: '', noticeEn: '' },
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

async function pg() {
  if (!process.env.DATABASE_URL) return null
  if (sql) return sql
  try {
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

export function persistenceKind() {
  if (process.env.DATABASE_URL) return 'postgres'
  if (process.env.VERCEL) return 'ephemeral'
  return 'file'
}

async function readDisk() {
  const db = await pg()
  if (db) {
    const rows = await db`select data from atw_store where id = 1`
    if (!rows[0]) {
      const data = empty()
      await db`insert into atw_store (id, data) values (1, ${db.json(data)}) on conflict (id) do nothing`
      return data
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
  if (cache) return cache
  cache = await readDisk()
  return cache
}

export async function mutate(fn) {
  const run = async () => {
    const data = await load()
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
  const data = await load()
  const c = String(code || '').trim().toUpperCase()
  return data.registrations.find((r) => r.code === c) || null
}

export async function getRegById(id) {
  const data = await load()
  return data.registrations.find((r) => r.id === id) || null
}
