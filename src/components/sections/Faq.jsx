import { useState } from 'react'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import Button from '../ui/Button.jsx'
import { FAQ } from '../../data/faq.js'
import './faq.css'

export function FaqList({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <ul className="faq__list">
      {items.map((it, i) => {
        const on = open === i
        return (
          <li key={it.q} className={on ? 'is-on' : ''}>
            <h3>
              <button type="button" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => setOpen(on ? -1 : i)}>
                <span>{it.q}</span>
                <i aria-hidden="true">
                  <Icon name="plus" size={18} stroke={2.2} />
                </i>
              </button>
            </h3>
            <div className="faq__a" id={`faq-${i}`} role="region">
              <p>{it.a}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

/* Bloco de FAQ com título fixo à esquerda e lista à direita. */
export default function Faq({ items = FAQ, limit = 6, theme = 'theme-alt', all = true }) {
  const shown = items.slice(0, limit)
  return (
    <section className={`section ${theme}`} data-nav="light" id="faq">
      <div className="container faq">
        <div className="faq__side">
          <Reveal as="p" className="eyebrow">
            Perguntas frequentes
          </Reveal>
          <Reveal as="h2" className="h-2" delay={0.05}>
            Dúvidas comuns.
            <span className="t-soft">Respostas diretas.</span>
          </Reveal>
          <Reveal as="p" className="body-text" delay={0.1}>
            Não encontrou o que procura? Converse com um consultor e conte o contexto da sua operação.
          </Reveal>
          <Reveal className="faq__btns" delay={0.15}>
            <Button to="/contato" variant="primary">
              Falar com consultor
            </Button>
            {all && (
              <Button to="/perguntas-frequentes" variant="ghost" icon="arrow-up-right">
                Ver todas
              </Button>
            )}
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <FaqList items={shown} />
        </Reveal>
      </div>
    </section>
  )
}
