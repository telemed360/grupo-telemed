import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import PetalSymbol from '../brand/PetalSymbol.jsx'
import Reveal from '../ui/Reveal.jsx'
import { PILLARS } from '../../data/site.js'
import { getLenis } from '../../hooks/lenis.js'
import './sections.css'

const GLOW = ['0% -26%', '26% 0%', '0% 26%', '-26% 0%']

/* O símbolo é o controle: cada pilar do texto acende uma pétala conforme a rolagem. */
export default function Pillars({ numbered = true }) {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (v) => setActive(Math.min(PILLARS.length - 1, Math.max(0, Math.floor(v * PILLARS.length)))))

  const jump = (i) => {
    const el = ref.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    const range = el.offsetHeight - window.innerHeight
    const y = top + ((i + 0.5) / PILLARS.length) * range
    const l = getLenis()
    if (l) l.scrollTo(y, { duration: 1.2 })
    else window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="pil theme-dark" data-nav="dark">
      <div className="pil__sticky">
        <div className="container pil__grid">
          <div className="pil__copy">
            <Reveal as="p" className="eyebrow">
              Os quatro pilares
            </Reveal>
            <Reveal as="h2" className="h-1 pil__title" delay={0.05}>
              Quatro pétalas.
              <span className="t-soft">Um ecossistema.</span>
            </Reveal>
            <ol className="pil__list">
              {PILLARS.map((p, i) => (
                <li key={p.key} className={i === active ? 'is-active' : ''}>
                  <button type="button" onClick={() => jump(i)} aria-current={i === active} data-cursor="">
                    {numbered && <span className="pil__n">{String(i + 1).padStart(2, '0')}</span>}
                    <span className="pil__t">{p.title}</span>
                  </button>
                  <div className="pil__more">
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="pil__visual" aria-hidden="true">
            <motion.div
              className="pil__glow"
              animate={{ x: GLOW[active].split(' ')[0], y: GLOW[active].split(' ')[1] }}
              transition={{ type: 'spring', stiffness: 60, damping: 16 }}
            />
            <PetalSymbol contour="line" active={active} className="pil__symbol" />
            <div className="pil__progress">
              {PILLARS.map((p, i) => (
                <i key={p.key} className={i <= active ? 'is-on' : ''} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
