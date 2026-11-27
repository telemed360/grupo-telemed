/* Fotos do blog, do Pexels (licença gratuita, uso comercial permitido, crédito opcional).
   Cada artigo tem uma capa e uma foto dentro do texto. Para trocar, substitua o arquivo em public/images/blog. */

const px = (slug, name, id) => ({ name, url: `https://www.pexels.com/photo/${slug}-${id}/` })

export const PHOTOS = {
  /* Imagens geradas para o artigo (sem crédito de terceiros). As imagens internas ficam no body do post. */
  'airton-moraes-experiencia-farma-confianca-saude-digital': {
    cover: {
      src: '/images/blog/airton-cover.jpg',
      alt: 'Médica e executivo conversando em um corredor de clínica',
    },
  },
  'gender-moreira-expansao-etica-saude-digital': {
    cover: {
      src: '/images/diretoria/gender-moreira.jpg',
      alt: 'Gender Moreira, Diretor-Presidente Fundador do Grupo Telemed Hub Saúde',
      pos: '50% 10%',
    },
  },
  'pilares-saude-digital-grupo-telemed': {
    cover: {
      src: '/images/blog/pilares-cover.jpg',
      alt: 'Vista de cima de uma mesa de reunião com tecnologia, dados, documentos e estetoscópio reunidos',
    },
  },
  'telemedicina-porto-alegre-instituto-caldeira': {
    cover: {
      src: '/images/blog/porto-alegre-cover.jpg',
      alt: 'Profissionais conversando em uma mesa de trabalho em um espaço de inovação com tijolos aparentes',
    },
  },
  'telemedicina-white-label-marca-propria': {
    cover: {
      src: '/images/blog/white-label-expansao-cover.jpg',
      alt: 'Empresária sorrindo enquanto usa o celular em um escritório moderno',
    },
  },
  'lei-14510-telessaude': {
    cover: {
      src: '/images/blog/lei-14510-cover.jpg',
      alt: 'Médico em consultório atendendo um paciente em videochamada pelo notebook',
      credit: px('doctor-consulting-patient-via-online-video-call', 'Vitaly Gariev', 39192424),
    },
    inline: {
      src: '/images/blog/lei-14510-inline.jpg',
      alt: 'Profissional de saúde com fone de ouvido em teleconsulta pelo notebook',
      credit: px('woman-in-online-meeting', 'Kaboompics.com', 7195079),
    },
  },
  'resolucao-cfm-2314-telemedicina': {
    cover: {
      src: '/images/blog/cfm-2314-cover.jpg',
      alt: 'Médico de jaleco atendendo online em um notebook',
      credit: px('male-doctor-doing-an-online-consultation', 'Tima Miroshnichenko', 8376152),
    },
    inline: {
      src: '/images/blog/cfm-2314-inline.jpg',
      alt: 'Estetoscópio azul ao lado de um notebook sobre uma mesa branca',
      credit: px('computer-desk-laptop-stethoscope', 'Negative Space', 48604),
    },
  },
  'lgpd-dados-de-saude': {
    cover: {
      src: '/images/blog/lgpd-cover.jpg',
      alt: 'Celular preso por uma corrente e um cadeado de combinação',
      credit: px('close-up-of-a-smart-phone-with-a-lock', 'Towfiqu barbhuiya', 11391947),
    },
    inline: {
      src: '/images/blog/lgpd-inline.jpg',
      alt: 'Dedo digitando a senha de desbloqueio na tela de um tablet',
      credit: px('a-person-s-finger-is-touching-a-tablet-screen', 'indra projects', 27742642),
    },
  },
  'haas-healthcare-as-a-service': {
    cover: {
      src: '/images/blog/haas-cover.jpg',
      alt: 'Mão de luva azul entregando um celular com aplicativo de saúde a outra mão, sobre fundo azul',
      credit: px('person-wearing-latex-gloves-holding-smartphone', 'Artem Podrez', 6823569),
    },
    inline: {
      src: '/images/blog/haas-inline.jpg',
      alt: 'Monitor de eletrocardiograma em foco raso',
      credit: px('shallow-focus-of-electrocardiogram', 'Stephen Andrews', 9408871),
    },
  },
  'white-label-telemedicina': {
    cover: {
      src: '/images/blog/white-label-cover.jpg',
      alt: 'Mãos segurando um celular com gráficos de um aplicativo de saúde',
      credit: px('close-up-of-a-person-looking-at-a-chart-on-the-smartphone', 'Nutrisense Inc', 17947753),
    },
    inline: {
      src: '/images/blog/white-label-inline.jpg',
      alt: 'Estetoscópio azul ao lado de um celular sobre uma superfície branca',
      credit: px('silver-iphone-6-near-blue-and-silver-stethoscope', 'Negative Space', 48603),
    },
  },
  'nr-1-saude-mental-telemedicina': {
    cover: {
      src: '/images/blog/nr1-cover.jpg',
      alt: 'Mulher meditando de pernas cruzadas sobre a mesa em um escritório moderno',
      credit: px('young-woman-meditating-in-modern-office-setting', 'Vitaly Gariev', 39219426),
    },
    inline: {
      src: '/images/blog/nr1-inline.jpg',
      alt: 'Mesa clara de escritório com planta, vaso com flor e notebook',
      credit: px('potted-plant-and-flower-vase-near-laptop', 'Cup of Couple', 8473794),
    },
  },
}
