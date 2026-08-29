import { NavLink, Link } from 'react-router-dom'
import { useI18n } from '../context/Language'
import Logo from './Logo'
import MercLockup from './MercLockup'

const ITEMS = [
  ['program', '/program'],
  ['exhibit', '/exhibit'],
  ['visit', '/visit'],
  ['problems', '/problems'],
  ['venue', '/venue'],
]

export default function Header({ onSearch, menuOpen, setMenuOpen }) {
  const { t, path, switchPath, isEn } = useI18n()

  return (
    <header className="header" id="header">
      <div className="header-inner">
        <div className="brand-lockup">
          <Logo />
          <span className="brand-rule" aria-hidden="true" />
          <MercLockup />
        </div>

        <nav id="mainNav" className={menuOpen ? 'target' : ''} aria-label={t.nav.menu}>
          <ul>
            {ITEMS.map(([key, p]) => (
              <li key={key}>
                <NavLink
                  to={path(p)}
                  className={({ isActive }) => (isActive ? 'is-current' : undefined)}
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav[key]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-tools">
          <div className="lang-switch" aria-label="Language">
            <Link to={switchPath('fa')} className={!isEn ? 'is-active' : undefined}>FA</Link>
            <Link to={switchPath('en')} className={isEn ? 'is-active' : undefined}>EN</Link>
          </div>
          <button className="icon-btn" onClick={onSearch} aria-label={t.nav.search} title={t.nav.search}>
            <svg viewBox="0 0 20 18"><path d="M.2 18l6-6C3.7 8.7 4.4 4 7.8 1.5 11.1-1 15.8-.3 18.3 3c2.5 3.3 1.8 8-1.6 10.5-2.7 2-6.3 2-9 0L3.3 18H.2zM12.2 13.5c3.3 0 5.9-2.7 5.9-5.9S15.5 1.6 12.2 1.6 6.3 4.3 6.3 7.6c0 3.3 2.7 5.9 5.9 5.9" /></svg>
          </button>
          <button
            id="navToggle"
            className={`mobile-nav mobile-nav-spring ${menuOpen ? 'is-active' : ''}`}
            type="button"
            aria-label={t.nav.menu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="mobile-nav-box">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
