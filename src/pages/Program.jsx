import PageShell from './PageShell'
import { useI18n } from '../context/Language'

function isOpen(text) {
  const s = String(text || '')
  return /آزاد|^—\s*Open\s*—$|^Open$/i.test(s)
}

function Cell({ text, hall }) {
  return (
    <td className={isOpen(text) ? 'ws-free' : undefined} data-hall={hall}>
      {text}
    </td>
  )
}

function WorkshopGrid({ day, t }) {
  const slots = day.slots
  if (!slots?.length) {
    return (
      <article className="day">
        <ul>
          {day.items.map((it) => (
            <li key={`${it.t}-${it.d}`}><span>{it.t}</span><em>{it.d}</em></li>
          ))}
        </ul>
      </article>
    )
  }
  return (
    <div className="ws-wrap">
      <table className="ws-table">
        <thead>
          <tr>
            <th className="ws-time">{t.program.hallTime}</th>
            <th>{t.program.hallA}</th>
            <th>{t.program.hallB}</th>
            <th>{t.program.hallC}</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((s) => (
            <tr key={s.t} className={s.all ? 'ws-plenary' : undefined}>
              <th className="ws-time" scope="row">{s.t}</th>
              {s.all ? (
                <td colSpan={3} data-hall={t.program.hallA}>{s.all}</td>
              ) : (
                <>
                  <Cell text={s.a} hall={t.program.hallA} />
                  <Cell text={s.b} hall={t.program.hallB} />
                  <Cell text={s.c} hall={t.program.hallC} />
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Program() {
  const { t } = useI18n()
  return (
    <PageShell title={t.nav.program} lead={t.program.pageLead}>
      <figure className="poster-stage">
        <span className="poster-corners" aria-hidden="true" />
        <div className="poster-plate">
          <img src={t.media.poster} alt={t.program.posterAlt} width="1100" height="1556" decoding="async" />
        </div>
        <figcaption>{t.program.posterCaption}</figcaption>
      </figure>
      {t.program.days.map((d) => (
        <section className="day-full" key={d.day}>
          <header>
            <div className="kicker">{d.day} · {d.date}</div>
            <h2 className="section-title">{d.title}</h2>
            <p className="lead">{d.sub}</p>
          </header>
          <WorkshopGrid day={d} t={t} />
        </section>
      ))}
      <p className="lead">{t.program.expand}</p>
    </PageShell>
  )
}
