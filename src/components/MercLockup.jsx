export default function MercLockup({ compact = false }) {
  return (
    <a
      className={`merc-lockup${compact ? ' is-compact' : ''}`}
      href="https://www.merc.ac.ir"
      target="_blank"
      rel="noreferrer"
      title="پژوهشگاه مواد و انرژی"
    >
      <img
        className="merc-full"
        src="/images/logo-merc.png"
        alt="پژوهشگاه مواد و انرژی — وزارت علوم، تحقیقات و فناوری"
      />
      <img
        className="merc-emblem"
        src="/images/logo-merc-emblem.png"
        alt=""
        aria-hidden="true"
      />
    </a>
  )
}
