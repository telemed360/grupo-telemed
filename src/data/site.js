/* Dados institucionais do site. Edite aqui, sem tocar nos componentes. */

export const NAV = [
  { to: '/quem-somos', label: 'Quem somos' },
  { to: '/solucoes', label: 'Soluções' },
  { to: '/como-funciona', label: 'Como funciona' },
  { to: '/programas-de-saude', label: 'Programas de Saúde' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' },
]

/* Fotos do hero da home: horizontal (desktop) e vertical (celular). Para trocar, substitua os arquivos em public/images. */
export const HERO_IMAGE = {
  src: '/images/hero.webp',
  mobileSrc: '/images/hero-mobile.webp',
  alt: 'Casal sorrindo no sofá de casa, ele no celular e ela no notebook, com um buldogue francês dormindo ao lado',
}

export const SITE = {
  name: 'Grupo Telemed',
  sub: 'Hub Saúde',
  slogan: ['Tecnologia que conecta.', 'Saúde que transforma.'],
  descriptor: ['Hub Saúde', 'HealthTech', 'Telemedicina', 'Tecnologia', 'Gestão em Saúde'],
  year: 2026,
}

/* PROVISÓRIO: troque pelos canais reais antes de publicar. Campos vazios não aparecem no site. */
export const CONTACT = {
  email: 'contato@grupotelemed.com.br',
  phone: '0800 590 0590 (WhatsApp)',
  whatsapp: '', // somente dígitos com DDI, ex.: 5511999999999
  address: '',
  hours: 'Atendimento clínico 24/7. Comercial em horário útil.',
}

export const BRANDS = [
  {
    name: 'Telemedicina 360',
    url: 'https://telemedicina360.com.br',
    text: 'Marca de saúde digital do grupo, com telemedicina, medicamentos e gestão integrados em uma só experiência.',
  },
]

export const REGULATORY = [
  {
    code: 'Lei nº 14.510/2022',
    short: '14.510',
    title: 'Telessaúde',
    text: 'Regulamenta a prática da telessaúde em todo o território nacional.',
  },
  {
    code: 'Resolução CFM nº 2.314/2022',
    short: '2.314',
    title: 'Telemedicina',
    text: 'Define e regulamenta a telemedicina no âmbito médico.',
  },
  {
    code: 'Lei nº 13.709/2018',
    short: 'LGPD',
    title: 'Proteção de dados',
    text: 'Estabelece regras para o tratamento de dados pessoais, inclusive dados sensíveis de saúde.',
  },
]

export const PILLARS = [
  {
    key: 'tecnologia',
    title: 'Tecnologia',
    tone: 'Gelo',
    text: 'Plataformas digitais próprias, desenvolvidas, integradas e evoluídas pelo grupo para cada operação.',
  },
  {
    key: 'inovacao',
    title: 'Inovação',
    tone: 'Água',
    text: 'Novos modelos de serviço em saúde digital: White Label, franquias e novos negócios.',
  },
  {
    key: 'dados',
    title: 'Inteligência de dados',
    tone: 'Profundo',
    text: 'Dados clínicos e operacionais convertidos em indicadores para decidir, acompanhar e melhorar.',
  },
  {
    key: 'governanca',
    title: 'Governança',
    tone: 'Oceano',
    text: 'Governança clínica, aderência regulatória e gestão por processos para escalar com segurança.',
  },
]

/* Estrutura de infraestrutura, lida pelo bento. O número de programas é calculado em runtime. */
export const SPECIALTIES = [
  'Clínica geral',
  'Pediatria',
  'Cardiologia',
  'Dermatologia',
  'Endocrinologia',
  'Ginecologia',
  'Psiquiatria',
  'Neurologia',
  'Ortopedia',
  'Nutrição',
  'Psicologia',
  'Geriatria',
]
