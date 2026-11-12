import { motion } from 'motion/react'
import Reveal, { Item, Stagger } from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import PetalSymbol from '../brand/PetalSymbol.jsx'
import { STAGES } from '../../data/solutions.js'
import './process.css'

/* Quatro etapas de implantação. Cada cartão traz o símbolo com N pétalas acesas: a cruz se completa na operação. */
export default function ProcessStrip({ theme = 'theme-dark', withCta = true, title = true }) {
  return (
    <section className={`section proc ${theme}`} data-nav={theme === 'theme-dark' ? 'dark' : 'light'} id="implantacao">
      <div className="container">
        {title && (
          <div className="sec-head">
            <div>
              <Reveal as="p" className="eyebrow">
                Como implantamos
              </Reveal>
              <Reveal as="h2" className="h-1" delay={0.05}>
                Quatro etapas.
                <span className="t-soft">Uma operação pronta para atender.</span>
              </Reveal>
            </div>
            <Reveal as="p" className="lead" delay={0.1}>
              A implantação é personalizada. Começamos entendendo o contexto e só encerramos quando a operação está
              rodando, com suporte e governança ativos.
            </Reveal>
          </div>
        )}

        <Stagger className="proc__grid" gap={0.12}>
          {STAGES.map((s, i) => (
            <Item key={s.n} className="stage" data-spot>
              <div className="stage__rail" aria-hidden="true">
                <motion.i
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.3 + i * 0.25, ease: [0.65, 0, 0.35, 1] }}
                />
              </div>
              <div className="stage__top">
                <span className="stage__n">{s.n}</span>
                <PetalSymbol
                  variant="negative"
                  contour="line"
                  lit={i + 1}
                  className="stage__mark"
                />
              </div>
              <h3 className="h-3">{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Item>
          ))}
        </Stagger>

        {withCta && (
          <Reveal className="proc__cta">
            <Button to="/como-funciona" variant={theme === 'theme-dark' ? 'onDark' : 'primary'}>
              Ver como funciona
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  )
}
