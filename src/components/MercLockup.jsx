import { useI18n } from '../context/Language'

export default function MercLockup({ compact = false }) {
  const { t } = useI18n()
  return (
    <a
      className={`merc-lockup${compact ? ' is-compact' : ''}`}
      href={t.brand.mercUrl || 'https://www.merc.ac.ir'}
      target="_blank"
      rel="noreferrer"
      title={t.brand.host}
    >
      <img
        className="merc-full"
        src={t.media?.logoMerc || '/images/logo-merc.png'}
        alt={t.brand.host}
      />
      <img
        className="merc-emblem"
        src={t.media?.logoMercEmblem || '/images/logo-merc-emblem.png'}
        alt=""
        aria-hidden="true"
      />
    </a>
  )
}
