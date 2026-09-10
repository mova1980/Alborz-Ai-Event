import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../context/Language'

function offset(i, idx, n) {
  let d = i - idx
  if (d > n / 2) d -= n
  if (d < -n / 2) d += n
  return d
}

export default function OrganizerBanner() {
  const { t } = useI18n()
  const items = t.partners.organizers
  const n = items.length
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const startX = useRef(null)

  const go = (dir) => setIdx((v) => (v + dir + n) % n)

  useEffect(() => {
    if (paused || n < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIdx((v) => (v + 1) % n), 4200)
    return () => clearInterval(id)
  }, [paused, n])

  const onTouchStart = (e) => {
    startX.current = e.changedTouches?.[0]?.clientX ?? e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (startX.current == null) return
    const x = e.changedTouches[0].clientX
    const dx = x - startX.current
    startX.current = null
    if (Math.abs(dx) > 36) go(dx > 0 ? -1 : 1)
  }

  return (
    <div
      className="org-banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="org-cover" aria-roledescription="carousel" aria-label={t.partners.organizersTitle}>
        <button type="button" className="org-arrow org-arrow-prev" aria-label="prev" onClick={() => go(-1)}>
          <span />
        </button>

        <div className="org-track">
          {items.map((org, i) => {
            const d = offset(i, idx, n)
            const active = d === 0
            const media = (
              <div className="org-plate">
                <img src={org.logo} alt="" />
              </div>
            )
            return (
              <figure
                key={org.id}
                className={`org-slide${active ? ' is-on' : ''}`}
                data-pos={d}
                onClick={() => !active && setIdx(i)}
              >
                {org.href && org.href !== '#' && active ? (
                  <a href={org.href} target="_blank" rel="noreferrer">{media}</a>
                ) : media}
                <figcaption>
                  <span className="org-role">{org.role}</span>
                  <strong>{org.name}</strong>
                </figcaption>
              </figure>
            )
          })}
        </div>

        <button type="button" className="org-arrow org-arrow-next" aria-label="next" onClick={() => go(1)}>
          <span />
        </button>
      </div>
    </div>
  )
}
