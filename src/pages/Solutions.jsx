import PageHero from '../components/sections/PageHero.jsx'
import { MarketSwitch, SolutionBlocks } from '../components/sections/SolutionBlocks.jsx'
import ProcessStrip from '../components/sections/ProcessStrip.jsx'
import Faq from '../components/sections/Faq.jsx'
import CtaBand from '../components/sections/CtaBand.jsx'
import { SOLUTIONS } from '../data/solutions.js'
import TLink from '../components/ui/TLink.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Solutions() {
  usePageMeta('Soluções', 'Telemedicina e saúde digital para setor público, empresas, operadoras e corretoras, White Label e franquias.')
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Soluções' }]}
        eyebrow="Soluções"
        title="Saúde digital sob medida"
        soft="para cada mercado."
        lead="Plataformas, serviços de telemedicina, White Label e modelos de franquia para os setores público e privado."
        art="rosette"
      >
        {SOLUTIONS.map((s) => (
          <TLink key={s.slug} to={`/solucoes#${s.slug}`} className="chip chip--line" data-cursor="">
            {s.title}
          </TLink>
        ))}
      </PageHero>
      <MarketSwitch sheet />
      <SolutionBlocks />
      <ProcessStrip />
      <Faq />
      <CtaBand />
    </>
  )
}
