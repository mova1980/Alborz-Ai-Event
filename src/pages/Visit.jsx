import PageShell from './PageShell'
import FormBox from '../components/FormBox'
import { useI18n } from '../context/Language'

export default function Visit() {
  const { t } = useI18n()
  const v = t.visit
  return (
    <PageShell title={t.nav.visit} lead={v.lead}>
      <div className="kicker">{v.kicker}</div>
      <h2 className="section-title" style={{ marginTop: 0 }}>{v.title}</h2>
      <div className="card-grid three" style={{ margin: '24px 0 48px' }}>
        {v.groups.map((g) => (
          <article className="card" key={g.t}>
            <h3>{g.t}</h3>
            <p>{g.d}</p>
          </article>
        ))}
      </div>
      <div className="split">
        <div>
          <h3 className="section-title" style={{ fontSize: 28 }}>{v.formTitle}</h3>
          <p className="lead">{v.formLead}</p>
          <FormBox variant="visit" />
        </div>
        <div className="media-frame">
          <img src="/images/zone-summit.jpg" alt="" />
        </div>
      </div>
    </PageShell>
  )
}
