import { useState } from 'react'
import TLink from '../ui/TLink.jsx'
import Icon from '../ui/Icon.jsx'
import useMedia from '../../hooks/useMedia.js'
import { PROGRAMS } from '../../data/programs.js'
import './programs.css'

/* Sete painéis que se expandem: um para cada programa, na escala de azuis do manual. */
export default function ProgramsExplorer() {
  const [active, setActive] = useState(0)
  const hoverable = useMedia('(hover: hover) and (min-width: 901px)')

  return (
    <div className="px">
      {PROGRAMS.map((p, i) => {
        const on = active === i
        return (
          <article
            key={p.slug}
            className={`px__item px__item--${p.fg} ${on ? 'is-on' : ''}`}
            style={{ '--tone': p.tone }}
            onMouseEnter={hoverable ? () => setActive(i) : undefined}
          >
            <button
              type="button"
              className="px__tab"
              aria-expanded={on}
              aria-controls={`px-${p.slug}`}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="px__n">{String(i + 1).padStart(2, '0')}</span>
              <span className="px__ic">
                <Icon name={p.icon} size={22} />
              </span>
              <span className="px__label">{p.short}</span>
              <Icon name="chevron-down" size={20} className="px__chev" />
            </button>

            <div className="px__panel" id={`px-${p.slug}`} aria-hidden={!on}>
              <div className="px__inner">
                <span className="chip">{p.audience}</span>
                <h3 className="px__title">{p.title}</h3>
                <p className="px__sum">{p.summary}</p>
                <ul className="px__list">
                  {p.bullets.map((b) => (
                    <li key={b}>
                      <Icon name="check" size={16} stroke={2.4} />
                      {b}
                    </li>
                  ))}
                </ul>
                <TLink to={`/programas-de-saude/${p.slug}`} className="px__link" tabIndex={on ? 0 : -1}>
                  Conhecer o programa
                  <span>
                    <Icon name="arrow-right" size={16} stroke={2.2} />
                  </span>
                </TLink>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
