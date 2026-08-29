import { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../context/Language'
import DiamondButton from './DiamondButton'
import GlobeStage from './GlobeStage'
import LineArt from './LineArt'
import ErrorBoundary from './ErrorBoundary'

function GlobeFallback() {
  return (
    <div className="globe-stage">
      <div className="globe-halo" />
      <img className="earth-photo" src="/images/earth-globe.png" alt="" />
    </div>
  )
}

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        s: Math.random() * 2.2 + 0.4,
        d: `${2 + Math.random() * 4}s`,
        delay: `${Math.random() * 3}s`,
      })),
    []
  )
  return (
    <div className="hero-stars" aria-hidden="true">
      {stars.map((st) => (
        <span
          key={st.i}
          className="hero-star"
          style={{ top: st.top, left: st.left, width: st.s, height: st.s, animationDuration: st.d, animationDelay: st.delay }}
        />
      ))}
    </div>
  )
}

function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  const diff = Math.max(0, target - now)
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return { days, hours, minutes, seconds }
}

export default function Hero({ ready }) {
  const { t, path } = useI18n()
  const [idx, setIdx] = useState(0)
  const [slideIn, setSlideIn] = useState(false)
  const [on, setOn] = useState(false)
  const count = useCountdown(new Date('2026-10-14T08:30:00+03:30').getTime())

  useEffect(() => {
    if (!ready) return
    const boot = setTimeout(() => setOn(true), 80)
    return () => clearTimeout(boot)
  }, [ready])

  useEffect(() => {
    if (!on) return
    setSlideIn(false)
    const a = setTimeout(() => setSlideIn(true), 2000)
    const b = setTimeout(() => {
      setIdx((i) => (i + 1) % t.hero.slides.length)
    }, 12500)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [idx, on, t.hero.slides.length])

  return (
    <section className={`hero ${on ? 'is-on' : ''}`}>
      <Stars />
      <div className="globe-wrap" id="videoWrapper">
        <ErrorBoundary fallback={<GlobeFallback />}>
          <GlobeStage />
        </ErrorBoundary>
        <LineArt className="globe-lines" on={on} />
      </div>
      <div className="hero-copy">
        <div className="aligner">
          <div className="hero-kicker">{t.hero.kicker}</div>
          <div id="textSlides">
            <ul>
              {t.hero.slides.map((s, i) => (
                <li key={s.title} className={`${i === idx ? 'current' : ''} ${i === idx && slideIn ? 'slide-in' : ''}`}>
                  <div className="hero-title display">{s.title}</div>
                  <div className="animated-titles">
                    <div className="secondtitle">{s.second}</div>
                    <div className="firsttitle">{s.first}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="hero-lead">{t.hero.lead}</p>
          <div>
            <div className="countdown-label">{t.countdown.label}</div>
            <div className="countdown" aria-hidden="true">
              {[
                [count.days, t.countdown.days],
                [count.hours, t.countdown.hours],
                [count.minutes, t.countdown.minutes],
                [count.seconds, t.countdown.seconds],
              ].map(([n, l]) => (
                <div key={l}>
                  <b>{String(n).padStart(2, '0')}</b>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="cta-row">
            <DiamondButton to={path('/visit')}>{t.hero.ctaVisit}</DiamondButton>
            <DiamondButton to={path('/exhibit')}>{t.hero.ctaBooth}</DiamondButton>
            <DiamondButton to={path('/problems')}>{t.hero.ctaProblem}</DiamondButton>
          </div>
        </div>
      </div>
      <div className="scroll-ind"><i /> {t.hero.scroll}</div>
    </section>
  )
}
