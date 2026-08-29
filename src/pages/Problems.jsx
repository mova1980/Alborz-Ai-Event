import PageShell from './PageShell'
import FormBox from '../components/FormBox'
import { useI18n } from '../context/Language'

export default function Problems() {
  const { t } = useI18n()
  const p = t.problems
  return (
    <PageShell title={t.nav.problems} lead={p.lead}>
      <div className="kicker">{p.kicker}</div>
      <h2 className="section-title" style={{ marginTop: 0 }}>{p.title}</h2>
      <div className="card-grid three" style={{ margin: '24px 0 48px' }}>
        {p.tools.map((x) => (
          <article className="card" key={x.t}>
            <h3>{x.t}</h3>
            <p>{x.d}</p>
          </article>
        ))}
      </div>
      <div className="split">
        <div className="media-frame">
          <img src="/images/problem-wall.jpg" alt="" />
        </div>
        <div>
          <h3 className="section-title" style={{ fontSize: 28 }}>{p.formTitle}</h3>
          <p className="lead">{p.formLead}</p>
          <FormBox variant="problem" />
        </div>
      </div>
    </PageShell>
  )
}
