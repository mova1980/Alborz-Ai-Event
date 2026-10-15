function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function excelXml(sheetName, headers, rows) {
  const cell = (v) => `<Cell><Data ss:Type="String">${esc(v)}</Data></Cell>`
  const rowXml = (arr) => `<Row>${arr.map(cell).join('')}</Row>`
  const body = [rowXml(headers), ...rows.map(rowXml)].join('')
  return `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
<Worksheet ss:Name="${esc(sheetName).slice(0, 31)}"><Table>${body}</Table></Worksheet>
</Workbook>`
}

export function reportHtml({ title, headers, rows, rtl = true }) {
  const th = headers.map((h) => `<th>${esc(h)}</th>`).join('')
  const tr = rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')
  return `<!doctype html>
<html lang="${rtl ? 'fa' : 'en'}" dir="${rtl ? 'rtl' : 'ltr'}">
<head>
<meta charset="utf-8"/>
<title>${esc(title)}</title>
<style>
  body { font-family: Tahoma, Vazirmatn, sans-serif; background: #fff; color: #111; margin: 24px; }
  h1 { font-size: 20px; margin: 0 0 16px; }
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  th, td { border: 1px solid #c5d0dc; padding: 6px 8px; text-align: start; vertical-align: top; }
  th { background: #0055ff; color: #fff; }
  tr:nth-child(even) td { background: #f4f7fb; }
  .meta { color: #555; font-size: 12px; margin-bottom: 14px; }
  @media print { body { margin: 12px; } }
</style>
</head>
<body>
<h1>${esc(title)}</h1>
<p class="meta">${new Date().toLocaleString(rtl ? 'fa-IR' : 'en-GB')}</p>
<table><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table>
<script>window.addEventListener('load',()=>setTimeout(()=>window.print(),400))</script>
</body></html>`
}

export function sendDownload(res, { mime, filename, body }) {
  const buf = Buffer.isBuffer(body) ? body : Buffer.from(body)
  res.statusCode = 200
  res.setHeader('Content-Type', mime)
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Length', buf.length)
  res.end(buf)
}

export function registrationRows(list) {
  const headers = [
    'code', 'status', 'firstName', 'lastName', 'nationalId', 'mobile',
    'companyName', 'activityField', 'registerPlace', 'companyType',
    'knowledgeBased', 'nasrMember', 'kbAssocMember', 'address', 'phone',
    'repName', 'repMobile', 'staff', 'equipment', 'booth', 'adminNote',
    'checkedInAt', 'createdAt',
  ]
  const rows = list.map((r) => [
    r.code, r.status, r.firstName || '', r.lastName || '', r.nationalId || '',
    r.mobile, r.companyName || '', r.activityField || '', r.registerPlace || '',
    r.companyType || '', r.knowledgeBased ? 'yes' : 'no', r.nasrMember ? 'yes' : 'no',
    r.kbAssocMember ? 'yes' : 'no', r.address || '', r.phone || '',
    r.representative?.name || '', r.representative?.mobile || '',
    (r.staff || []).map((p) => [p.name, p.role, p.mobile].filter(Boolean).join(' ')).join(' | '),
    r.equipment || '', r.booth || '', r.adminNote || '',
    r.checkedInAt ? new Date(r.checkedInAt).toISOString() : '',
    r.createdAt ? new Date(r.createdAt).toISOString() : '',
  ])
  return { headers, rows }
}

export function secretariatRows(list) {
  const headers = ['id', 'actorType', 'name', 'org', 'role', 'email', 'phone', 'subject', 'message', 'fileName', 'status', 'createdAt']
  const rows = list.map((m) => [
    m.id, m.actorType || '', m.name || '', m.org || '', m.role || '',
    m.email || '', m.phone || '', m.subject || '', m.message || '',
    m.file?.name || '', m.status || '', m.createdAt ? new Date(m.createdAt).toISOString() : '',
  ])
  return { headers, rows }
}
