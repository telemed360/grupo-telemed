import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import './sections.css'

function Word({ progress, range, children, keyword }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <motion.span className={keyword ? 'stmt__w is-key' : 'stmt__w'} style={{ opacity }}>
      {children}{' '}
    </motion.span>
  )
}

/* Manifesto: as palavras acendem conforme a rolagem. Palavras iniciadas com * ganham o tom de destaque. */
export default function Statement({ eyebrow, text, aside, cta }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.82', 'end 0.55'] })
  const words = text.split(' ')

  return (
    <section className="stmt section section--sheet theme-light" data-nav="light">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {eyebrow}
        </Reveal>
        <p ref={ref} className="stmt__text" aria-label={text.replaceAll('*', '')}>
          {words.map((w, i) => {
            const keyword = w.startsWith('*')
            return (
              <Word key={i} progress={scrollYProgress} range={[i / words.length, Math.min(1, (i + 1.6) / words.length)]} keyword={keyword}>
                {keyword ? w.slice(1) : w}
              </Word>
            )
          })}
        </p>
        {(aside || cta) && (
          <div className="stmt__foot">
            {aside && (
              <Reveal as="p" className="body-text stmt__aside">
                {aside}
              </Reveal>
            )}
            {cta && (
              <Reveal delay={0.1}>
                <Button to={cta.to} variant="primary">
                  {cta.label}
                </Button>
              </Reveal>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
