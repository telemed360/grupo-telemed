import PageHero from '../components/sections/PageHero.jsx'
import Statement from '../components/sections/Statement.jsx'
import Pillars from '../components/sections/Pillars.jsx'
import InfraBento from '../components/sections/InfraBento.jsx'
import CtaBand from '../components/sections/CtaBand.jsx'
import { Brands, Focus, Regulatory, TelemedicineIntro, Verbs } from '../components/sections/AboutSections.jsx'
import { SITE } from '../data/site.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function About() {
  usePageMeta('Quem somos', 'Plataforma de saúde digital especializada em telemedicina, no modelo HaaS. Tecnologia, inovação, inteligência de dados e governança.')
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Quem somos' }]}
        eyebrow="Quem somos"
        title="Tecnologia que conecta."
        soft="Saúde que transforma."
        lead="Uma plataforma de saúde digital que desenvolve, integra e gerencia soluções para ampliar o acesso e a eficiência dos serviços de saúde."
        art="cross"
      >
        {SITE.descriptor.map((d) => (
          <span key={d} className="chip chip--line">
            {d}
          </span>
        ))}
      </PageHero>

      <Statement
        eyebrow="Plataforma de Saúde Digital"
        text="Desenvolvemos, integramos e gerenciamos soluções que conectam *tecnologia, *inovação, *inteligência *de *dados e *governança."
        aside="Formamos um ecossistema integrado de serviços, tecnologia e gestão em saúde. Atuamos com desenvolvimento de plataformas digitais, serviços de telemedicina, soluções White Label, modelos de franquias e novos negócios, atendendo às necessidades dos mercados público e privado."
        cta={{ to: '/solucoes', label: 'Ver soluções' }}
      />
      <Verbs />
      <Pillars />
      <Focus />
      <TelemedicineIntro />
      <InfraBento showHead={false} />
      <Regulatory />
      <Brands />
      <CtaBand />
    </>
  )
}
