import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import Button from '../ui/Button.jsx'
import PetalArt from '../brand/PetalArt.jsx'
import { SOLUTIONS } from '../../data/solutions.js'
import './solutions.css'

const PANELS = [
  { bg: 'linear-gradient(150deg,#011c26,#062836)', blend: 'screen', dark: true },
  { bg: 'var(--grad-nevoa)', blend: 'multiply', dark: false },
  { bg: 'linear-gradient(135deg,#26788d,#368da3 50%,#73c5da)', blend: 'screen', dark: true },
  { bg: 'linear-gradient(150deg,#062836,#26788d)', blend: 'screen', dark: true },
  { bg: 'linear-gradient(180deg,#c2ecf7,#83d2e6)', blend: 'multiply', dark: false },
]

function Block({ s, i }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.86, 1.04, 0.9])
  const panel = PANELS[i % PANELS.length]

  return (
    <article ref={ref} id={s.slug} className={`sblock ${i % 2 ? 'is-flip' : ''}`}>
      <Reveal className="sblock__copy">
        <p className="eyebrow">
          {String(i + 1).padStart(2, '0')} · {s.tag}
        </p>
        <h3 className="h-2">{s.title}</h3>
        <p className="lead">{s.summary}</p>
        <p className="body-text">{s.detail}</p>
        <ul className="sblock__list">
          {s.bullets.map((b) => (
            <li key={b}>
              <span>
                <Icon name="check" size={14} stroke={2.6} />
              </span>
              {b}
            </li>
          ))}
        </ul>
        <Button to="/contato" variant="primary">
          Falar sobre {s.title.toLowerCase()}
        </Button>
      </Reveal>

      <Reveal className="sblock__visual" delay={0.1} data-spot style={{ background: panel.bg }}>
        <motion.div className="sblock__art" style={{ rotate, scale }}>
          <PetalArt variant={s.art} tones={s.tones} blend={panel.blend} opacity={panel.dark ? 0.8 : 0.9} />
        </motion.div>
        <span className={`sblock__badge ${panel.dark ? 'is-dark' : ''}`}>
          <Icon name={s.icon} size={18} />
          {s.tag}
        </span>
      </Reveal>
    </article>
  )
}

export function SolutionBlocks() {
  return (
    <section className="section theme-light" data-nav="light">
      <div className="container sblocks">
        {SOLUTIONS.map((s, i) => (
          <Block key={s.slug} s={s} i={i} />
        ))}
      </div>
    </section>
  )
}

/* Seletor de mercado: público x privado */
const MARKETS = {
  publico: {
    label: 'Setor público',
    icon: 'landmark',
    title: 'Ampliar o acesso. Dar continuidade ao cuidado.',
    items: [
      { t: 'Mais acesso', d: 'Telessaúde que chega a quem está longe da rede e reduz deslocamentos.' },
      { t: 'Rede integrada', d: 'Teleinterconsulta, apoio ao diagnóstico e encaminhamentos conectados.' },
      { t: 'Gestão por indicadores', d: 'Painéis de uso, acesso e resultado para decisões e prestação de contas.' },
    ],
  },
  privado: {
    label: 'Setor privado',
    icon: 'building',
    title: 'Mais benefício. Mais eficiência. Novos negócios.',
    items: [
      { t: 'Benefício que se usa', d: 'Atendimento 24/7 e programas de saúde sob medida para colaboradores e clientes.' },
      { t: 'Escala com governança', d: 'Operação clínica própria, integrada aos sistemas e com qualidade monitorada.' },
      { t: 'Novas receitas', d: 'White Label, franquias e produtos de saúde digital com a sua marca.' },
    ],
  },
}

export function MarketSwitch({ sheet = false }) {
  const [key, setKey] = useState('publico')
  const m = MARKETS[key]
  return (
    <section className={`section section--tight theme-alt ${sheet ? 'section--sheet' : ''}`} data-nav="light">
      <div className="container">
        <div className="mkt">
          <div className="mkt__left">
            <Reveal as="p" className="eyebrow">
              Dois mercados, um ecossistema
            </Reveal>
            <Reveal as="h2" className="h-2" delay={0.05}>
              {m.title}
            </Reveal>
            <div className="mkt__switch" role="tablist" aria-label="Mercado">
              {Object.entries(MARKETS).map(([k, v]) => (
                <button
                  key={k}
                  type="button"
                  role="tab"
                  aria-selected={key === k}
                  className={key === k ? 'is-on' : ''}
                  onClick={() => setKey(k)}
                >
                  {key === k && <motion.span layoutId="mkt-pill" className="mkt__pill" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                  <Icon name={v.icon} size={18} />
                  <span>{v.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="mkt__right" role="tabpanel">
            {m.items.map((it, i) => (
              <motion.div
                key={key + it.t}
                className="mkt__item"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="mkt__n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="h-3">{it.t}</h3>
                  <p>{it.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
