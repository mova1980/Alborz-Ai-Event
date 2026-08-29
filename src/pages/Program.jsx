import PageShell from './PageShell'
import { useI18n } from '../context/Language'

export default function Program() {
  const { t } = useI18n()
  return (
    <PageShell title={t.nav.program} lead={t.program.pageLead}>
      {t.program.days.map((d) => (
        <section className="day-full" key={d.day}>
          <header>
            <div className="kicker">{d.day} · {d.date}</div>
            <h2 className="section-title">{d.title}</h2>
            <p className="lead">{d.sub}</p>
          </header>
          <article className="day">
            <ul>
              {d.items.map((it) => (
                <li key={it.t}><span>{it.t}</span><em>{it.d}</em></li>
              ))}
            </ul>
          </article>
        </section>
      ))}
      <p className="lead">{t.program.expand}</p>
    </PageShell>
  )
}
