import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Reveal, { Item, Stagger } from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import Counter from '../ui/Counter.jsx'
import PetalSymbol from '../brand/PetalSymbol.jsx'
import { SPECIALTIES } from '../../data/site.js'
import { PROGRAMS } from '../../data/programs.js'
import './bento.css'

/* ---------- Micro-ilustrações ---------- */
function PlatformMock() {
  const [t, setT] = useState(768)
  useEffect(() => {
    const id = setInterval(() => setT((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])
  const mm = String(Math.floor(t / 60)).padStart(2, '0')
  const ss = String(t % 60).padStart(2, '0')
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock__bar">
        <i />
        <i />
        <i />
        <span>Teleconsulta · ao vivo</span>
        <b>
          <em />
          {mm}:{ss}
        </b>
      </div>
      <div className="mock__body">
        <div className="mock__video">
          <span className="mock__person">
            <Icon name="user" size={34} stroke={1.5} />
          </span>
          <span className="mock__self" />
          <div className="mock__controls">
            <span>
              <Icon name="mic" size={15} stroke={2} />
            </span>
            <span>
              <Icon name="camera" size={15} stroke={2} />
            </span>
            <span className="is-end">
              <Icon name="phone-off" size={15} stroke={2} />
            </span>
          </div>
        </div>
        <div className="mock__side">
          <div className="mock__card">
            <small>Telemonitoramento</small>
            <svg viewBox="0 0 120 40" className="mock__ecg">
              <path d="M0 22H22L27 22L31 7L38 36L44 22H72L77 22L81 12L87 30L91 22H120" />
            </svg>
          </div>
          <div className="mock__card mock__bars">
            <i style={{ '--d': '0s' }} />
            <i style={{ '--d': '-0.8s' }} />
            <i style={{ '--d': '-1.6s' }} />
            <i style={{ '--d': '-0.4s' }} />
            <i style={{ '--d': '-1.2s' }} />
          </div>
          <div className="mock__chat">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}

function Avatars() {
  const tones = ['petroleo', 'oceano', 'ceu', 'agua', 'nevoa']
  return (
    <div className="tile__vis">
      <div className="avatars" aria-hidden="true">
        {tones.map((t, i) => (
          <span key={t} style={{ background: `var(--${t})`, zIndex: 5 - i, color: i < 2 ? '#fff' : 'var(--abismo)' }}>
            <Icon name="user" size={20} />
          </span>
        ))}
      </div>
      <div className="tile__chips">
        <span className="chip">Médicos</span>
        <span className="chip">Psicólogos</span>
        <span className="chip">Multiprofissional</span>
      </div>
    </div>
  )
}

function Clock() {
  return (
    <div className="clock" aria-hidden="true">
      <div className="clock__num">
        24<span>/</span>7
      </div>
      <svg viewBox="0 0 120 120" className="clock__dial">
        <circle cx="60" cy="60" r="56" className="clock__ring" />
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={i} x1="60" y1="8" x2="60" y2={i % 6 === 0 ? 19 : 14} transform={`rotate(${i * 15} 60 60)`} />
        ))}
        <g className="clock__hand">
          <line x1="60" y1="60" x2="60" y2="22" />
        </g>
        <circle cx="60" cy="60" r="4" className="clock__pin" />
      </svg>
    </div>
  )
}

function Specialties() {
  const list = [...SPECIALTIES, ...SPECIALTIES]
  const list2 = [...SPECIALTIES.slice(4), ...SPECIALTIES.slice(0, 4), ...SPECIALTIES.slice(4), ...SPECIALTIES.slice(0, 4)]
  return (
    <div className="spec" aria-hidden="true">
      <div className="spec__col">
        {list.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
      <div className="spec__col spec__col--rev">
        {list2.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  )
}

function Checks() {
  const rows = ['Protocolos clínicos', 'Auditoria de qualidade', 'Indicadores assistenciais']
  return (
    <ul className="checks" aria-hidden="true">
      {rows.map((r, i) => (
        <li key={r} style={{ '--d': `${i * 0.9}s` }}>
          <span className="check">
            <svg viewBox="0 0 24 24">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
          {r}
        </li>
      ))}
    </ul>
  )
}

function Network() {
  const nodes = [
    { icon: 'building', a: -90 },
    { icon: 'file', a: -30 },
    { icon: 'chat', a: 30 },
    { icon: 'calendar', a: 90 },
    { icon: 'chart', a: 150 },
    { icon: 'plug', a: 210 },
  ]
  const R = 62
  return (
    <div className="net" aria-hidden="true">
      <svg viewBox="-150 -80 300 160" className="net__lines">
        {nodes.map((n, i) => {
          const x = Math.cos((n.a * Math.PI) / 180) * R * 1.55
          const y = Math.sin((n.a * Math.PI) / 180) * R
          return <line key={i} x1="0" y1="0" x2={x} y2={y} style={{ '--d': `${i * -0.5}s` }} />
        })}
      </svg>
      <div className="net__core">
        <PetalSymbol variant="negative" contour="full" className="net__symbol" />
      </div>
      {nodes.map((n, i) => (
        <span
          key={i}
          className="net__node"
          style={{
            left: `calc(50% + ${Math.cos((n.a * Math.PI) / 180) * R * 1.55}px)`,
            top: `calc(50% + ${Math.sin((n.a * Math.PI) / 180) * R}px)`,
          }}
        >
          <Icon name={n.icon} size={16} />
        </span>
      ))}
    </div>
  )
}

function Chat() {
  return (
    <div className="chat" aria-hidden="true">
      <p className="chat__in">Preciso de ajuda com o acesso.</p>
      <p className="chat__out">Claro! Vamos resolver agora.</p>
      <div className="chat__typing">
        <i />
        <i />
        <i />
      </div>
    </div>
  )
}

function Blocks() {
  const [s, setS] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setS((v) => (v + 1) % 3), 2600)
    return () => clearInterval(id)
  }, [])
  const areas = ['"a a b" "c d b"', '"a b b" "a c d"', '"a b c" "d d c"']
  const spring = { type: 'spring', stiffness: 120, damping: 18 }
  return (
    <div className="blocks" style={{ gridTemplateAreas: areas[s] }} aria-hidden="true">
      <motion.i layout transition={spring} style={{ gridArea: 'a', background: 'var(--profundo)' }} />
      <motion.i layout transition={spring} style={{ gridArea: 'b', background: 'var(--oceano)' }} />
      <motion.i layout transition={spring} style={{ gridArea: 'c', background: 'var(--agua)' }} />
      <motion.i layout transition={spring} style={{ gridArea: 'd', background: 'var(--gelo)' }} />
    </div>
  )
}

function Stepper() {
  const steps = ['Diagnóstico', 'Personalização', 'Implantação', 'Operação']
  return (
    <div className="stepper" aria-hidden="true">
      <div className="stepper__line">
        <i />
      </div>
      {steps.map((s, i) => (
        <div key={s} className="stepper__step" style={{ '--i': i }}>
          <b />
          <span>{s}</span>
        </div>
      ))}
    </div>
  )
}

/* ---------- Bento ---------- */
function Tile({ cls, icon, title, text, variant = '', children }) {
  return (
    <Item className={`tile ${cls} ${variant}`} data-spot>
      <div className="tile__head">
        <span className="tile__ic">
          <Icon name={icon} size={20} />
        </span>
        <h3 className="tile__title">{title}</h3>
      </div>
      {text && <p className="tile__text">{text}</p>}
      {children}
    </Item>
  )
}

export default function InfraBento({ showHead = true, theme = 'theme-alt' }) {
  return (
    <section className={`section ${theme}`} data-nav="light" id="infraestrutura">
      <div className="container">
        {showHead && (
          <div className="sec-head">
            <div>
              <Reveal as="p" className="eyebrow">
                Infraestrutura completa
              </Reveal>
              <Reveal as="h2" className="h-1" delay={0.05}>
                Tudo o que uma operação de saúde digital precisa.
                <span className="t-soft">Em um só ecossistema.</span>
              </Reveal>
            </div>
            <Reveal as="p" className="lead" delay={0.1}>
              Do atendimento à governança, cada peça é própria, integrada e personalizada para o projeto de cada
              cliente.
            </Reveal>
          </div>
        )}

        <Stagger className="bento" gap={0.07}>
          <Tile cls="t-a" variant="tile--dark" icon="video" title="Plataforma própria" text="Ambiente de teleatendimento desenvolvido e evoluído pelo próprio grupo, com a identidade de cada cliente.">
            <div className="tile__vis">
              <PlatformMock />
            </div>
          </Tile>
          <Tile cls="t-b" icon="stethoscope" title="Corpo clínico próprio" text="Profissionais de saúde integrados à operação e à governança clínica.">
            <Avatars />
          </Tile>
          <Tile cls="t-c" variant="tile--teal" icon="clock" title="Atendimento 24/7">
            <Clock />
          </Tile>
          <Tile cls="t-d" icon="users" title="Especialidades e subespecialidades">
            <div className="tile__vis tile__vis--row">
              <div className="bignum">
                <Counter to={30} prefix="+" />
              </div>
              <Specialties />
            </div>
          </Tile>
          <Tile cls="t-e" variant="tile--ice" icon="grid" title="Programas de Saúde">
            <div className="tile__vis">
              <div className="bignum">
                <Counter to={PROGRAMS.length} pad={2} />
              </div>
              <div className="dots" aria-hidden="true">
                {PROGRAMS.map((p, i) => (
                  <i key={p.slug} style={{ background: p.tone, '--d': `${i * 0.18}s` }} />
                ))}
              </div>
            </div>
          </Tile>
          <Tile cls="t-f" icon="shield" title="Governança clínica" text="Rotina de qualidade que sustenta cada atendimento.">
            <div className="tile__vis">
              <Checks />
            </div>
          </Tile>
          <Tile cls="t-g" icon="plug" title="Integrações" text="Conexão com os sistemas, benefícios e canais que o cliente já usa.">
            <div className="tile__vis">
              <Network />
            </div>
          </Tile>
          <Tile cls="t-h" icon="headset" title="Help desk especializado" text="Suporte técnico e operacional para pacientes, gestores e profissionais.">
            <div className="tile__vis">
              <Chat />
            </div>
          </Tile>
          <Tile cls="t-i" icon="puzzle" title="Projetos personalizados" text="Cada operação tem um desenho. Combinamos programas, especialidades e canais sob medida.">
            <div className="tile__vis">
              <Blocks />
            </div>
          </Tile>
          <Tile cls="t-j" icon="rocket" title="Implantação personalizada" text="Do diagnóstico à operação assistida, com cronograma definido junto com o cliente.">
            <div className="tile__vis">
              <Stepper />
            </div>
          </Tile>
        </Stagger>
      </div>
    </section>
  )
}
