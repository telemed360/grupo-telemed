import { useState } from 'react'
import { motion } from 'motion/react'
import PageHero from '../components/sections/PageHero.jsx'
import ProgramsSection from '../components/sections/ProgramsSection.jsx'
import CtaBand from '../components/sections/CtaBand.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Icon from '../components/ui/Icon.jsx'
import Button from '../components/ui/Button.jsx'
import { PROGRAMS } from '../data/programs.js'
import usePageMeta from '../hooks/usePageMeta.js'
import '../components/sections/programs.css'

/* Monte o portfólio: os programas escolhidos seguem para o formulário de contato. */
function Compose() {
  const [sel, setSel] = useState([])
  const toggle = (slug) => setSel((l) => (l.includes(slug) ? l.filter((x) => x !== slug) : [...l, slug]))
  const to = sel.length ? `/contato?programas=${sel.join(',')}` : '/contato'
  return (
    <section className="section theme-dark" data-nav="dark">
      <div className="container compose">
        <div className="compose__copy">
          <Reveal as="p" className="eyebrow">
            Monte o seu portfólio
          </Reveal>
          <Reveal as="h2" className="h-1" delay={0.05}>
            Escolha os programas.
            <span className="t-soft">Nós desenhamos o projeto.</span>
          </Reveal>
          <Reveal as="p" className="lead" delay={0.1}>
            Selecione o que faz sentido para a sua operação. Levamos a escolha para o formulário e um consultor
            apresenta o caminho.
          </Reveal>
        </div>
        <Reveal className="compose__box" delay={0.1}>
          <div className="compose__grid">
            {PROGRAMS.map((p) => {
              const on = sel.includes(p.slug)
              return (
                <button key={p.slug} type="button" className={`cpick ${on ? 'is-on' : ''}`} aria-pressed={on} onClick={() => toggle(p.slug)}>
                  <span className="cpick__ic">
                    <Icon name={on ? 'check' : p.icon} size={20} stroke={on ? 2.6 : 1.7} />
                  </span>
                  {p.short}
                </button>
              )
            })}
          </div>
          <div className="compose__foot">
            <motion.span key={sel.length} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="compose__count">
              {sel.length === 0 ? 'Nenhum programa selecionado' : `${sel.length} ${sel.length === 1 ? 'programa selecionado' : 'programas selecionados'}`}
            </motion.span>
            <Button to={to} variant="onDark">
              Solicitar proposta
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Programs() {
  usePageMeta('Programas de Saúde', 'Telemedicina 24h, Entrevista Qualificada, Projeto Remoção, Programas de Suporte, TEA, Psicologia Clínica e Agendamento Presencial.')
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Programas de Saúde' }]}
        eyebrow="Programas de Saúde"
        title={`${PROGRAMS.length} programas,`}
        soft="uma só plataforma."
        lead="Telemedicina, entrevista qualificada, remoção, suporte psicossocial, TEA, psicologia clínica e agendamento presencial."
        art="spiral"
        tones={['gelo', 'agua', 'ceu', 'oceano']}
      />
      <ProgramsSection head={false} sheet theme="theme-light" />
      <Compose />
      <CtaBand />
    </>
  )
}
