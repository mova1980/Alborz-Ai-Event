import { createContext, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import SearchOverlay from './components/SearchOverlay'
import Cursor from './components/Cursor'
import { useI18n } from './context/Language'

export const ReadyCtx = createContext(false)

export default function Layout() {
  const { t } = useI18n()
  const loc = useLocation()
  const [ready, setReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState(false)

  useEffect(() => {
    const tmr = setTimeout(() => setReady(true), 1400)
    return () => clearTimeout(tmr)
  }, [])

  useEffect(() => {
    let stop = () => {}
    let id
    ;(async () => {
      try {
        if (window.matchMedia('(pointer: coarse)').matches) return
        const { default: Lenis } = await import('lenis')
        const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
        const raf = (time) => {
          lenis.raf(time)
          id = requestAnimationFrame(raf)
        }
        id = requestAnimationFrame(raf)
        stop = () => {
          cancelAnimationFrame(id)
          lenis.destroy()
        }
      } catch (e) {
        console.warn('lenis skipped', e)
      }
    })()
    return () => stop()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle('scrolled', window.scrollY >= 1)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setSearch(false)
    window.scrollTo(0, 0)
  }, [loc.pathname])

  useEffect(() => {
    document.body.classList.toggle('mobile-active', menuOpen)
  }, [menuOpen])

  return (
    <ReadyCtx.Provider value={ready}>
      <Preloader done={ready} />
      <Cursor />
      <div className="noise" aria-hidden="true" />
      <a className="skip" href="#mainContent">{t.skip.content}</a>
      <Header
        onSearch={() => setSearch(true)}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      {menuOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label={t.nav.close}
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <div className="site-shift">
        <Outlet />
        <Footer />
      </div>
      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </ReadyCtx.Provider>
  )
}
