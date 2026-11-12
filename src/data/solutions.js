/* Soluções por mercado e modelo de negócio. Fonte: documento de arquitetura (público e privado, White Label, franquias). */

export const SOLUTIONS = [
  {
    slug: 'setor-publico',
    title: 'Setor público',
    tag: 'Municípios, estados e consórcios',
    icon: 'landmark',
    art: 'cross',
    tones: ['profundo', 'petroleo', 'oceano', 'agua'],
    summary: 'Telessaúde para ampliar o acesso, reduzir filas e dar continuidade ao cuidado em toda a rede.',
    bullets: [
      'Teleconsulta e teleinterconsulta para a rede de atenção',
      'Apoio ao telediagnóstico e à regulação',
      'Gestão por indicadores e transparência',
    ],
    detail:
      'Implantamos a telessaúde de acordo com a realidade de cada território: do apoio às equipes de atenção primária à integração com a rede especializada. A gestão acompanha uso, acesso e resultados em painéis claros.',
  },
  {
    slug: 'empresas',
    title: 'Empresas',
    tag: 'RH, SESMT e benefícios',
    icon: 'building',
    art: 'rosette',
    tones: ['oceano', 'ceu', 'agua', 'nevoa'],
    summary: 'Benefício de saúde digital com atendimento 24/7 e programas sob medida para colaboradores e dependentes.',
    bullets: [
      'Telemedicina 24h com mais de 30 especialidades',
      'Programas de suporte psicossocial e saúde mental',
      'Indicadores agregados para RH e SESMT',
    ],
    detail:
      'Um benefício que o colaborador usa de verdade, no celular, a qualquer hora. A empresa acompanha adesão e utilização e conecta programas específicos às necessidades da operação.',
  },
  {
    slug: 'operadoras-e-corretoras',
    title: 'Operadoras e corretoras',
    tag: 'Saúde suplementar',
    icon: 'layers',
    art: 'fan',
    tones: ['petroleo', 'oceano', 'ceu', 'nevoa'],
    summary: 'Plataforma e serviços para ampliar a rede de cuidado, qualificar a adesão e gerir a saúde da carteira.',
    bullets: [
      'Entrevista qualificada gravada na adesão',
      'Telemedicina integrada ao produto',
      'Gestão do cuidado apoiada em dados',
    ],
    detail:
      'Conectamos telemedicina e programas de saúde ao produto da operadora ou da corretora, com integrações aos sistemas existentes e governança clínica ponta a ponta.',
  },
  {
    slug: 'white-label',
    title: 'White Label',
    tag: 'Plataforma com a sua marca',
    icon: 'tag',
    art: 'orbit',
    tones: ['agua', 'ceu', 'oceano', 'petroleo'],
    summary: 'A plataforma de telemedicina do grupo com a marca, os canais e a experiência do seu negócio.',
    bullets: [
      'Identidade visual e canais do cliente',
      'Plataforma, corpo clínico e suporte do grupo',
      'Pronta para integrar a sistemas e benefícios',
    ],
    detail:
      'O cliente lança seu próprio serviço de telemedicina sem construir tecnologia nem corpo clínico. A marca é dele; a plataforma, a operação e a governança são nossas.',
  },
  {
    slug: 'franquias-e-novos-negocios',
    title: 'Franquias e novos negócios',
    tag: 'Expansão em saúde digital',
    icon: 'store',
    art: 'spiral',
    tones: ['gelo', 'agua', 'ceu', 'oceano'],
    summary: 'Modelos de expansão com tecnologia, treinamento e operação para abrir novas frentes em saúde digital.',
    bullets: [
      'Modelo replicável com governança clínica',
      'Tecnologia, treinamento e suporte contínuos',
      'Projetos personalizados para cada mercado',
    ],
    detail:
      'Desenhamos, com o parceiro, um modelo de negócio em saúde digital que pode ser replicado. A estrutura de tecnologia, protocolos e suporte acompanha cada nova unidade.',
  },
]

/* Quatro etapas da implantação: cada uma acende uma pétala. */
export const STAGES = [
  {
    n: '01',
    title: 'Diagnóstico',
    text: 'Entendemos o público, os objetivos, os fluxos e as regras da operação, pública ou privada.',
    items: ['Mapeamento de público e demanda', 'Requisitos clínicos e regulatórios', 'Plano do projeto'],
  },
  {
    n: '02',
    title: 'Personalização',
    text: 'Desenhamos o modelo assistencial, os programas de saúde e a experiência da marca.',
    items: ['Escopo de especialidades e programas', 'Identidade e canais do cliente', 'Integrações necessárias'],
  },
  {
    n: '03',
    title: 'Implantação',
    text: 'Configuramos a plataforma, conectamos os sistemas, treinamos as equipes e validamos tudo antes do lançamento.',
    items: ['Configuração e integrações', 'Treinamento de gestores e equipes', 'Lançamento assistido'],
  },
  {
    n: '04',
    title: 'Operação',
    text: 'Corpo clínico próprio 24/7, help desk especializado e governança clínica para manter a qualidade no dia a dia.',
    items: ['Atendimento 24/7', 'Help desk especializado', 'Indicadores e evolução contínua'],
  },
]

/* Jornada do paciente (celular interativo em Como funciona). */
export const JOURNEY = [
  { key: 'acesso', title: 'Acesso', text: 'O paciente entra pelo canal da instituição, no celular ou no computador, e confirma seus dados com segurança.' },
  { key: 'triagem', title: 'Triagem', text: 'Perguntas objetivas organizam o motivo do contato e direcionam para a especialidade adequada.' },
  { key: 'consulta', title: 'Teleconsulta', text: 'Atendimento por vídeo com profissional do corpo clínico, na plataforma própria do grupo.' },
  { key: 'documentos', title: 'Documentos', text: 'Receitas, atestados e pedidos de exame emitidos em formato digital, disponíveis ao final da consulta.' },
  { key: 'continuidade', title: 'Continuidade', text: 'Orientações, retornos e encaminhamentos, inclusive presenciais, mantêm o cuidado em andamento.' },
]
