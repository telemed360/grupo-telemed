import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import TLink from '../ui/TLink.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import PetalArt from '../brand/PetalArt.jsx'
import { NAV, CONTACT } from '../../data/site.js'
import { getLenis } from '../../hooks/lenis.js'

/* Ilha flutuante: troca de tom conforme a seção sob ela, some ao descer e volta ao subir. */
export default function Header() {
  const { pathname } = useLocation()
  const [tone, setTone] = useState('dark')
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(null)

  useEffect(() => {
    let raf = 0
    let lastY = window.scrollY
    const calc = () => {
      raf = 0
      const y = window.scrollY
      setScrolled(y > 24)
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 520)
        lastY = y
      }
      const probe = 48
      let next = null
      const mobile = window.matchMedia('(max-width: 760px)').matches
      document.querySelectorAll('[data-nav]').forEach((s) => {
        const r = s.getBoundingClientRect()
        if (r.top <= probe && r.bottom >= probe) next = (mobile && s.dataset.navMobile) || s.dataset.nav
      })
      if (next) setTone(next)
    }
    const on = () => {
      if (!raf) raf = requestAnimationFrame(calc)
    }
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    const t = setTimeout(on, 80)
    on()
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
      clearTimeout(t)
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  useEffect(() => {
    setOpen(false)
    setHidden(false)
  }, [pathname])

  useEffect(() => {
    const l = getLenis()
    if (open) l?.stop()
    else l?.start()
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const eff = open ? 'dark' : tone

  return (
    <>
      <header className={`hdr hdr--${eff} ${scrolled ? 'is-scrolled' : ''} ${hidden && !open ? 'is-hidden' : ''}`}>
        <div className="hdr__bar">
          <TLink to="/" className="hdr__logo" aria-label="Grupo Telemed · Hub Saúde, página inicial">
            <img
              src={eff === 'dark' ? '/brand/logo-dark.svg' : '/brand/logo.svg'}
              alt=""
              width="885"
              height="303"
            />
          </TLink>

          <nav className="hdr__nav" aria-label="Principal" onPointerLeave={() => setHover(null)}>
            {NAV.map((n) => {
              const active = pathname === n.to || pathname.startsWith(n.to + '/')
              return (
                <TLink
                  key={n.to}
                  to={n.to}
                  className={`hdr__link ${active ? 'is-active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                  onPointerEnter={() => setHover(n.to)}
                >
                  {hover === n.to && (
                    <motion.span
                      layoutId="nav-hover"
                      className="hdr__hover"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span>{n.label}</span>
                </TLink>
              )
            })}
          </nav>

          <div className="hdr__actions">
            <span className="hdr__cta">
              <Button to="/contato" size="sm" variant={eff === 'dark' ? 'onDark' : 'primary'}>
                Falar com consultor
              </Button>
            </span>
            <button
              type="button"
              className="hdr__burger"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <Icon name={open ? 'close' : 'menu'} size={22} stroke={2} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu theme-dark"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 44px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <PetalArt variant="rosette" blend="screen" spin={90} opacity={0.5} tones={['oceano', 'ceu', 'agua', 'petroleo']} className="menu__art" />
            <nav className="menu__nav" aria-label="Menu móvel">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.3 + i * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                >
                  <TLink to={n.to} className="menu__link" onClick={() => setOpen(false)}>
                    <span className="menu__n">{String(i + 1).padStart(2, '0')}</span>
                    {n.label}
                  </TLink>
                </motion.div>
              ))}
            </nav>
            <div className="menu__foot">
              <Button to="/contato" variant="onDark" onClick={() => setOpen(false)}>
                Falar com consultor
              </Button>
              {CONTACT.email && <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
