import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../context/Language'
import { ReadyCtx } from '../Layout'
import useInView from '../hooks/useInView'
import Hero from '../components/Hero'
import DiamondButton from '../components/DiamondButton'
import LineArt from '../components/LineArt'

export default function Home() {
  const ready = useContext(ReadyCtx)
  const { t, path, n2 } = useI18n()
  const [hRef, hOn] = useInView('80px')
  const [qRef, qOn] = useInView('80px')
  const [cRef, cOn] = useInView('80px')

  return (
    <main id="mainContent">
      <Hero ready={!!ready} />

      <section className={`headlines ${hOn ? 'is-on' : ''}`} ref={hRef} id="headLines">
        <h2 className="display">{t.headlines.title}</h2>
        <ul>
          {t.headlines.items.map((it, i) => (
            <li key={it.title} style={{ '--stagger': i }}>
              <Link className="headline-card" to={path(it.href)}>
                <span className="hc-corners" aria-hidden="true" />
                <span className="hc-index">{n2(i + 1)}</span>
                <div className="hc-body">
                  <div className="itemdate"><span>{it.date}</span></div>
                  <div className="htitle">{it.title}</div>
                </div>
                <span className="hc-go" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="pull" id="imagePullQuote">
        <div className="pull-row">
          <div className="pull-image">
            <picture>
              <img src="/images/connection-lab.jpg" alt="" />
            </picture>
          </div>
          <div className="pull-content">
            <p>{t.pull.body}</p>
            <DiamondButton to={path(t.pull.href)}>{t.pull.cta}</DiamondButton>
          </div>
        </div>
      </section>

      <section className="quote-block" ref={qRef} id="homeQuote">
        <LineArt on={qOn} />
        <div className="quote-text display">“{t.quote.text}”</div>
        <div className="quote-attr">{t.quote.attr}</div>
      </section>

      <section className="stats">
        {t.stats.items.map((s) => (
          <div key={s.l}>
            <div className="stat-n display">{s.n}</div>
            <div className="stat-l">{s.l}</div>
          </div>
        ))}
      </section>

      <section className={`chain ${cOn ? 'is-on' : ''}`} ref={cRef}>
        <div className="kicker">{t.chain.kicker}</div>
        <h2 className="section-title">{t.chain.title}</h2>
        <p className="lead">{t.chain.lead}</p>
        <div className="steps">
          {t.chain.steps.map((s) => (
            <article className="step" key={s.n}>
              <b>{s.n}</b>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="zones">
        <div className="kicker">{t.zones.kicker}</div>
        <h2 className="section-title">{t.zones.title}</h2>
        <p className="lead">{t.zones.lead}</p>
        <div className="zone-grid">
          {t.zones.items.map((z) => (
            <article className="zone" key={z.t}>
              <h3>{z.t}</h3>
              <p>{z.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="program-preview">
        <div className="kicker">{t.program.kicker}</div>
        <h2 className="section-title">{t.program.title}</h2>
        <div className="days">
          {t.program.days.map((d) => (
            <article className="day" key={d.day}>
              <div className="when">{d.day} · {d.date}</div>
              <h3 className="day-title">{d.title}</h3>
              <p className="sub">{d.sub}</p>
              <ul>
                {d.items.slice(0, 4).map((it) => (
                  <li key={it.t}><span>{it.t}</span><em>{it.d}</em></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <DiamondButton to={path('/program')}>{t.program.more}</DiamondButton>
        </div>
      </section>

      <div className="ghost-text" id="ghostText">
        <div><span>{t.ghost}  {t.ghost}</span></div>
      </div>

      <section className="partners">
        <h2 className="section-title">{t.partners.title}</h2>
        <ul>
          {t.partners.items.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </section>
    </main>
  )
}
