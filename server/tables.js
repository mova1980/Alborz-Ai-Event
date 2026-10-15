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
