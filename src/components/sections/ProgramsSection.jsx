import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import ProgramsExplorer from './ProgramsExplorer.jsx'
import { PROGRAMS } from '../../data/programs.js'

export default function ProgramsSection({ theme = 'theme-alt', head = true, sheet = false, cta = true }) {
  return (
    <section className={`section ${theme} ${sheet ? 'section--sheet' : ''}`} data-nav="light" id="programas">
      <div className="container">
        {head && (
          <div className="sec-head">
            <div>
              <Reveal as="p" className="eyebrow">
                Programas de Saúde
              </Reveal>
              <Reveal as="h2" className="h-1" delay={0.05}>
                {PROGRAMS.length} programas.
                <span className="t-soft">Combine o que a sua operação precisa.</span>
              </Reveal>
            </div>
            <Reveal className="sec-head__aside" delay={0.1}>
              <p className="lead">
                Da telemedicina 24h ao agendamento presencial, cada programa tem público, fluxo e governança próprios,
                e todos funcionam na mesma plataforma.
              </p>
              {cta && (
                <Button to="/programas-de-saude" variant="ghost" icon="arrow-up-right">
                  Ver todos os programas
                </Button>
              )}
            </Reveal>
          </div>
        )}
        <Reveal y={40}>
          <ProgramsExplorer />
        </Reveal>
      </div>
    </section>
  )
}
