import { createClient } from '@supabase/supabase-js'

let client = null
function sb() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  if (!client) {
    client = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
  }
  return client
}

function iso(n) {
  if (!n) return new Date().toISOString()
  return new Date(n).toISOString()
}

export async function upsertRegistration(row) {
  const s = sb()
  if (!s || !row) return
  const { error } = await s.from('atw_registrations').upsert({
    id: row.id,
    code: row.code,
    first_name: row.firstName || '',
    last_name: row.lastName || '',
    mobile: row.mobile || '',
    national_id: row.nationalId || '',
    company_name: row.companyName || '',
    status: row.status || 'submitted',
    payload: row,
    created_at: iso(row.createdAt),
    updated_at: iso(row.updatedAt),
    first_checked_in_at: row.checkedInAt ? iso(row.checkedInAt) : null,
  })
  if (error) console.error('atw_registrations', error.message)
}

export async function upsertSecretariat(row) {
  const s = sb()
  if (!s || !row) return
  const { error } = await s.from('atw_secretariat').upsert({
    id: row.id,
    actor_type: row.actorType || '',
    name: row.name || '',
    org: row.org || '',
    email: row.email || '',
    phone: row.phone || '',
    subject: row.subject || '',
    message: row.message || '',
    file_id: row.fileId || null,
    status: row.status || 'new',
    payload: row,
    created_at: iso(row.createdAt),
  })
  if (error) console.error('atw_secretariat', error.message)
}

export async function insertCheckin(row) {
  const s = sb()
  if (!s || !row) return
  const { error } = await s.from('atw_checkins').upsert({
    id: row.id,
    registration_id: row.registrationId,
    code: row.code,
    day: row.day,
    checked_in_at: iso(row.inAt || row.at),
    checked_out_at: row.outAt ? iso(row.outAt) : null,
    checked_in_by: row.by || '',
    inside: row.inside !== false,
    last_dir: row.lastDir || 'in',
    last_at: iso(row.lastAt || row.at),
    scan_count: row.scanCount || (row.scans || []).length || 1,
    scans: row.scans || [],
  })
  if (error) console.error('atw_checkins', error.message)
}

export async function insertScan(row) {
  const s = sb()
  if (!s || !row) return
  const { error } = await s.from('atw_scans').upsert({
    id: row.id,
    registration_id: row.registrationId || null,
    code: row.code || '',
    raw: row.raw || '',
    day: row.day,
    dir: row.dir || 'in',
    allowed: row.allowed !== false,
    at: iso(row.at),
    checked_in_by: row.by || '',
    payload: row,
  })
  if (error) console.error('atw_scans', error.message)
}

export async function upsertFile(meta) {
  const s = sb()
  if (!s || !meta) return
  const { error } = await s.from('atw_files').upsert({
    id: meta.id,
    name: meta.name || '',
    mime: meta.mime || '',
    size: meta.size || 0,
    data: meta.b64 || '',
    created_at: iso(meta.createdAt),
  })
  if (error) console.error('atw_files', error.message)
}
