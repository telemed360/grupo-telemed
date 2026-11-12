import { useParams } from 'react-router-dom'
import PageHero from '../components/sections/PageHero.jsx'
import CtaBand from '../components/sections/CtaBand.jsx'
import Reveal, { Item, Stagger } from '../components/ui/Reveal.jsx'
import Icon from '../components/ui/Icon.jsx'
import TLink from '../components/ui/TLink.jsx'
import Button from '../components/ui/Button.jsx'
import NotFound from './NotFound.jsx'
import { PROGRAMS, getProgram } from '../data/programs.js'
import { ART_VARIANTS } from '../components/brand/PetalArt.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import '../components/sections/process.css'
import './pages.css'

export default function ProgramDetail() {
  const { slug } = useParams()
  const p = getProgram(slug)
  usePageMeta(p?.title, p?.summary)
  if (!p) return <NotFound />

  const i = PROGRAMS.findIndex((x) => x.slug === slug)
  const others = PROGRAMS.filter((x) => x.slug !== slug)

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Programas de Saúde', to: '/programas-de-saude' }, { label: p.title }]}
        eyebrow={`Programa ${String(i + 1).padStart(2, '0')}`}
        title={p.title}
        lead={p.summary}
        art={ART_VARIANTS[i % ART_VARIANTS.length]}
      >
        <span className="chip chip--line">
          <Icon name={p.icon} size={16} />
          {p.audience}
        </span>
      </PageHero>

      <section className="section section--sheet theme-light" data-nav="light">
        <div className="container pd">
          <div className="pd__main">
            <Reveal as="p" className="eyebrow">
              Sobre o programa
            </Reveal>
            <Reveal as="p" className="pd__intro" delay={0.05}>
              {p.intro}
            </Reveal>
            <Reveal as="ul" className="pd__bullets" delay={0.1}>
              {p.bullets.map((b) => (
                <li key={b}>
                  <span>
                    <Icon name="check" size={16} stroke={2.6} />
                  </span>
                  {b}
                </li>
              ))}
            </Reveal>
          </div>
          <Reveal className="pd__aside" delay={0.1} data-spot>
            <h2>Para quem é</h2>
            <ul>
              {p.forWho.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <Button to={`/contato?programas=${p.slug}`} variant="primary">
              Solicitar proposta
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section theme-dark" data-nav="dark">
        <div className="container">
          <div className="sec-head">
            <div>
              <Reveal as="p" className="eyebrow">
                Como funciona
              </Reveal>
              <Reveal as="h2" className="h-1" delay={0.05}>
                {p.how.length} passos.
                <span className="t-soft">Fluxo claro, registro completo.</span>
              </Reveal>
            </div>
          </div>
          <Stagger className="proc__grid" gap={0.12}>
            {p.how.map((s, n) => (
              <Item key={s.t} className="stage" data-spot>
                <div className="stage__top">
                  <span className="stage__n">{String(n + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="h-3">{s.t}</h3>
                <p>{s.d}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--tight theme-alt" data-nav="light">
        <div className="container">
          <Reveal as="h2" className="h-2" style={{ marginBottom: 28 }}>
            Outros programas
          </Reveal>
          <Stagger className="others" gap={0.06}>
            {others.map((o) => (
              <Item key={o.slug}>
                <TLink to={`/programas-de-saude/${o.slug}`} className="other" data-spot style={{ '--tone': o.tone }}>
                  <span className="other__ic">
                    <Icon name={o.icon} size={20} />
                  </span>
                  <span className="other__t">{o.short}</span>
                  <Icon name="arrow-up-right" size={18} className="other__arrow" />
                </TLink>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
