import Lenis from 'lenis'

let instance = null
let rafId = 0

export function startLenis() {
  if (instance) return instance
  instance = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })
  const loop = (time) => {
    instance?.raf(time)
    rafId = requestAnimationFrame(loop)
  }
  rafId = requestAnimationFrame(loop)
  return instance
}

export function stopLenis() {
  cancelAnimationFrame(rafId)
  instance?.destroy()
  instance = null
}

export const getLenis = () => instance

export function scrollToTop() {
  if (instance) instance.scrollTo(0, { immediate: true, force: true })
  else window.scrollTo(0, 0)
}

export function scrollToElement(el, offset = -96) {
  if (!el) return
  if (instance) instance.scrollTo(el, { offset, duration: 1.2 })
  else el.scrollIntoView({ behavior: 'smooth' })
}
