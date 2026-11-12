/* Programas de Saúde. A ordem segue a escala de azuis do manual, do mais escuro ao mais claro.
   `fg: 'light'` = texto claro sobre fundo escuro; `fg: 'dark'` = texto Abismo sobre fundo claro (contraste AA). */

export const PROGRAMS = [
  {
    slug: 'telemedicina',
    title: 'Telemedicina 24h',
    short: 'Telemedicina',
    audience: 'Empresas, instituições, operadoras e poder público',
    summary:
      'Atendimento médico à distância, 24 horas por dia, com corpo clínico próprio e mais de 30 especialidades e subespecialidades.',
    bullets: [
      'Plataforma própria, com a identidade do cliente quando necessário',
      'Corpo clínico próprio e atendimento 24/7',
      'Receitas, atestados e pedidos de exame digitais',
    ],
    icon: 'video',
    tone: '#062836',
    fg: 'light',
    intro:
      'O programa-base do ecossistema. A teleconsulta acontece na plataforma própria do grupo, integrada à operação de cada cliente, com governança clínica e suporte especializado.',
    forWho: [
      'Empresas que oferecem benefício de saúde aos colaboradores',
      'Instituições e redes que querem ampliar o acesso ao cuidado',
      'Operadoras, corretoras e iniciativas White Label',
      'Municípios e órgãos públicos',
    ],
    how: [
      { t: 'Acesso', d: 'O paciente entra pelo canal da instituição, no celular ou no computador.' },
      { t: 'Triagem e acolhimento', d: 'Dados essenciais e consentimento informado antes do atendimento.' },
      { t: 'Teleconsulta', d: 'Atendimento por profissional de saúde do corpo clínico, na especialidade adequada.' },
      { t: 'Desfecho e continuidade', d: 'Documentos digitais, orientações e encaminhamento, inclusive presencial.' },
    ],
  },
  {
    slug: 'entrevista-qualificada',
    title: 'Entrevista Qualificada',
    short: 'Entrevista Qualificada',
    audience: 'Operadoras e corretoras',
    summary:
      'Entrevista de saúde conduzida por profissional qualificado, com registro e rastreabilidade, para apoiar a declaração de saúde na adesão.',
    bullets: [
      'Conduzida por profissional de saúde qualificado',
      'Atendimento gravado e registrado',
      'Fluxo integrado ao processo de adesão do cliente',
    ],
    icon: 'file',
    tone: '#26788D',
    fg: 'light',
    intro:
      'Um fluxo de entrevista pensado para a etapa de contratação. O profissional conduz a conversa, orienta o beneficiário e deixa o registro organizado para o processo da operadora ou da corretora.',
    forWho: ['Operadoras de planos de saúde', 'Corretoras e administradoras de benefícios', 'Áreas de adesão e de relacionamento'],
    how: [
      { t: 'Agendamento', d: 'O beneficiário é convidado pelo canal do cliente, no horário que preferir.' },
      { t: 'Entrevista', d: 'Conversa conduzida por profissional qualificado, com roteiro padronizado.' },
      { t: 'Registro', d: 'Atendimento gravado e documentado, com rastreabilidade.' },
      { t: 'Integração', d: 'Informações devolvidas ao fluxo de adesão do cliente.' },
    ],
  },
  {
    slug: 'projeto-remocao',
    title: 'Projeto Remoção',
    short: 'Projeto Remoção',
    audience: 'Indústrias com ambulatório próprio e operações com risco assistencial',
    summary:
      'Triagem médica à distância antes do acionamento de ambulância, para decisões de remoção mais assertivas e rastreáveis.',
    bullets: [
      'Avaliação médica remota no momento da ocorrência',
      'Protocolos clínicos para apoiar a decisão',
      'Registro e indicadores de cada ocorrência',
    ],
    icon: 'ambulance',
    tone: '#368DA3',
    fg: 'dark',
    intro:
      'Quando há uma ocorrência, o médico avalia o quadro à distância com a equipe local e apoia a decisão sobre a remoção, com protocolo e registro.',
    forWho: ['Indústrias e unidades com ambulatório próprio', 'Operações com equipes em campo', 'Gestores de segurança e saúde ocupacional'],
    how: [
      { t: 'Ocorrência', d: 'A equipe local aciona o médico pela plataforma.' },
      { t: 'Avaliação remota', d: 'Triagem clínica à distância, com apoio de protocolos.' },
      { t: 'Decisão', d: 'Orientação sobre conduta e necessidade de remoção.' },
      { t: 'Registro', d: 'Ocorrência documentada e indicadores para a gestão.' },
    ],
  },
  {
    slug: 'programas-de-suporte',
    title: 'Programas de Suporte',
    short: 'Programas de Suporte',
    audience: 'RH, SESMT e gestores de saúde corporativa',
    summary:
      'Suporte psicossocial e acompanhamento contínuo, alinhados à gestão de riscos psicossociais prevista na NR-1.',
    bullets: [
      'Acolhimento e escuta qualificada',
      'Apoio à gestão de riscos psicossociais (NR-1)',
      'Indicadores agregados para a gestão',
    ],
    icon: 'users',
    tone: '#73C5DA',
    fg: 'dark',
    intro:
      'Um programa de suporte que combina acolhimento individual e visão coletiva. As equipes são apoiadas no dia a dia e a gestão recebe indicadores para agir com informação.',
    forWho: ['Áreas de RH e de pessoas', 'SESMT e segurança do trabalho', 'Empresas que estruturam a gestão de riscos psicossociais'],
    how: [
      { t: 'Diagnóstico', d: 'Entendimento do contexto e dos objetivos da empresa.' },
      { t: 'Acolhimento', d: 'Canal de escuta e atendimento aos colaboradores.' },
      { t: 'Acompanhamento', d: 'Continuidade do cuidado e encaminhamentos quando necessário.' },
      { t: 'Gestão', d: 'Indicadores agregados para apoiar decisões do RH e do SESMT.' },
    ],
  },
  {
    slug: 'tea',
    title: 'TEA',
    short: 'TEA',
    audience: 'Empresas, clínicas, escolas e operadoras',
    summary:
      'Avaliação e acompanhamento multiprofissional do Transtorno do Espectro Autista, com cuidado integrado entre profissionais, pacientes e famílias.',
    bullets: [
      'Avaliação e plano de cuidado multiprofissional',
      'Acompanhamento remoto de pacientes e famílias',
      'Orientação a escolas e equipes',
    ],
    icon: 'brain',
    tone: '#83D2E6',
    fg: 'dark',
    intro:
      'O cuidado do TEA exige vários olhares trabalhando juntos. O programa organiza a avaliação, o plano e o acompanhamento em uma jornada contínua, com a família no centro.',
    forWho: ['Operadoras e empresas com beneficiários e dependentes', 'Clínicas e escolas', 'Famílias acompanhadas pelos clientes'],
    how: [
      { t: 'Acolhimento', d: 'Primeiro contato com a família e coleta de histórico.' },
      { t: 'Avaliação', d: 'Avaliação multiprofissional, conduzida à distância sempre que possível.' },
      { t: 'Plano de cuidado', d: 'Plano individual com metas e responsáveis.' },
      { t: 'Acompanhamento', d: 'Revisões periódicas e orientação a famílias e escolas.' },
    ],
  },
  {
    slug: 'psicologia-clinica',
    title: 'Psicologia Clínica',
    short: 'Psicologia Clínica',
    audience: 'Empresas, instituições e operadoras',
    summary:
      'Atendimento psicológico à distância, com acolhimento, continuidade e privacidade no cuidado em saúde mental.',
    bullets: [
      'Sessões por vídeo com psicólogos',
      'Acompanhamento ao longo do tempo',
      'Integração com os demais programas de saúde',
    ],
    icon: 'chat',
    tone: '#B7E7F3',
    fg: 'dark',
    intro:
      'Atendimento psicológico online, com a mesma plataforma e a mesma governança dos demais programas. O paciente mantém continuidade e o cliente enxerga a utilização de forma agregada.',
    forWho: ['Empresas e áreas de pessoas', 'Instituições de ensino e saúde', 'Operadoras e corretoras'],
    how: [
      { t: 'Acesso', d: 'Solicitação pelo canal do cliente e escolha de horário.' },
      { t: 'Acolhimento', d: 'Primeira sessão para entender a demanda e definir o acompanhamento.' },
      { t: 'Sessões', d: 'Atendimento por vídeo, com continuidade do mesmo profissional sempre que possível.' },
      { t: 'Integração', d: 'Encaminhamento para outros programas, quando indicado.' },
    ],
  },
  {
    slug: 'agendamento-presencial',
    title: 'Agendamento Presencial',
    short: 'Agendamento Presencial',
    audience: 'Operações que combinam atendimento digital e rede física',
    summary:
      'Quando o cuidado precisa ser presencial, o paciente é conectado à consulta ou ao exame, sem perder o histórico do atendimento digital.',
    bullets: [
      'Encaminhamento direto a partir da teleconsulta',
      'Agenda integrada à rede do cliente',
      'Histórico unificado do paciente',
    ],
    icon: 'calendar',
    tone: '#C2ECF7',
    fg: 'dark',
    intro:
      'Nem todo cuidado cabe em uma tela. O programa fecha o ciclo: do atendimento digital ao agendamento presencial, mantendo o paciente e a informação conectados.',
    forWho: ['Operadoras e redes de atendimento', 'Empresas com rede credenciada', 'Instituições com unidades próprias'],
    how: [
      { t: 'Indicação', d: 'O profissional identifica a necessidade de atendimento presencial.' },
      { t: 'Agendamento', d: 'O paciente escolhe unidade, data e horário.' },
      { t: 'Confirmação', d: 'Lembretes e confirmação pelos canais do cliente.' },
      { t: 'Continuidade', d: 'Resultado e histórico voltam ao prontuário do paciente.' },
    ],
  },
]

export const getProgram = (slug) => PROGRAMS.find((p) => p.slug === slug)
