/** Code 128-B — linear barcode for Cbon N-200 and Axiom POS80U (80 mm). */

const PAT = [
  '212222', '222122', '222221', '121223', '121322', '131222', '122213', '122312', '132212', '221213',
  '221312', '231212', '112232', '122132', '122231', '113222', '123122', '123221', '223211', '221132',
  '221231', '213212', '223112', '312131', '311222', '321122', '321221', '312212', '322112', '322211',
  '212123', '212321', '232121', '111323', '131123', '131321', '112313', '132113', '132311', '211313',
  '231113', '231311', '112133', '112331', '132131', '113123', '113321', '133121', '313121', '211331',
  '231131', '213113', '213311', '213131', '311123', '311321', '331121', '312113', '312311', '332111',
  '314111', '221411', '431111', '111224', '111422', '121124', '121421', '141122', '141221', '112214',
  '112412', '122114', '122411', '142112', '142211', '241211', '221114', '413111', '241112', '134111',
  '111242', '121142', '121241', '114212', '124112', '124211', '411212', '421112', '421211', '212141',
  '214121', '412121', '111143', '111341', '131141', '114113', '114311', '411113', '411311', '113141',
  '114131', '311141', '411131', '211412', '211214', '211232', '2331112',
]

const START_B = 104
const STOP = 106

function valuesOf(text) {
  const s = String(text || '')
  const vals = [START_B]
  for (const ch of s) {
    const c = ch.charCodeAt(0)
    if (c < 32 || c > 126) throw new Error('barcode_charset')
    vals.push(c - 32)
  }
  let sum = START_B
  for (let i = 1; i < vals.length; i++) sum += vals[i] * i
  vals.push(sum % 103)
  vals.push(STOP)
  return vals
}

export function code128Widths(text) {
  return valuesOf(text).flatMap((v) => PAT[v].split('').map(Number))
}

export function displayCode(s) {
  return String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, '')
}

export function barcodeSvg(text, { height = 64, module = 2, label = false } = {}) {
  const t = displayCode(text)
  const widths = code128Widths(t)
  const quiet = 10 * module
  const w = widths.reduce((a, b) => a + b, 0) * module + quiet * 2
  const h = height + (label ? 18 : 0)
  let x = quiet
  let bars = ''
  let black = true
  for (const n of widths) {
    const bw = n * module
    if (black) bars += `<rect x="${x}" y="0" width="${bw}" height="${height}" fill="#000"/>`
    x += bw
    black = !black
  }
  const cap = label
    ? `<text x="${w / 2}" y="${height + 14}" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#000">${t.replace(/[<>&]/g, '')}</text>`
    : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${t}">${bars}${cap}</svg>`
}

export function barcodeDataUrl(text) {
  const t = displayCode(text)
  if (!t) return ''
  const svg = barcodeSvg(t, { label: false, height: 64, module: 2 })
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

export function tehranDay(ms = Date.now()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tehran',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(ms))
}

export function normTrack(s) {
  return displayCode(s)
}

export function codesMatch(stored, scanned) {
  const a = displayCode(stored)
  const b = displayCode(scanned)
  return Boolean(a && b && a === b)
}
