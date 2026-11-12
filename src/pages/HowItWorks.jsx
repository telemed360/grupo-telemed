import PageHero from '../components/sections/PageHero.jsx'
import ProcessSticky from '../components/sections/ProcessSticky.jsx'
import PatientJourney from '../components/sections/PatientJourney.jsx'
import Faq from '../components/sections/Faq.jsx'
import CtaBand from '../components/sections/CtaBand.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

export default function HowItWorks() {
  usePageMeta('Como funciona', 'Da implantação personalizada à jornada do paciente: veja como funciona a telemedicina do Grupo Telemed.')
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Como funciona' }]}
        eyebrow="Como funciona"
        title="Da implantação"
        soft="ao cuidado contínuo."
        lead="Quatro etapas para colocar a operação no ar e uma jornada simples para o paciente, com governança clínica em cada passo."
        art="orbit"
      />
      <ProcessSticky />
      <PatientJourney />
      <Faq theme="theme-light" />
      <CtaBand />
    </>
  )
}
