import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import PetalArt from '../brand/PetalArt.jsx'
import './sections.css'

export default function CtaBand({
  eyebrow = 'Próximo passo',
  title = 'Vamos desenhar a saúde digital da sua operação?',
  text = 'Conte o que você busca. Um consultor entende o contexto, apresenta o caminho e desenha o projeto com você.',
}) {
  return (
    <section className="cta theme-light" data-nav="light">
      <div className="container">
        <Reveal className="cta__panel" y={40}>
          <PetalArt variant="rosette" blend="multiply" spin={120} opacity={0.85} tones={['profundo', 'petroleo', 'abismo', 'oceano']} className="cta__art" />
          <div className="cta__copy">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="h-1 cta__title">{title}</h2>
            <p className="lead">{text}</p>
            <div className="cta__actions">
              <Button to="/contato" size="lg" variant="primary">
                Falar com um consultor
              </Button>
              <Button to="/programas-de-saude" size="lg" variant="ghost" icon="arrow-up-right">
                Ver programas de saúde
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
