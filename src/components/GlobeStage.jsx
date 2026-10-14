import { useEffect, useRef } from 'react'
import { useI18n } from '../context/Language'

const TEX = '/images/earth-blue-marble.jpg'
const NIGHT = '/images/earth-night.jpg'
const EARTH = '/images/earth-globe.webp'

function isLite() {
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(max-width: 700px)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function GlobeStage() {
  const { t } = useI18n()
  const wrap = useRef(null)
  const canvasRef = useRef(null)
  const fallback = useRef(null)
  const raf = useRef(0)
  const tex = t.media?.earthMarble || TEX
  const night = t.media?.earthNight || NIGHT
  const earthSrc = t.media?.earth || EARTH

  useEffect(() => {
    const canvas = canvasRef.current
    const host = wrap.current
    if (!canvas || !host) return

    let dead = false
    let cleanup = () => {}

    const showFallback = () => {
      if (fallback.current) fallback.current.style.opacity = '1'
      canvas.style.opacity = '0'
      canvas.style.display = 'none'
    }

    if (isLite()) {
      showFallback()
      return
    }

    import('three').then((THREE) => {
      if (dead) return

      let renderer
      try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      } catch {
        showFallback()
        return
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
      renderer.setClearColor(0x000000, 0)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 20)
      camera.position.z = 3.05

      const globe = new THREE.Group()
      scene.add(globe)

      const geo = new THREE.SphereGeometry(1, 80, 80)
      const mat = new THREE.MeshPhongMaterial({
        color: 0x88aaff,
        shininess: 8,
        specular: new THREE.Color(0x223355),
      })
      const earth = new THREE.Mesh(geo, mat)
      globe.add(earth)

      const atmo = new THREE.Mesh(
        new THREE.SphereGeometry(1.045, 64, 64),
        new THREE.MeshBasicMaterial({
          color: 0x0055ff,
          transparent: true,
          opacity: 0.16,
          side: THREE.BackSide,
        })
      )
      globe.add(atmo)

      scene.add(new THREE.AmbientLight(0x6688bb, 1.1))
      const sun = new THREE.DirectionalLight(0xffffff, 2.1)
      sun.position.set(-2.2, 0.6, 2.4)
      scene.add(sun)
      const rim = new THREE.DirectionalLight(0x4d94ff, 0.9)
      rim.position.set(3, -1, -2)
      scene.add(rim)

      const loader = new THREE.TextureLoader()
      loader.setCrossOrigin('anonymous')
      loader.load(
        tex,
        (tex) => {
          if (dead) return
          tex.colorSpace = THREE.SRGBColorSpace
          mat.map = tex
          mat.color = new THREE.Color(0xffffff)
          mat.needsUpdate = true
          canvas.style.opacity = '1'
          if (fallback.current) fallback.current.style.opacity = '0'
        },
        undefined,
        () => {
          loader.load(
            night,
            (tex) => {
              if (dead) return
              tex.colorSpace = THREE.SRGBColorSpace
              mat.map = tex
              mat.color = new THREE.Color(0xffffff)
              mat.needsUpdate = true
              canvas.style.opacity = '1'
            },
            undefined,
            showFallback
          )
        }
      )

      earth.rotation.y = THREE.MathUtils.degToRad(-48)
      earth.rotation.x = THREE.MathUtils.degToRad(18)

      const setSize = () => {
        const w = host.clientWidth
        const h = host.clientHeight
        renderer.setSize(w, h, false)
        camera.aspect = w / Math.max(h, 1)
        camera.updateProjectionMatrix()
      }
      setSize()
      const ro = new ResizeObserver(setSize)
      ro.observe(host)

      const pointer = { x: 0, y: 0 }
      const onMove = (e) => {
        const r = host.getBoundingClientRect()
        pointer.x = ((e.clientX - r.left) / r.width - 0.5) * 2
        pointer.y = ((e.clientY - r.top) / r.height - 0.5) * 2
        host.style.setProperty('--rx', `${(-pointer.y * 6).toFixed(2)}deg`)
        host.style.setProperty('--ry', `${(pointer.x * 8).toFixed(2)}deg`)
      }
      host.addEventListener('mousemove', onMove)

      const tick = () => {
        try {
          earth.rotation.y += 0.0009
          globe.rotation.y += (pointer.x * 0.18 - globe.rotation.y) * 0.04
          globe.rotation.x += (-pointer.y * 0.1 - globe.rotation.x) * 0.04
          renderer.render(scene, camera)
        } catch {
          showFallback()
          return
        }
        raf.current = requestAnimationFrame(tick)
      }
      tick()

      cleanup = () => {
        cancelAnimationFrame(raf.current)
        ro.disconnect()
        host.removeEventListener('mousemove', onMove)
        geo.dispose()
        mat.dispose()
        renderer.dispose()
      }
    }).catch(showFallback)

    return () => {
      dead = true
      cleanup()
    }
  }, [tex, night])

  return (
    <div className="globe-stage" ref={wrap}>
      <div className="globe-halo" />
      <img
        ref={fallback}
        className="earth-photo earth-spin"
        src={earthSrc}
        alt=""
        width="900"
        height="900"
        decoding="async"
        fetchPriority="high"
        style={{ position: 'absolute', opacity: 1, zIndex: 1 }}
      />
      <canvas ref={canvasRef} style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', opacity: 0 }} />
    </div>
  )
}
