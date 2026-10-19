/** Axiom POS80U — 80 mm thermal slip. Preview on screen, then print. */

import { barcodeDataUrl } from '../../server/barcode.js'

const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹'
const FA_MONTHS = [
  'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
  'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند',
]

function toFaDigits(s) {
  return String(s).replace(/[0-9]/g, (d) => FA_DIGITS[d])
}

/** Gregorian Y-M-D → Jalali [jy, jm, jd] */
export function gregorianToJalali(gy, gm, gd) {
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
  const gy2 = gm > 2 ? gy + 1 : gy
  let days = 355666 + (365 * gy) + Math.floor((gy2 + 3) / 4)
    - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400)
    + gd + g_d_m[gm - 1]
  let jy = -1595 + 33 * Math.floor(days / 12053)
  days %= 12053
  jy += 4 * Math.floor(days / 1461)
  days %= 1461
  if (days > 365) {
    jy += Math.floor((days - 1) / 365)
    days = (days - 1) % 365
  }
  const jm = days < 186 ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30)
  const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30)
  return [jy, jm, jd]
}

function tehranParts(ms) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tehran',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  const map = {}
  for (const p of dtf.formatToParts(new Date(ms))) {
    if (p.type !== 'literal') map[p.type] = p.value
  }
  let hour = Number(map.hour)
  if (hour === 24) hour = 0
  return {
    year: Number(map.year),
    month: Number(map.month),
    day: Number(map.day),
    hour,
    minute: Number(map.minute),
  }
}

/** First-entry clock in Jalali Persian (Tehran). Null if not checked in yet. */
export function formatFirstEntryFa(ms) {
  const n = Number(ms) || 0
  if (n < 1) return null
  const p = tehranParts(n)
  const [jy, jm, jd] = gregorianToJalali(p.year, p.month, p.day)
  const date = toFaDigits(`${jd} ${FA_MONTHS[jm - 1]} ${jy}`)
  const time = toFaDigits(`${String(p.hour).padStart(2, '0')}:${String(p.minute).padStart(2, '0')}`)
  return { date, time, line: `${date} — ساعت ${time}` }
}

function esc(s) {
  return String(s || '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]))
}

function barcodeMarkup(src) {
  const img = String(src || '')
  if (!img) return ''
  if (img.startsWith('<svg')) return img
  return `<img src="${esc(img)}" alt="" />`
}

export function normalizeTicket(t = {}) {
  let firstName = String(t.firstName || '').trim()
  let lastName = String(t.lastName || '').trim()
  if (!firstName && !lastName && t.displayName) {
    const parts = String(t.displayName).trim().split(/\s+/)
    firstName = parts[0] || ''
    lastName = parts.slice(1).join(' ')
  }
  const code = String(t.code || '').trim()
  let barcode = t.barcode || ''
  if (!barcode && code) {
    try { barcode = barcodeDataUrl(code) } catch { barcode = '' }
  }
  const firstEntryAt = Number(t.firstEntryAt || t.checkedInAt || 0) || 0
  return { code, barcode, firstName, lastName, firstEntryAt }
}

/** Shared slip CSS — preview paper and POS80U print use the same rules. */
export const SLIP_CSS = `
  .slip {
    width: 72mm;
    margin: 0 auto;
    padding: 0;
    color: #000;
    background: #fff;
    font-family: Tahoma, "IRANSans", Vazirmatn, Arial, sans-serif;
    text-align: center;
    direction: rtl;
  }
  .slip .bc-box {
    border: 2px solid #000;
    padding: 2.2mm 1.5mm 1.6mm;
    background: #fff;
    box-sizing: border-box;
  }
  .slip .bc-box img,
  .slip .bc-box svg {
    display: block;
    width: 100%;
    height: 16mm;
    object-fit: contain;
  }
  .slip .fn,
  .slip .ln {
    font-size: 15px;
    font-weight: 700;
    line-height: 1.35;
    margin: 0;
  }
  .slip .fn { margin-top: 3.2mm; }
  .slip .ln { margin-top: 0.4mm; }
  .slip .entry-k {
    margin-top: 3mm;
    font-size: 10px;
    font-weight: 700;
  }
  .slip .entry-d {
    margin-top: 0.6mm;
    font-size: 13px;
    font-weight: 700;
  }
  .slip .entry-t {
    margin-top: 0.4mm;
    font-size: 13px;
    font-weight: 700;
  }
`

export function slipInnerHtml(raw) {
  const t = normalizeTicket(raw)
  const entry = formatFirstEntryFa(t.firstEntryAt)
  const names = [t.firstName, t.lastName].filter(Boolean)
  return `<div class="slip">
  <div class="bc-box">${barcodeMarkup(t.barcode)}</div>
  ${t.firstName ? `<div class="fn">${esc(t.firstName)}</div>` : ''}
  ${t.lastName ? `<div class="ln">${esc(t.lastName)}</div>` : ''}
  ${!names.length ? `<div class="fn">${esc(t.code)}</div>` : ''}
  ${entry ? `<div class="entry-k">اولین ورود</div>
  <div class="entry-d">${esc(entry.date)}</div>
  <div class="entry-t">ساعت ${esc(entry.time)}</div>` : ''}
</div>`
}

export function ticketDocument(raw) {
  return `<!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8"/>
<title>فیش ورود</title>
<style>
  @page { size: 80mm auto; margin: 0; }
  html, body {
    width: 80mm;
    margin: 0;
    padding: 0;
    background: #fff;
    color: #000;
  }
  body { padding: 3mm 4mm 4mm; box-sizing: border-box; }
  ${SLIP_CSS}
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
</style>
</head>
<body>${slipInnerHtml(raw)}</body>
</html>`
}

/** Send the 80 mm slip to the system print dialog (choose Axiom POS80U, paper 80 mm, margins none). */
export function printPos80(raw) {
  if (typeof document === 'undefined') return false
  const html = ticketDocument(raw)
  const prev = document.getElementById('atw-pos80-iframe')
  if (prev) prev.remove()
  const iframe = document.createElement('iframe')
  iframe.id = 'atw-pos80-iframe'
  iframe.title = 'POS80U'
  iframe.setAttribute('aria-hidden', 'true')
  Object.assign(iframe.style, {
    position: 'fixed',
    right: '0',
    bottom: '0',
    width: '80mm',
    height: '140mm',
    border: '0',
    opacity: '0',
    pointerEvents: 'none',
  })
  document.body.appendChild(iframe)
  const doc = iframe.contentWindow?.document
  if (!doc) return false
  doc.open()
  doc.write(html)
  doc.close()
  const run = () => {
    try {
      iframe.contentWindow.focus()
      iframe.contentWindow.print()
    } catch { /* ignore */ }
  }
  setTimeout(run, 280)
  setTimeout(() => { iframe.remove() }, 120000)
  return true
}
