import PageShell from './PageShell'
import FormBox from '../components/FormBox'
import { useI18n } from '../context/Language'

export default function Exhibit() {
  const { t } = useI18n()
  const e = t.exhibit
  return (
    <PageShell title={t.nav.exhibit} lead={e.lead}>
      <div className="kicker">{e.kicker}</div>
      <h2 className="section-title" style={{ marginTop: 0 }}>{e.title}</h2>
      <div className="card-grid three" style={{ margin: '28px 0 48px' }}>
        {e.layers.map((l) => (
          <article className="card" key={l.t}>
            <div className="num display">{l.n}</div>
            <p>{l.t}</p>
          </article>
        ))}
      </div>
      <h3 className="section-title" style={{ fontSize: 28 }}>{e.modesTitle}</h3>
      <div className="card-grid two" style={{ margin: '16px 0 48px' }}>
        {e.modes.map((m) => (
          <article className="card" key={m.t}>
            <h3>{m.t}</h3>
            <p>{m.d}</p>
          </article>
        ))}
      </div>
      <h3 className="section-title" style={{ fontSize: 28 }}>{e.pavilionsTitle}</h3>
      <div className="chips">
        {e.pavilions.map((p) => <span className="chip" key={p}>{p}</span>)}
      </div>
      <div className="split">
        <div>
          <h3 className="section-title" style={{ fontSize: 28 }}>{e.formTitle}</h3>
          <p className="lead">{e.formLead}</p>
          <FormBox variant="exhibit" />
        </div>
        <div className="media-frame">
          <img src="/images/zone-exhibition.jpg" alt="" />
        </div>
      </div>
    </PageShell>
  )
}
