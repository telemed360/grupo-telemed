import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

export default function Counter({ to, prefix = '', suffix = '', duration = 1.8, pad = 0, className }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: '0px 0px -4% 0px' })
  const [v, setV] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const c = animate(0, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: (x) => setV(Math.round(x)) })
    return () => c.stop()
  }, [inView, to, duration, reduce])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {pad ? String(v).padStart(pad, '0') : v}
      {suffix}
    </span>
  )
}
