import { createContext, useContext, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import fa from '../i18n/fa'
import en from '../i18n/en'
import { localizeDigits, localizeTree, pad2 } from '../lib/digits'

const Ctx = createContext(null)

export function LanguageProvider({ children }) {
  const { pathname } = useLocation()
  const isEn = pathname === '/en' || pathname.startsWith('/en/')
  const raw = isEn ? en : fa
  const t = useMemo(() => localizeTree(raw, raw.lang), [raw])
  const base = isEn ? '/en' : ''

  useEffect(() => {
    document.documentElement.lang = t.lang
    document.documentElement.dir = t.dir
    document.title = t.meta.title
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
      t: fa,
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
