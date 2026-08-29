import PageShell from './PageShell'
import { useI18n } from '../context/Language'

export default function Venue() {
  const { t } = useI18n()
  const v = t.venue
  return (
    <PageShell title={t.nav.venue} lead={v.lead}>
      <div className="kicker">{v.kicker}</div>
      <h2 className="section-title" style={{ marginTop: 0 }}>{v.title}</h2>
      <div className="split">
        <div className="media-frame">
          <img src="/images/venue-merc.jpg" alt="" />
        </div>
        <div>
          {v.facts.map((f) => (
            <article className="card" key={f.t} style={{ marginBottom: 12 }}>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </article>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 48 }}>
        <h3 className="section-title" style={{ fontSize: 28 }}>{v.roleTitle}</h3>
        <p className="lead">{v.role}</p>
        <div className="media-frame" style={{ maxWidth: 920, marginTop: 24 }}>
          <img src="/images/live-lab.jpg" alt="" />
        </div>
      </div>
    </PageShell>
  )
}
