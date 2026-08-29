import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../context/Language'

export default function SearchOverlay({ open, onClose }) {
  const { t, path } = useI18n()
  const [q, setQ] = useState('')
  const input = useRef(null)
  const nav = useNavigate()

  const index = useMemo(() => ([
    { t: t.nav.program, p: '/program' },
    { t: t.nav.exhibit, p: '/exhibit' },
    { t: t.nav.visit, p: '/visit' },
    { t: t.nav.problems, p: '/problems' },
    { t: t.nav.venue, p: '/venue' },
    { t: t.brand.tagline, p: '/' },
    { t: t.brand.theme, p: '/problems' },
    { t: t.hero.ctaBooth, p: '/exhibit' },
  ]), [t])

  const hits = q.trim()
    ? index.filter((i) => i.t.toLowerCase().includes(q.trim().toLowerCase()))
    : index

  useEffect(() => {
    if (open) {
      setTimeout(() => input.current?.focus(), 50)
    } else setQ('')
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className={`search-overlay ${open ? 'is-on' : ''}`} role="dialog" aria-label={t.nav.search}>
      <button className="search-close" type="button" onClick={onClose}>{t.nav.close}</button>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (hits[0]) {
            nav(path(hits[0].p))
            onClose()
          }
        }}
      >
        <input
          ref={input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t.search.placeholder}
          aria-label={t.search.placeholder}
        />
      </form>
    </div>
  )
}
