import { PHOTOS } from './photos.js'

/* Artigos de exemplo. Rascunhos para validação jurídica e clínica antes de publicar.
   Blocos: { t: 'p' | 'h2' | 'quote', c } e { t: 'ul', items }. As fotos vêm de photos.js. */

export const POST_CATEGORIES = ['Regulação', 'Governança de dados', 'Gestão em Saúde', 'Soluções', 'Programas']

const RAW_POSTS = [
  {
    slug: 'lei-14510-telessaude',
    title: 'Telessaúde no Brasil: o que a Lei nº 14.510/2022 estabeleceu',
    excerpt:
      'A lei autoriza e disciplina a telessaúde em todo o território nacional. Entenda os princípios que orientam quem opera serviços digitais.',
    category: 'Regulação',
    date: '2026-11-03',
    cover: { variant: 'cross', tones: ['profundo', 'petroleo', 'oceano', 'agua'], rotate: 0 },
    body: [
      { t: 'p', c: 'A Lei nº 14.510/2022 autoriza e disciplina a prática da telessaúde em todo o território nacional, nos serviços públicos e privados. Ela transformou em regra permanente uma prática que se expandiu durante a pandemia e passou a orientar como a saúde digital deve ser prestada.' },
      { t: 'h2', c: 'Princípios que a lei destaca' },
      { t: 'ul', items: [
        'Autonomia do profissional de saúde na decisão sobre o atendimento a distância.',
        'Consentimento livre e informado do paciente.',
        'Direito de recusa ao atendimento por telessaúde, com atendimento presencial sempre que solicitado.',
        'Confidencialidade e segurança dos dados do paciente.',
        'Responsabilidade digital de quem presta o serviço.',
      ] },
      { t: 'h2', c: 'O que muda para quem opera telemedicina' },
      { t: 'p', c: 'Quem opera serviços digitais precisa alinhar plataforma, processos clínicos e governança aos princípios da lei e às normas dos conselhos profissionais. A tecnologia é o meio. O cuidado seguro e a responsabilidade do profissional continuam no centro.' },
      { t: 'quote', c: 'Tecnologia que conecta só transforma a saúde quando é segura, rastreável e centrada no paciente.' },
      { t: 'p', c: 'Para instituições públicas e privadas, o caminho é estruturar a operação com protocolos claros, consentimento registrado e indicadores que mostrem, na prática, o acesso e a qualidade do cuidado.' },
    ],
  },
  {
    slug: 'resolucao-cfm-2314-telemedicina',
    title: 'Resolução CFM nº 2.314/2022: os pilares da telemedicina no Brasil',
    excerpt: 'A norma define e regulamenta a telemedicina. Veja as modalidades e o que não pode faltar em uma operação.',
    category: 'Regulação',
    date: '2026-10-27',
    cover: { variant: 'fan', tones: ['oceano', 'ceu', 'agua', 'nevoa'], rotate: 10 },
    body: [
      { t: 'p', c: 'A Resolução CFM nº 2.314/2022 define e regulamenta a telemedicina como forma de serviços médicos mediados por tecnologias de comunicação. Ela organiza as modalidades de atendimento e estabelece balizas para que o cuidado a distância seja seguro e ético.' },
      { t: 'h2', c: 'Modalidades' },
      { t: 'ul', items: [
        'Teleconsulta: consulta médica a distância.',
        'Teleinterconsulta: troca de informações e opiniões entre médicos.',
        'Telediagnóstico: emissão de laudos e pareceres a distância.',
        'Telecirurgia: procedimento realizado a distância com apoio de equipamentos.',
        'Telemonitoramento: acompanhamento remoto de parâmetros de saúde.',
        'Teleorientação e teleconsultoria: orientação e esclarecimento de dúvidas.',
      ] },
      { t: 'h2', c: 'O que não pode faltar na operação' },
      { t: 'ul', items: [
        'Responsabilidade técnica médica pelo serviço.',
        'Registro do atendimento em prontuário.',
        'Segurança e sigilo das informações do paciente.',
        'Consentimento do paciente para o atendimento.',
      ] },
      { t: 'p', c: 'Na prática, isso significa tratar a telemedicina como uma operação clínica completa, com protocolos, treinamento, auditoria e plataforma desenhados desde o início.' },
    ],
  },
  {
    slug: 'lgpd-dados-de-saude',
    title: 'LGPD e dados de saúde: o consentimento é só o começo',
    excerpt: 'Dados de saúde são sensíveis. Veja as práticas que sustentam o tratamento seguro além do consentimento.',
    category: 'Governança de dados',
    date: '2026-10-20',
    cover: { variant: 'trio', tones: ['abismo', 'profundo', 'petroleo', 'ceu'], rotate: 30 },
    body: [
      { t: 'p', c: 'Segundo a Lei nº 13.709/2018 (LGPD), dados de saúde são dados pessoais sensíveis e pedem cuidado reforçado em todo o ciclo de tratamento. Em telemedicina, isso começa no cadastro e vai até o armazenamento e o descarte.' },
      { t: 'h2', c: 'Além do consentimento' },
      { t: 'p', c: 'A LGPD prevê hipóteses específicas para o tratamento de dados sensíveis, incluindo a tutela da saúde, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária. Isso não elimina a necessidade de transparência, finalidade clara e coleta mínima.' },
      { t: 'h2', c: 'Práticas que sustentam a governança' },
      { t: 'ul', items: [
        'Mapear quais dados são coletados em cada etapa da jornada.',
        'Definir finalidade e base legal para cada tratamento.',
        'Controlar acessos por perfil e registrar operações.',
        'Treinar equipes e avaliar fornecedores.',
        'Manter um canal para solicitações dos titulares.',
      ] },
      { t: 'quote', c: 'Governança de dados não é um documento. É a rotina que garante que ele seja cumprido.' },
    ],
  },
  {
    slug: 'haas-healthcare-as-a-service',
    title: 'HaaS: o que é Healthcare as a Service e por que ele muda a gestão em saúde',
    excerpt: 'Tecnologia, serviços assistenciais e gestão entregues como um serviço contínuo e integrado.',
    category: 'Gestão em Saúde',
    date: '2026-10-13',
    cover: { variant: 'rosette', tones: ['petroleo', 'oceano', 'ceu', 'gelo'], rotate: 0 },
    body: [
      { t: 'p', c: 'Healthcare as a Service (HaaS) é um modelo em que tecnologia, serviços assistenciais e gestão em saúde são entregues de forma integrada e contínua, como um serviço, em vez de projetos e contratos isolados.' },
      { t: 'h2', c: 'Os três blocos do modelo' },
      { t: 'ul', items: [
        'Plataforma digital própria, desenvolvida e evoluída pelo provedor.',
        'Operação assistencial, com corpo clínico, suporte e atendimento contínuo.',
        'Governança e dados, com indicadores que orientam a melhoria.',
      ] },
      { t: 'h2', c: 'Por que ele importa' },
      { t: 'p', c: 'Para o cliente, o HaaS reduz a complexidade de montar e coordenar vários fornecedores. Para o paciente, a experiência é única, do acesso ao acompanhamento. Para a gestão, há um parceiro responsável pelo resultado do conjunto.' },
      { t: 'p', c: 'É esse o desenho do ecossistema do Grupo Telemed: desenvolver, integrar e gerenciar soluções que conectam tecnologia, inovação, inteligência de dados e governança.' },
    ],
  },
  {
    slug: 'white-label-telemedicina',
    title: 'White Label em telemedicina: quando faz sentido ter uma plataforma com a sua marca',
    excerpt: 'Lançar o próprio serviço de telemedicina sem construir tecnologia nem corpo clínico.',
    category: 'Soluções',
    date: '2026-10-06',
    cover: { variant: 'orbit', tones: ['agua', 'ceu', 'oceano', 'petroleo'], rotate: 15 },
    body: [
      { t: 'p', c: 'No modelo White Label, a plataforma e a operação de telemedicina pertencem ao provedor, mas chegam ao paciente com a marca, os canais e a experiência do cliente. É um caminho rápido para lançar um serviço próprio em saúde digital.' },
      { t: 'h2', c: 'Quando faz sentido' },
      { t: 'ul', items: [
        'Operadoras e corretoras que querem telemedicina integrada ao produto.',
        'Empresas e associações que desejam oferecer um benefício com identidade própria.',
        'Grupos que planejam expandir com novos negócios em saúde digital.',
      ] },
      { t: 'h2', c: 'O que observar' },
      { t: 'p', c: 'Vale avaliar a robustez da plataforma, a existência de corpo clínico próprio, a governança clínica, a capacidade de integração e o suporte oferecido após o lançamento.' },
    ],
  },
  {
    slug: 'nr-1-saude-mental-telemedicina',
    title: 'NR-1 e saúde mental: como a telemedicina apoia a gestão de riscos psicossociais',
    excerpt: 'Suporte psicossocial acessível e indicadores agregados ajudam o RH e o SESMT a agir com informação.',
    category: 'Programas',
    date: '2026-09-29',
    cover: { variant: 'spiral', tones: ['gelo', 'agua', 'oceano', 'profundo'], rotate: 0 },
    body: [
      { t: 'p', c: 'A atualização da NR-1 incluiu os fatores de risco psicossociais relacionados ao trabalho no gerenciamento de riscos ocupacionais. Para as empresas, isso pede processos para identificar, avaliar e acompanhar essas situações.' },
      { t: 'h2', c: 'Onde a telemedicina entra' },
      { t: 'ul', items: [
        'Acolhimento e escuta qualificada, com acesso simples para o colaborador.',
        'Atendimento psicológico e psiquiátrico à distância, quando indicado.',
        'Indicadores agregados para apoiar as decisões do RH e do SESMT.',
      ] },
      { t: 'p', c: 'O objetivo é combinar cuidado individual e visão coletiva. O colaborador encontra apoio e a gestão passa a enxergar tendências, sem expor ninguém.' },
    ],
  },
]

/* Junta as fotos: capa em `image` e uma foto dentro do texto, depois do primeiro parágrafo. */
export const POSTS = RAW_POSTS.map((p) => {
  const ph = PHOTOS[p.slug]
  if (!ph) return p
  return {
    ...p,
    image: ph.cover,
    body: [p.body[0], { t: 'img', ...ph.inline }, ...p.body.slice(1)],
  }
})

export const getPost = (slug) => POSTS.find((p) => p.slug === slug)

export const readingTime = (post) => {
  const words = post.body
    .filter((b) => b.t !== 'img')
    .map((b) => (b.items ? b.items.join(' ') : b.c))
    .join(' ')
    .split(/\s+/).length
  return Math.max(2, Math.round(words / 190))
}

export const formatDate = (iso) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
