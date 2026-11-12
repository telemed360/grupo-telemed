import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import PetalSymbol from '../brand/PetalSymbol.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import { STAGES } from '../../data/solutions.js'
import { getLenis } from '../../hooks/lenis.js'
import './process.css'

const ease = [0.22, 1, 0.36, 1]

/* A cruz se completa a cada etapa: ao chegar na operação, as quatro pétalas e todas as sobreposições estão acesas. */
export default function ProcessSticky() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => setActive(Math.min(STAGES.length - 1, Math.max(0, Math.floor(v * STAGES.length)))))

  const jump = (i) => {
    const el = ref.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    const y = top + ((i + 0.5) / STAGES.length) * (el.offsetHeight - window.innerHeight)
    const l = getLenis()
    if (l) l.scrollTo(y, { duration: 1.2 })
    else window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const s = STAGES[active]

  return (
    <section ref={ref} className="ps section--sheet theme-dark" data-nav="dark" id="etapas">
      <div className="ps__sticky">
        <div className="container ps__grid">
          <div className="ps__visual" aria-hidden="true">
            <PetalSymbol contour="line" lit={active + 1} className="ps__symbol" />
            <span className="ps__count">
              {active + 1}
              <small>/ {STAGES.length}</small>
            </span>
          </div>

          <div className="ps__copy">
            <Reveal as="p" className="eyebrow">
              Como implantamos
            </Reveal>
            <Reveal as="h2" className="h-1" delay={0.05}>
              Da primeira conversa
              <span className="t-soft">à operação 24/7.</span>
            </Reveal>

            <div className="ps__card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <span className="ps__n">{s.n}</span>
                  <h3 className="h-2">{s.title}</h3>
                  <p className="lead">{s.text}</p>
                  <ul>
                    {s.items.map((it) => (
                      <li key={it}>
                        <Icon name="check" size={16} stroke={2.4} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            <ol className="ps__steps">
              {STAGES.map((st, i) => (
                <li key={st.n} className={i === active ? 'is-active' : i < active ? 'is-done' : ''}>
                  <button type="button" onClick={() => jump(i)} aria-label={`Etapa ${st.n}: ${st.title}`} aria-current={i === active}>
                    <i />
                    <span>{st.title}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
