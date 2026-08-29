const FA = '۰۱۲۳۴۵۶۷۸۹'

export function localizeDigits(value, lang) {
  if (value == null) return value
  const s = String(value)
  if (lang === 'fa') {
    return s
      .replace(/[0-9]/g, (d) => FA[d])
      .replace(/[٠-٩]/g, (d) => FA[d.charCodeAt(0) - 0x0660])
  }
  return s
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06F0))
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
}

const SKIP = new Set(['href', 'email', 'lang', 'dir'])

export function localizeTree(node, lang, key) {
  if (typeof node === 'string') {
    if (SKIP.has(key)) return node
    return localizeDigits(node, lang)
  }
  if (Array.isArray(node)) return node.map((n) => localizeTree(n, lang))
  if (node && typeof node === 'object') {
    const out = {}
    for (const k of Object.keys(node)) out[k] = localizeTree(node[k], lang, k)
    return out
  }
  return node
}

export function pad2(n, lang) {
  return localizeDigits(String(Math.max(0, Math.floor(Number(n) || 0))).padStart(2, '0'), lang)
}
