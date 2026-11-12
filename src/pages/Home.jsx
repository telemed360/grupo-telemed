import HomeHero from '../components/sections/HomeHero.jsx'
import Statement from '../components/sections/Statement.jsx'
import Pillars from '../components/sections/Pillars.jsx'
import InfraBento from '../components/sections/InfraBento.jsx'
import SolutionsGrid from '../components/sections/SolutionsGrid.jsx'
import ProcessStrip from '../components/sections/ProcessStrip.jsx'
import ProgramsSection from '../components/sections/ProgramsSection.jsx'
import BlogTeaser from '../components/sections/BlogTeaser.jsx'
import Faq from '../components/sections/Faq.jsx'
import CtaBand from '../components/sections/CtaBand.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Home() {
  usePageMeta(
    null,
    'Plataforma de saúde digital especializada em telemedicina. Desenvolvemos, integramos e gerenciamos soluções em saúde para os mercados público e privado.',
  )
  return (
    <>
      <HomeHero />
      <Statement
        eyebrow="Quem somos"
        text="Somos uma plataforma de saúde digital especializada em *telemedicina, atuando no modelo *HaaS *(Healthcare *as *a *Service)."
        aside="Mais do que uma plataforma de telemedicina, somos uma empresa de tecnologia e inovação em saúde, dedicada a desenvolver e implementar projetos personalizados que ampliam o acesso, otimizam processos e promovem eficiência, escalabilidade e sustentabilidade na gestão dos serviços de saúde."
        cta={{ to: '/quem-somos', label: 'Conheça o Grupo Telemed' }}
      />
      <Pillars />
      <InfraBento />
      <SolutionsGrid />
      <ProcessStrip />
      <ProgramsSection />
      <BlogTeaser />
      <Faq />
      <CtaBand />
    </>
  )
}
