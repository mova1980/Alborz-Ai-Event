import { useEffect, useRef } from 'react'

export default function Cursor() {
  const core = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    document.body.classList.add('cursor-on')
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let hovering = false
    let down = false

    const isHit = (el) =>
      !!(el && el.closest && el.closest('a, button, .linktext, .lang-switch, .zone, .chip, label, .icon-btn'))

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      hovering = isHit(e.target)
      document.body.classList.toggle('cursor-hover', hovering)
    }
    const onDown = () => {
      down = true
      document.body.classList.add('cursor-down')
    }
    const onUp = () => {
      down = false
      document.body.classList.remove('cursor-down')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    let id
    const tick = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      if (core.current) {
        core.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
      if (ring.current) {
        const s = down ? 0.72 : hovering ? 1.35 : 1
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) scale(${s})`
      }
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(id)
      document.body.classList.remove('cursor-on', 'cursor-hover', 'cursor-down')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <div className="cursor-root" aria-hidden="true">
      <div className="cursor-core" ref={core} />
      <svg className="cursor-ring" ref={ring} viewBox="0 0 42 28">
        <polygon points="8,26 24,2 34,2 18,26" />
      </svg>
    </div>
  )
}
