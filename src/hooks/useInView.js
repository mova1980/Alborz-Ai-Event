import { useEffect, useRef, useState } from 'react'

export default function useInView(offset = '120px') {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setOn(true) },
      { rootMargin: `0px 0px -${offset} 0px`, threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [offset])
  return [ref, on]
}
