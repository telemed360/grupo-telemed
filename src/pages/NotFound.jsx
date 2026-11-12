import Button from '../components/ui/Button.jsx'
import PetalArt from '../components/brand/PetalArt.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import './pages.css'

export default function NotFound() {
  usePageMeta('Página não encontrada')
  return (
    <section className="nf theme-dark" data-nav="dark">
      <PetalArt variant="rosette" blend="screen" spin={120} opacity={0.5} tones={['petroleo', 'oceano', 'ceu', 'agua']} className="nf__art" />
      <div className="container nf__inner">
        <span className="nf__code" aria-hidden="true">
          404
        </span>
        <h1 className="h-1" style={{ color: '#fff' }}>
          Esta página não existe.
          <span className="t-soft" style={{ color: 'var(--agua)' }}>
            Mas o caminho de volta é curto.
          </span>
        </h1>
        <p className="lead">O endereço pode ter mudado ou ter sido digitado com algum erro.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button to="/" size="lg" variant="onDark">
            Voltar ao início
          </Button>
          <Button to="/contato" size="lg" variant="ghostDark" icon="arrow-up-right">
            Falar com consultor
          </Button>
        </div>
      </div>
    </section>
  )
}
