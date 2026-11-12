import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToElement, scrollToTop } from '../../hooks/lenis.js'

/* Volta ao topo a cada rota e rola até #âncoras quando a página já montou. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    if (!hash) {
      scrollToTop()
      return
    }
    let tries = 0
    const seek = () => {
      const el = document.querySelector(hash)
      if (el) scrollToElement(el)
      else if (tries++ < 20) setTimeout(seek, 80)
    }
    scrollToTop()
    setTimeout(seek, 120)
  }, [pathname, hash])

  return null
}
