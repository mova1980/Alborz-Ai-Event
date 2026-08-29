import { Link } from 'react-router-dom'
import { useI18n } from '../context/Language'
import Logo from './Logo'
import MercLockup from './MercLockup'

export default function Footer() {
  const { t, path } = useI18n()
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="social" id="footerSocial">
          {['X', 'in'].map((n) => (
            <a key={n} href="#" aria-label={n}>
              <svg viewBox="0 0 58 39">
                <polygon points="1.5 37.4 19.7 1 56.3 1 38.1 37.4" />
                <text x="29" y="24" textAnchor="middle" className="inn" fill="#fff" fontSize="11" fontFamily="Outfit, sans-serif">{n}</text>
              </svg>
            </a>
          ))}
        </div>
        <div className="footer-phone"><a href="tel:+982636201888">{t.footer.phone}</a></div>
        <ul className="footer-offices">
          <li><Link to={path('/venue')}>{t.brand.host}</Link></li>
          <li>Karaj</li>
          <li>Alborz</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <Logo />
        <MercLockup />
        <div>{t.footer.copy}</div>
        <a href={`mailto:${t.footer.email}`}>{t.footer.email}</a>
      </div>
    </footer>
  )
}
