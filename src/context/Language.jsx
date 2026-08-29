import { createContext, useContext, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import fa from '../i18n/fa'
import en from '../i18n/en'

const Ctx = createContext(null)

export function LanguageProvider({ children }) {
  const { pathname } = useLocation()
  const isEn = pathname === '/en' || pathname.startsWith('/en/')
  const t = isEn ? en : fa
  const base = isEn ? '/en' : ''

  useEffect(() => {
    document.documentElement.lang = t.lang
    document.documentElement.dir = t.dir
    document.title = t.meta.title
  }, [t])

  const switchPath = (lang) => {
    const rest = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
    if (lang === 'en') return rest === '/' ? '/en' : `/en${rest}`
    return rest
  }

  const path = (p) => {
    if (!p || p === '/') return base || '/'
    return `${base}${p}`
  }

  const value = useMemo(() => ({ t, isEn, base, path, switchPath }), [t, isEn, base, pathname])
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
    }
  }
  return ctx
}
