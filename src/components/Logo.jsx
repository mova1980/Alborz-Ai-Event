import { Link } from 'react-router-dom'
import { useI18n } from '../context/Language'

export default function Logo() {
  const { t, path } = useI18n()
  return (
    <Link to={path('/')} className="logo" aria-label={t.brand.name}>
      <svg className="logo-mark" viewBox="0 0 42 28" aria-hidden="true">
        <polygon points="8,26 24,2 34,2 18,26" />
      </svg>
      <span className="logo-text">
        <strong>{t.brand.name}</strong>
        <span>{t.brand.year} · {t.brand.enShort}</span>
      </span>
    </Link>
  )
}
