import { useI18n } from '../context/Language'

export default function NasrLockup() {
  const { t } = useI18n()
  return (
    <a
      className="nasr-lockup"
      href={t.brand.nasrUrl || 'https://alborz.irannsr.org'}
      target="_blank"
      rel="noreferrer"
      title={t.brand.organizer}
    >
      <img
        className="nasr-emblem"
        src={t.media?.logoNasr || '/images/logo-nasr-emblem.png'}
        alt=""
        aria-hidden="true"
      />
      <span className="nasr-text">
        <strong>{t.brand.nasrLine1}</strong>
        <span>{t.brand.nasrLine2}</span>
      </span>
    </a>
  )
}
