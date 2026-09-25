import { useI18n } from '../context/Language'

export default function Colleagues() {
  const { t } = useI18n()
  const items = t.partners.colleagues || []
  if (!items.length) return null
  return (
    <div className="colleagues">
      <div className="kicker">{t.partners.colleaguesKicker}</div>
      <h2 className="section-title">{t.partners.colleaguesTitle}</h2>
      <ul className="col-rail">
        {items.map((c, i) => (
          <li key={c.id} style={{ '--i': i }} title={c.name}>
            <article className="col-item">
              <span className="col-mark" aria-hidden="true">
                <img src={c.logo} alt="" />
              </span>
              <strong>{c.short || c.name}</strong>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
