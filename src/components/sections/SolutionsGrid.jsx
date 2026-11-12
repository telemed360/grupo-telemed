import Reveal, { Item, Stagger } from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import TLink from '../ui/TLink.jsx'
import PetalArt from '../brand/PetalArt.jsx'
import { SOLUTIONS } from '../../data/solutions.js'
import './solutions.css'

/* Teaser das soluções na home: bento de cinco caixas com arte em pétalas que gira no hover. */
export default function SolutionsGrid() {
  return (
    <section className="section theme-light" data-nav="light" id="solucoes">
      <div className="container">
        <div className="sec-head">
          <div>
            <Reveal as="p" className="eyebrow">
              Soluções
            </Reveal>
            <Reveal as="h2" className="h-1" delay={0.05}>
              Um ecossistema para cada mercado.
              <span className="t-soft">Do público às novas franquias.</span>
            </Reveal>
          </div>
          <Reveal as="p" className="lead" delay={0.1}>
            Desenvolvemos plataformas digitais, serviços de telemedicina, soluções White Label e modelos de franquia
            para os mercados público e privado.
          </Reveal>
        </div>

        <Stagger className="solgrid" gap={0.08}>
          {SOLUTIONS.map((s, i) => (
            <Item key={s.slug} className={`sol sol--${i}`} data-spot>
              <PetalArt
                variant={s.art}
                tones={s.tones}
                blend={i === 0 ? 'screen' : 'multiply'}
                opacity={i === 0 ? 0.55 : 0.8}
                className="sol__art"
              />
              <div className="sol__top">
                <span className="sol__ic">
                  <Icon name={s.icon} size={22} />
                </span>
                <span className="chip">{s.tag}</span>
              </div>
              <div className="sol__body">
                <h3 className="h-3">{s.title}</h3>
                <p>{s.summary}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <Icon name="check" size={16} stroke={2.4} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <TLink to={`/solucoes#${s.slug}`} className="link-arrow sol__link">
                Ver solução <Icon name="arrow-right" size={16} stroke={2} />
              </TLink>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
