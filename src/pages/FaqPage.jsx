import { useState } from 'react'
import PageHero from '../components/sections/PageHero.jsx'
import { FaqList } from '../components/sections/Faq.jsx'
import CtaBand from '../components/sections/CtaBand.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { FAQ, FAQ_CATEGORIES } from '../data/faq.js'
import usePageMeta from '../hooks/usePageMeta.js'
import '../components/sections/faq.css'
import '../components/sections/blog.css'

export default function FaqPage() {
  usePageMeta('Perguntas frequentes', 'Respostas sobre telemedicina, plataforma, serviços e contratação do Grupo Telemed.')
  const [cat, setCat] = useState(FAQ_CATEGORIES[0])
  const items = FAQ.filter((f) => f.cat === cat)
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Perguntas frequentes' }]}
        eyebrow="Perguntas frequentes"
        title="Dúvidas comuns."
        soft="Respostas diretas."
        lead="Telemedicina, plataforma, serviços e contratação. Se algo ficar de fora, fale com um consultor."
        art="orbit"
      />
      <section className="section section--sheet theme-light" data-nav="light">
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="bfilter" role="tablist" aria-label="Categorias">
            {FAQ_CATEGORIES.map((c) => (
              <button key={c} type="button" role="tab" aria-selected={cat === c} className={cat === c ? 'is-on' : ''} onClick={() => setCat(c)}>
                {cat === c && <i className="bfilter__pill" />}
                <span>{c}</span>
              </button>
            ))}
          </div>
          <Reveal key={cat}>
            <FaqList items={items} />
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
