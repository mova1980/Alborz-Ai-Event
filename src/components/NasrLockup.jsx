import { useI18n } from '../context/Language'

export default function NasrLockup() {
  const { isEn } = useI18n()
  return (
    <a
      className="nasr-lockup"
      href="https://alborz.irannsr.org"
      target="_blank"
      rel="noreferrer"
      title={isEn ? 'Alborz Computer Trade Organization' : 'سازمان نظام صنفی رایانه‌ای استان البرز'}
    >
      <img
        className="nasr-emblem"
        src="/images/logo-nasr-emblem.png"
        alt=""
        aria-hidden="true"
      />
      <span className="nasr-text">
        <strong>{isEn ? 'Computer Trade Org.' : 'سازمان نظام صنفی رایانه‌ای'}</strong>
        <span>{isEn ? 'Alborz Province' : 'استان البرز'}</span>
      </span>
    </a>
  )
}
