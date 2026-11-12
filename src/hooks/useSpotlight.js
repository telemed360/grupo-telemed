import { useEffect } from 'react'

/* Um único listener alimenta --x/--y em qualquer elemento com data-spot. */
export default function useSpotlight() {
  useEffect(() => {
    const onMove = (e) => {
      const el = e.target.closest?.('[data-spot]')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--x', `${e.clientX - r.left}px`)
      el.style.setProperty('--y', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}
