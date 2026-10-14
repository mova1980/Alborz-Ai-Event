import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import fa from '../i18n/fa'
import en from '../i18n/en'
import { localizeDigits, localizeTree, pad2 } from '../lib/digits'
import { deepMerge, DEFAULT_MEDIA } from '../lib/cms'

const Ctx = createContext(null)

export function LanguageProvider({ children }) {
  const { pathname } = useLocation()
  const isEn = pathname === '/en' || pathname.startsWith('/en/')
  const [overlay, setOverlay] = useState(null)

  useEffect(() => {
    let stop = false
    fetch('/api/content')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!stop && d?.content) setOverlay(d.content)
      })
      .catch(() => {})
    return () => { stop = true }
  }, [])

  const bundled = isEn ? en : fa
  const raw = useMemo(() => {
    const over = overlay?.[isEn ? 'en' : 'fa']
    const merged = over ? deepMerge(bundled, over) : bundled
    const images = { ...DEFAULT_MEDIA, ...(overlay?.images || {}) }
    return { ...merged, media: images }
  }, [bundled, overlay, isEn])

  const t = useMemo(() => localizeTree(raw, raw.lang), [raw])
  const base = isEn ? '/en' : ''

  useEffect(() => {
    document.documentElement.lang = t.lang
    document.documentElement.dir = t.dir
    document.title = t.meta.title
    const og = document.querySelector('meta[property="og:image"]')
    if (og && t.media?.og) og.setAttribute('content', t.media.og)
  }, [t])

  const value = useMemo(() => {
    const switchPath = (lang) => {
      const rest = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
      if (lang === 'en') return rest === '/' ? '/en' : `/en${rest}`
      return rest
    }
    const path = (p) => {
      if (!p || p === '/') return base || '/'
      return `${base}${p}`
    }
    const d = (v) => localizeDigits(v, t.lang)
    const n2 = (v) => pad2(v, t.lang)
    return { t, isEn, base, path, switchPath, d, n2 }
  }, [t, isEn, base, pathname])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useI18n() {
  const ctx = useContext(Ctx)
  if (!ctx) {
    return {
      t: { ...fa, media: DEFAULT_MEDIA },
      isEn: false,
      base: '',
      path: (p) => p || '/',
      switchPath: () => '/',
      d: (v) => localizeDigits(v, 'fa'),
      n2: (v) => pad2(v, 'fa'),
    }
  }
  return ctx
}
