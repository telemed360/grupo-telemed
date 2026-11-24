import Reveal, { Item, Stagger } from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import Button from '../ui/Button.jsx'
import PetalArt from '../brand/PetalArt.jsx'
import { REGULATORY, BRANDS } from '../../data/site.js'
import { LEADERSHIP } from '../../data/leadership.js'
import './about.css'

export function Leadership() {
  return (
    <section className="section theme-dark" data-nav="dark" id="diretoria">
      <div className="container">
        <div className="sec-head">
          <div>
            <Reveal as="p" className="eyebrow">
              Diretoria
            </Reveal>
            <Reveal as="h2" className="h-1" delay={0.05}>
              Quem lidera.
              <span className="t-soft">Experiência que sustenta o cuidado.</span>
            </Reveal>
          </div>
          <Reveal as="p" className="lead" delay={0.1}>
            Trajetórias na saúde, na tecnologia, no mercado e na governança, reunidas para levar cuidado digital com
            ética, escala e proximidade às famílias brasileiras.
          </Reveal>
        </div>
        <Stagger as="ul" className="dirs" gap={0.1}>
          {LEADERSHIP.map((p) => (
            <Item as="li" key={p.name} className="dir" data-spot>
              <figure className="dir__ph">
                <img src={p.photo} alt={`${p.name}, ${p.role}`} loading="lazy" decoding="async" style={{ objectPosition: p.pos }} />              </figure>
              <div className="dir__body">
                <p className="dir__role">{p.role}</p>
                <h3 className="h-3">{p.name}</h3>
                <blockquote className="dir__quote">{p.quote}</blockquote>
                <p className="dir__bio">{p.bio}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* Desenvolvemos · Integramos · Gerenciamos: o verbo do documento de arquitetura vira linha editorial. */
const VERBS = [
  { n: '01', w: 'Desenvolvemos', t: 'Plataformas digitais e serviços de telemedicina próprios, evoluídos continuamente com cada operação.' },
  { n: '02', w: 'Integramos', t: 'Soluções conectadas aos sistemas, benefícios e canais que cada cliente, público ou privado, já utiliza.' },
  { n: '03', w: 'Gerenciamos', t: 'Operação clínica, suporte e governança, com dados que orientam a melhoria contínua dos serviços.' },
]

export function Verbs() {
  return (
    <section className="section theme-alt" data-nav="light">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          O que fazemos
        </Reveal>
        <div className="verbs">
          {VERBS.map((v) => (
            <Reveal key={v.n} className="verb" data-spot>
              <h3 className="verb__w">{v.w}</h3>
              <p>{v.t}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const FOCUS = [
  { icon: 'layers', t: 'Plataformas digitais', d: 'Desenvolvimento e evolução de ambientes digitais de saúde.' },
  { icon: 'video', t: 'Serviços de telemedicina', d: 'Atendimento a distância com corpo clínico próprio, 24/7.' },
  { icon: 'tag', t: 'Soluções White Label', d: 'A plataforma do grupo com a marca e os canais do cliente.' },
  { icon: 'store', t: 'Franquias e novos negócios', d: 'Modelos replicáveis de expansão em saúde digital.' },
  { icon: 'landmark', t: 'Mercados público e privado', d: 'Soluções desenhadas para cada realidade de operação.' },
]

export function Focus() {
  return (
    <section className="section theme-light" data-nav="light">
      <div className="container focus">
        <div className="focus__left">
          <Reveal as="p" className="eyebrow">
            Nossa atuação
          </Reveal>
          <Reveal as="h2" className="h-1" delay={0.05}>
            Mais do que uma plataforma.
            <span className="t-soft">Uma empresa de tecnologia e inovação em saúde.</span>
          </Reveal>
          <Reveal as="p" className="lead" delay={0.1}>
            Dedicada a desenvolver e implementar projetos personalizados que ampliam o acesso à saúde, otimizam
            processos e promovem eficiência, escalabilidade e sustentabilidade na gestão dos serviços.
          </Reveal>
        </div>
        <Stagger as="ul" className="focus__list" gap={0.08}>
          {FOCUS.map((f) => (
            <Item as="li" key={f.t} data-spot>
              <span className="focus__ic">
                <Icon name={f.icon} size={22} />
              </span>
              <div>
                <h3 className="h-3">{f.t}</h3>
                <p>{f.d}</p>
              </div>
              <Icon name="arrow-up-right" size={20} className="focus__arrow" />
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function TelemedicineIntro() {
  return (
    <section className="section theme-alt" data-nav="light" style={{ paddingBottom: 0 }}>
      <div className="container tele">
        <div className="tele__head">
          <Reveal as="p" className="eyebrow">
            Saúde e bem-estar
          </Reveal>
          <Reveal as="h2" className="h-1" delay={0.05}>
            Telemedicina.
            <span className="t-soft">Cuidado que chega onde a pessoa está.</span>
          </Reveal>
        </div>
        <div className="tele__cols">
          <Reveal as="p" className="body-text">
            A saúde digital representa uma evolução na forma de conectar pessoas, profissionais e serviços de saúde,
            utilizando tecnologias digitais para ampliar o acesso, facilitar o atendimento e promover a continuidade do
            cuidado.
          </Reveal>
          <Reveal as="p" className="body-text" delay={0.08}>
            Nesse contexto, a telemedicina viabiliza a prestação de serviços médicos a distância, permitindo consultas,
            orientações, acompanhamento e monitoramento clínico por meio de plataformas digitais.
          </Reveal>
          <Reveal as="p" className="body-text" delay={0.16}>
            Integrada a outras modalidades de telessaúde, a tecnologia amplia as possibilidades de atendimento
            multiprofissional, contribuindo para uma assistência mais acessível, integrada e eficiente.
          </Reveal>
          <Reveal as="p" className="body-text" delay={0.24}>
            Por meio de soluções digitais, promovemos a democratização do acesso à saúde, a inovação nos serviços
            assistenciais e a melhoria da experiência de pacientes, profissionais e instituições.
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Regulatory() {
  return (
    <section className="section theme-dark" data-nav="dark" id="regulacao">
      <div className="container">
        <div className="sec-head">
          <div>
            <Reveal as="p" className="eyebrow">
              Referências regulatórias
            </Reveal>
            <Reveal as="h2" className="h-1" delay={0.05}>
              Orientados pela regulação.
              <span className="t-soft">Feitos para o cuidado seguro.</span>
            </Reveal>
          </div>
          <Reveal as="p" className="lead" delay={0.1}>
            Telessaúde, telemedicina e proteção de dados têm normas claras no Brasil. Elas orientam o desenho das nossas
            plataformas, protocolos e operações.
          </Reveal>
        </div>
        <Stagger className="reg" gap={0.12}>
          {REGULATORY.map((r) => (
            <Item key={r.code} className="reg__card" data-spot>
              <strong className="reg__num">{r.short}</strong>
              <h3 className="h-3">{r.title}</h3>
              <p>{r.text}</p>
              <span className="reg__code">{r.code}</span>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function Brands() {
  return (
    <section className="section section--tight theme-light" data-nav="light">
      <div className="container">
        <Reveal as="p" className="eyebrow" style={{ marginBottom: 28 }}>
          Marcas do grupo
        </Reveal>
        {BRANDS.map((b) => (
          <Reveal key={b.name} className="brand" data-spot>
            <PetalArt variant="trio" blend="multiply" spin={90} tones={['oceano', 'ceu', 'agua']} opacity={0.85} className="brand__art" />
            <div className="brand__copy">
              <h3 className="h-2">{b.name}</h3>
              <p className="lead">{b.text}</p>
              <Button href={b.url} variant="primary" icon="arrow-up-right">
                Conhecer a {b.name}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
