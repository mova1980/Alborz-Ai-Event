export const DEFAULT_MEDIA = {
  poster: '/images/event-poster.jpg',
  pull: '/images/connection-lab.jpg',
  exhibit: '/images/zone-exhibition.jpg',
  visit: '/images/zone-summit.jpg',
  venue: '/images/venue-merc.jpg',
  venueLab: '/images/live-lab.jpg',
  problems: '/images/problem-wall.jpg',
  og: '/images/og-cover.jpg',
  earth: '/images/earth-globe.webp',
  earthMarble: '/images/earth-blue-marble.jpg',
  earthNight: '/images/earth-night.jpg',
  logoMerc: '/images/logo-merc.png',
  logoMercEmblem: '/images/logo-merc-emblem.png',
  logoNasr: '/images/logo-nasr-emblem.png',
}

export function clone(v) {
  return JSON.parse(JSON.stringify(v))
}

export function deepMerge(base, over) {
  if (over == null) return base
  if (Array.isArray(over)) return over
  if (typeof over === 'object' && base && typeof base === 'object' && !Array.isArray(base)) {
    const out = { ...base }
    for (const k of Object.keys(over)) out[k] = deepMerge(base[k], over[k])
    return out
  }
  return over
}

export function getPath(obj, path) {
  if (!path) return obj
  return String(path).split('.').reduce((o, k) => (o == null ? o : o[k]), obj)
}

export function setPath(obj, path, value) {
  const keys = String(path).split('.')
  const root = Array.isArray(obj) ? [...obj] : { ...(obj || {}) }
  let cur = root
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i]
    const nxt = cur[k]
    cur[k] = Array.isArray(nxt) ? [...nxt] : { ...(nxt && typeof nxt === 'object' ? nxt : {}) }
    cur = cur[k]
  }
  cur[keys[keys.length - 1]] = value
  return root
}

export function mediaUrl(id) {
  return id ? `/api/media/${id}` : ''
}
