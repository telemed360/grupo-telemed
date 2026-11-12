import { motion } from 'motion/react'
import TLink from '../ui/TLink.jsx'
import SplitText from '../ui/SplitText.jsx'
import PetalArt from '../brand/PetalArt.jsx'
import './sections.css'

const ease = [0.22, 1, 0.36, 1]

/* Hero compacto das páginas internas: título em duas linhas (800 / 400), arte em pétalas e malha de cruzes. */
export default function PageHero({ crumbs = [], eyebrow, title, soft, lead, art = 'rosette', tones, children }) {
  return (
    <section className="phero theme-dark" data-nav="dark">
      <div className="phero__bg" aria-hidden="true">
        <div className="phero__lattice" />
        <PetalArt
          variant={art}
          blend="screen"
          spin={140}
          opacity={0.55}
          tones={tones || ['petroleo', 'oceano', 'ceu', 'agua']}
          className="phero__art"
        />
      </div>
      <div className="container phero__inner">
        <motion.nav
          className="phero__crumbs"
          aria-label="Você está em"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
        >
          <TLink to="/">Início</TLink>
          {crumbs.map((c) => (
            <span key={c.label}>
              <i aria-hidden="true" />
              {c.to ? <TLink to={c.to}>{c.label}</TLink> : <em>{c.label}</em>}
            </span>
          ))}
        </motion.nav>

        {eyebrow && (
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
          >
            {eyebrow}
          </motion.p>
        )}

        <h1 className="h-1 phero__title">
          <SplitText text={title} delay={0.55} go />
          {soft && <SplitText text={soft} delay={0.8} go className="phero__soft" />}
        </h1>

        {lead && (
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
          >
            {lead}
          </motion.p>
        )}
        {children && (
          <motion.div
            className="phero__extra"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25, ease }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
