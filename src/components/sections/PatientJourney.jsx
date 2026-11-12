import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'motion/react'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import PetalSymbol from '../brand/PetalSymbol.jsx'
import { JOURNEY } from '../../data/solutions.js'
import './journey.css'

const ease = [0.22, 1, 0.36, 1]

/* ---------- Telas do celular (ilustrativas) ---------- */
function Head({ title }) {
  return (
    <div className="ph-head">
      <PetalSymbol variant="positive" className="ph-head__logo" />
      <b>{title}</b>
    </div>
  )
}

const SCREENS = {
  acesso: () => (
    <div className="ph-body">
      <Head title="Telemedicina" />
      <h4>Olá! Vamos começar?</h4>
      <p className="ph-sub">Confirme seus dados para entrar.</p>
      <div className="ph-field">
        <small>CPF</small>
        <span>•••.•••.•••-••</span>
      </div>
      <div className="ph-field">
        <small>Data de nascimento</small>
        <span>••/••/••••</span>
      </div>
      <label className="ph-consent">
        <i>
          <svg viewBox="0 0 24 24">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </i>
        Concordo com o atendimento por telemedicina e com o tratamento dos meus dados.
      </label>
      <div className="ph-btn">Entrar</div>
    </div>
  ),
  triagem: () => (
    <div className="ph-body">
      <Head title="Triagem" />
      <p className="ph-bubble">Qual é o motivo do seu contato?</p>
      <div className="ph-opts">
        <span className="is-pick">Dor de cabeça</span>
        <span>Febre</span>
        <span>Ansiedade</span>
        <span>Outro</span>
      </div>
      <p className="ph-bubble ph-bubble--me">Dor de cabeça há 2 dias</p>
      <p className="ph-bubble">Entendi. Vou conectar você a um clínico geral.</p>
      <div className="ph-typing">
        <i />
        <i />
        <i />
      </div>
    </div>
  ),
  consulta: () => (
    <div className="ph-call">
      <div className="ph-call__top">
        <span>
          <em /> Ao vivo
        </span>
        <b>04:32</b>
      </div>
      <div className="ph-call__person">
        <Icon name="user" size={54} stroke={1.4} />
      </div>
      <div className="ph-call__name">
        <b>Profissional de saúde</b>
        <small>Clínica geral</small>
      </div>
      <span className="ph-call__self" />
      <div className="ph-call__ctrl">
        <span>
          <Icon name="mic" size={18} stroke={2} />
        </span>
        <span>
          <Icon name="camera" size={18} stroke={2} />
        </span>
        <span className="is-end">
          <Icon name="phone-off" size={18} stroke={2} />
        </span>
      </div>
    </div>
  ),
  documentos: () => (
    <div className="ph-body">
      <Head title="Documentos" />
      <h4>Documentos da consulta</h4>
      {['Receita digital', 'Atestado', 'Pedido de exame'].map((d, i) => (
        <div key={d} className="ph-doc" style={{ '--i': i }}>
          <span>
            <Icon name="doc" size={20} />
          </span>
          <div>
            <b>{d}</b>
            <small>Assinado digitalmente</small>
          </div>
          <Icon name="check" size={18} stroke={2.6} />
        </div>
      ))}
      <div className="ph-btn">Baixar documentos</div>
    </div>
  ),
  continuidade: () => (
    <div className="ph-body">
      <Head title="Seu cuidado" />
      <h4>O cuidado continua</h4>
      <div className="ph-ring">
        <svg viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="32" />
          <circle cx="40" cy="40" r="32" className="ph-ring__v" />
        </svg>
        <b>2/3</b>
        <small>passos do plano</small>
      </div>
      {[
        ['calendar', 'Retorno em 7 dias'],
        ['pulse', 'Lembrete de acompanhamento'],
        ['pin', 'Agendamento presencial'],
      ].map(([ic, t], i) => (
        <div key={t} className="ph-doc" style={{ '--i': i }}>
          <span>
            <Icon name={ic} size={20} />
          </span>
          <div>
            <b>{t}</b>
          </div>
        </div>
      ))}
    </div>
  ),
}

export default function PatientJourney() {
  const [i, setI] = useState(0)
  const [auto, setAuto] = useState(true)
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-20% 0px -20% 0px' })

  useEffect(() => {
    if (!auto || !inView) return
    const id = setInterval(() => setI((v) => (v + 1) % JOURNEY.length), 5000)
    return () => clearInterval(id)
  }, [auto, inView])

  const pick = (n) => {
    setI(n)
    setAuto(false)
  }
  const Screen = SCREENS[JOURNEY[i].key]

  return (
    <section className="section theme-alt" data-nav="light" id="jornada">
      <div className="container">
        <div className="sec-head">
          <div>
            <Reveal as="p" className="eyebrow">
              Jornada do paciente
            </Reveal>
            <Reveal as="h2" className="h-1" delay={0.05}>
              Do primeiro toque
              <span className="t-soft">ao cuidado contínuo.</span>
            </Reveal>
          </div>
          <Reveal as="p" className="lead" delay={0.1}>
            Uma experiência simples para o paciente, com a governança clínica e a plataforma do grupo por trás de cada
            etapa. As telas são ilustrativas.
          </Reveal>
        </div>

        <div ref={ref} className="pj">
          <Reveal className="pj__steps">
            <ol>
              {JOURNEY.map((s, n) => (
                <li key={s.key} className={n === i ? 'is-on' : ''}>
                  <button type="button" onClick={() => pick(n)} aria-current={n === i}>
                    <span className="pj__n">{String(n + 1).padStart(2, '0')}</span>
                    <span className="pj__t">{s.title}</span>
                    <i className="pj__bar" aria-hidden="true">
                      {n === i && auto && <motion.b initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 5, ease: 'linear' }} key={`${i}-${auto}`} />}
                      {n === i && !auto && <b style={{ transform: 'scaleX(1)' }} />}
                    </i>
                  </button>
                  <div className="pj__more">
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="pj__device" delay={0.1} y={50}>
            <div className="phone" aria-hidden="true">
              <div className="phone__notch" />
              <div className="phone__screen">
                <div className="phone__status">
                  <span>9:41</span>
                  <span className="phone__sig">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={JOURNEY[i].key}
                    className="phone__page"
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -28 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <Screen />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="pj__halo" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
