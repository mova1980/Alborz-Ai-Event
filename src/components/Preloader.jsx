export default function Preloader({ done }) {
  return (
    <div className={`preloader ${done ? 'is-done' : ''}`} aria-hidden={done}>
      <svg className="preloader-mark" viewBox="0 0 200 130">
        <path d="M40 118 L110 12 L160 12 L90 118 Z" />
        <polygon className="fill-late" points="40,118 110,12 160,12 90,118" />
      </svg>
      <p>ALBORZ TECHNOLOGY WEEK</p>
    </div>
  )
}
