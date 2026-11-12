import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import useMedia from '../../hooks/useMedia.js'

/* Anel discreto que acompanha o ponteiro. O cursor nativo continua visível. */
export default function Cursor() {
  const fine = useMedia('(pointer: fine)')
  const reduce = useMedia('(prefers-reduced-motion: reduce)')
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 })
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 })
  const [state, setState] = useState({ hover: false, dark: false, visible: false, label: '', onBtn: false })

  useEffect(() => {
    if (!fine || reduce) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target.closest?.('a, button, summary, input, textarea, select, label, [data-cursor]')
      const dark = !!e.target.closest?.('.theme-dark, .hdr--dark')
      const onBtn = !!e.target.closest?.('.btn')
      setState((s) => {
        const next = { hover: !!t, dark, visible: true, label: t?.dataset?.cursor || '', onBtn }
        return s.hover === next.hover && s.dark === next.dark && s.visible && s.label === next.label && s.onBtn === next.onBtn ? s : next
      })
    }
    const leave = () => setState((s) => ({ ...s, visible: false }))
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [fine, reduce, x, y])

  if (!fine || reduce) return null

  return (
    <motion.div className="cursor" style={{ x: rx, y: ry }} aria-hidden="true">
      <motion.div
        className={`cursor__ring ${state.dark ? 'is-dark' : ''}`}
        animate={{ scale: state.hover ? (state.label ? 2.4 : 1.7) : 1, opacity: state.visible && !state.onBtn ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        {state.label && <span className="cursor__label">{state.label}</span>}
      </motion.div>
    </motion.div>
  )
}
