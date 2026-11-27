import { PHOTOS } from './photos.js'

/* Artigos de exemplo. Rascunhos para validação jurídica e clínica antes de publicar.
   Blocos: { t: 'p' | 'h2' | 'quote', c } e { t: 'ul', items }. As fotos vêm de photos.js. */

export const POST_CATEGORIES = ['Institucional', 'Regulação', 'Governança de dados', 'Gestão em Saúde', 'Soluções', 'Programas']

const RAW_POSTS = [
  {
    slug: 'airton-moraes-experiencia-farma-confianca-saude-digital',
    title: 'Airton Moraes: experiência farma e confiança na saúde digital',
    excerpt:
      'Conheça a trajetória de Airton Moraes, VP Comercial do Grupo Telemed Hub Saúde, que une 35 anos de mercado ao cuidado integrado em telemedicina.',
    category: 'Institucional',
    date: '2026-11-27',
    cover: { variant: 'orbit', tones: ['abismo', 'profundo', 'oceano', 'agua'], rotate: 0 },
    body: [
      { t: 'p', c: 'No universo das healthtechs, fala-se muito sobre plataformas, algoritmos e escala. Porém, a tecnologia só transforma a saúde de verdade quando conquista a confiança de quem cuida na ponta e garante que o paciente conclua o seu tratamento.' },
      { t: 'p', c: 'É exatamente nesse ponto de encontro entre inovação e credibilidade assistencial que atua Airton Moraes, Diretor Comercial e Vice-Presidente Comercial do Grupo Telemed Hub Saúde.' },
      { t: 'h2', c: 'Três décadas de vivência na saúde brasileira' },
      { t: 'img', src: '/images/diretoria/airton-moraes.jpg', alt: 'Airton Moraes, Diretor e Vice-Presidente Comercial do Grupo Telemed Hub Saúde', pos: '50% 6%', caption: 'Airton Moraes, Diretor e Vice-Presidente Comercial' },
      { t: 'p', c: 'Com mais de 35 anos de trajetória na área comercial — sendo 32 deles dedicados à indústria farmacêutica —, Airton construiu uma carreira pautada pelo planejamento de mercado, pela formação de equipes e pelo diálogo ético com médicos e instituições no Sudeste brasileiro.' },
      { t: 'p', c: 'Essa bagagem traz para a saúde digital uma leitura madura sobre como o setor realmente funciona. Em vez de tratar a consulta online como um evento isolado, sua visão conecta a tecnologia à realidade clínica e regulatória do país.' },
      { t: 'h2', c: 'Os três pilares da liderança comercial' },
      { t: 'p', c: 'A atuação de Airton Moraes sustenta a expansão previsível e responsável do Grupo a partir de três frentes interdependentes:' },
      { t: 'ul', items: [
        'Conexão genuína com a classe médica: décadas de liderança comercial permitem compreender as necessidades reais dos médicos, fortalecendo a rede assistencial, a autonomia clínica e a adesão segura aos protocolos digitais.',
        'Visão integrada da jornada do paciente: o domínio da cadeia de saúde e medicamentos potencializa soluções como o Programa de Benefícios em Medicamentos (PBM), assegurando continuidade no cuidado após a teleconsulta.',
        'Inteligência comercial e gestão de demanda: experiência consolidada na estruturação de canais e no desenvolvimento de equipes comerciais de alta performance, gerando crescimento sustentável e previsível para o Grupo e seus parceiros.',
      ] },
      { t: 'quote', c: 'Tecnologia de ponta só transforma a saúde quando conquista a confiança de quem cuida e garante continuidade no tratamento do paciente.' },
      { t: 'h2', c: 'Do diagnóstico ao acesso ao medicamento' },
      { t: 'img', src: '/images/blog/airton-medicamento.jpg', alt: 'Mulher em casa tomando o medicamento prescrito, com o celular sobre a mesa' },
      { t: 'p', c: 'Um dos maiores desafios da saúde no Brasil não termina na orientação médica, mas começa na hora em que o paciente precisa iniciar o tratamento prescrito. Quando o acesso ao medicamento esbarra em custos ou burocracia, o cuidado se interrompe.' },
      { t: 'p', c: 'Ao integrar a telemedicina 24 horas ao Programa de Benefícios em Medicamentos (PBM), o modelo apoiado pela experiência de Airton ajuda empresas, operadoras e famílias a fechar esse ciclo — reduzindo agravamentos evitáveis e promovendo o bem-estar coletivo.' },
      { t: 'h2', c: 'Solidez para crescer em mercados exigentes' },
      { t: 'p', c: 'Unir a agilidade da saúde digital à disciplina construída ao longo de mais de três décadas na indústria farmacêutica permite ao Grupo Telemed Hub Saúde dialogar de igual para igual com grandes corporações, operadoras e redes parceiras.' },
      { t: 'p', c: 'Mais do que abrir novos canais comerciais, essa liderança garante que a expansão aconteça com ética, respeito aos profissionais de saúde e impacto real na vida das pessoas.' },
    ],
  },
  {
    slug: 'gender-moreira-expansao-etica-saude-digital',
    title: 'Gender Moreira e a expansão ética da saúde digital no Brasil',
    excerpt:
      'Conheça a visão de Gender Moreira, Diretor-Presidente Fundador do Grupo Telemed Hub Saúde, para expandir a saúde digital com ética, governança e escala.',
    category: 'Institucional',
    date: '2026-11-25',
    cover: { variant: 'rosette', tones: ['abismo', 'profundo', 'petroleo', 'ceu'], rotate: 0 },
    body: [
      { t: 'p', c: 'Toda mudança relevante na saúde nasce de uma pergunta prática e humana: como ampliar o cuidado médico onde ele ainda não chega com suficiência, mantendo a sustentabilidade do negócio? Foi a partir desse questionamento que Gender Moreira estruturou a atuação do Grupo Telemed Hub Saúde.' },
      { t: 'p', c: 'Como Diretor-Presidente Fundador, ele conduz o desenvolvimento de negócios e a expansão nacional da companhia. O foco não é apenas ampliar números, mas construir pontes comerciais éticas, consistentes e adaptáveis às diferentes realidades regionais do Brasil.' },
      { t: 'h2', c: 'O desafio de escalar com responsabilidade' },
      { t: 'p', c: 'A saúde digital avançou rapidamente ao aproximar pacientes de orientações médicas e reduzir gargalos de acesso. Porém, crescer nesse setor exige mais do que software ou velocidade de implantação.' },
      { t: 'p', c: 'É preciso equilibrar inovação tecnológica, conformidade regulatória e confiança assistencial. Sem governança médica clara, respeito às normas do CFM, ANVISA e LGPD e compromisso com o cuidado, qualquer expansão perde consistência.' },
      { t: 'h2', c: 'Modelos que conectam parceiros e pacientes' },
      { t: 'img', src: '/images/blog/gender-familia.jpg', alt: 'Mãe sentada no sofá de casa com a filha, usando o celular' },
      { t: 'p', c: 'A liderança de Gender Moreira articula a visão estratégica da companhia a frentes complementares que atendem tanto a parceiros institucionais quanto à população:' },
      { t: 'ul', items: [
        'Ecossistema White Label (Marca Própria): grupos empresariais, operadoras, redes de clínicas e instituições lançam operações de telemedicina com tecnologia, corpo clínico 24/7 e rigor normativo, preservando 100% da própria marca e do vínculo com seus clientes.',
        'Saúde Corporativa (B2B): soluções voltadas ao bem-estar das equipes como eixo estratégico de produtividade, retenção de talentos e redução do absenteísmo evitável.',
        'Saúde Cliente (B2C): acesso ágil e preventivo à orientação médica, encurtando distâncias geográficas e integrando o cuidado à rotina das famílias.',
      ] },
      { t: 'quote', c: 'Tecnologia, governança médica e rentabilidade precisam caminhar juntas para gerar valor real aos parceiros e ampliar o cuidado às famílias.' },
      { t: 'h2', c: 'Negócios sustentáveis e impacto social' },
      { t: 'img', src: '/images/blog/gender-interior.jpg', alt: 'Senhor na varanda de uma casa no interior em teleconsulta pelo celular com uma médica' },
      { t: 'p', c: 'Em um país de dimensões continentais e realidades tão diversas, aproximar o cuidado qualificado da ponta exige modelos replicáveis e financeiramente saudáveis. Quando um parceiro encontra um caminho seguro para operar, ele ganha condições de atender melhor sua comunidade.' },
      { t: 'p', c: 'Na prática, esse desenho favorece a prevenção, reduz idas evitáveis a serviços de emergência e alivia a pressão sobre estruturas locais de saúde. O ganho se divide entre empresas que operam com previsibilidade e cidadãos que passam a contar com atendimento mais humano e contínuo.' },
      { t: 'h2', c: 'Uma liderança voltada ao longo prazo' },
      { t: 'p', c: 'Sob a presidência de Gender Moreira, o Grupo Telemed Hub Saúde busca consolidar um ecossistema em que viabilidade econômica e interesse público se reforcem mutuamente. Cada parceria é pensada para gerar retorno sustentável sem abrir mão da ética clínica.' },
      { t: 'p', c: 'Acompanhe os conteúdos do Grupo para aprofundar como a saúde digital pode evoluir com responsabilidade, clareza e impacto concreto na vida das pessoas em todo o país.' },
    ],
  },
  {
    slug: 'pilares-saude-digital-grupo-telemed',
    title: 'Pilares da saúde digital: como opera o Grupo Telemed Hub Saúde',
    excerpt:
      'Conheça os quatro pilares do Grupo Telemed Hub Saúde: tecnologia, inovação, inteligência de dados anonimizados e governança ética na telemedicina.',
    category: 'Institucional',
    date: '2026-11-23',
    cover: { variant: 'cross', tones: ['abismo', 'profundo', 'petroleo', 'ceu'], rotate: 0 },
    body: [
      { t: 'p', c: 'A saúde digital ganha cada vez mais relevância no debate público e corporativo no Brasil. Os avanços tecnológicos permitem ampliar o acesso médico, personalizar o cuidado, otimizar recursos e trazer eficiência operacional para empresas e instituições.' },
      { t: 'p', c: 'Entretanto, crescer nesse segmento exige equilibrar a velocidade da inovação com rigor clínico e regulatório. O Grupo Telemed Hub Saúde responde a esse desafio reunindo diferentes frentes estratégicas na mesma mesa de decisão para sustentar uma operação ética e escalável.' },
      { t: 'h2', c: 'Tecnologia e inovação centradas no cuidado' },
      { t: 'img', src: '/images/blog/pilares-tecnologia.jpg', alt: 'Dois profissionais de tecnologia revisando a interface de uma plataforma de telemedicina no monitor' },
      { t: 'p', c: 'Escalar atendimentos remotos exige muito mais do que um aplicativo funcional. Na frente de Tecnologia que aproxima, lideranças especializadas desenvolvem e evoluem plataformas próprias e soluções White Label com arquitetura estável e disponibilidade integral, conectando médicos, pacientes e parceiros sem atritos.' },
      { t: 'p', c: 'Complementando essa base, o pilar de Inovação para o futuro da saúde transforma demandas reais do mercado em portfólio prático. Das operações White Label a programas integrados como o Programa de Benefícios em Medicamentos (PBM), as soluções nascem prontas para operar com previsibilidade e continuidade assistencial.' },
      { t: 'h2', c: 'Inteligência de dados com rigoroso sigilo' },
      { t: 'img', src: '/images/blog/pilares-dados.jpg', alt: 'Analista concentrada acompanhando indicadores no computador' },
      { t: 'p', c: 'Tomar boas decisões na gestão de saúde depende de enxergar o cenário com clareza e responsabilidade. No pilar de Inteligência de Dados, análises estatísticas e gestão por indicadores convertem registros operacionais em insumos estratégicos para o acompanhamento da operação.' },
      { t: 'p', c: 'Por meio de rigorosa anonimização — respeitando integralmente a privacidade do paciente —, empresas e operadoras conseguem acompanhar índices de sinistralidade, identificar perfis crônicos ou sensíveis e planejar ações preventivas com base em evidências reais.' },
      { t: 'h2', c: 'Governança, compliance e ética médica' },
      { t: 'p', c: 'Nenhuma operação digital se sustenta sem segurança jurídica e respeito à prática clínica. Sob o pilar de Governança e Ética Médica, profissionais com vivência em gestão clínica e compliance asseguram que protocolos, prontuários e fluxos cumpram as resoluções do CFM e a LGPD.' },
      { t: 'p', c: 'Esse cuidado protege o sigilo dos dados sensíveis, garante a autonomia soberana dos médicos na condução de cada consulta e blinda a reputação institucional de empresas, clínicas e operadoras parceiras.' },
      { t: 'quote', c: 'Escalar atendimentos digitais exige mais do que software: pede confiança com quem contrata e cuidado contínuo com quem é atendido.' },
      { t: 'h2', c: 'Um ecossistema integrado para o bem comum' },
      { t: 'p', c: 'No Grupo Telemed Hub Saúde, cada entrega nasce do encontro entre viabilidade tecnológica, leitura precisa de dados, visão de mercado e rigor jurídico. Quando esses quatro pilares caminham juntos, a tecnologia deixa de ser apenas ferramenta e passa a ampliar o acesso digno à saúde pelo país.' },
      { t: 'p', c: 'Para empresários, gestores, corretores, proprietários de clínicas, operadoras ou associações que buscam solidez e conformidade para atuar na saúde digital, conhecer essa estrutura é o primeiro passo para parcerias duradouras.' },
    ],
  },
  {
    slug: 'telemedicina-porto-alegre-instituto-caldeira',
    title: 'Telemedicina chega a Porto Alegre no Instituto Caldeira',
    excerpt:
      'Grupo Telemed Hub Saúde inaugura unidade no Instituto Caldeira em Porto Alegre, com Mila Genari à frente da expansão, foco White Label e cuidado 24/7.',
    category: 'Institucional',
    date: '2026-11-20',
    cover: { variant: 'trio', tones: ['profundo', 'petroleo', 'oceano', 'agua'], rotate: 0 },
    body: [
      { t: 'p', c: 'Com matriz em Vitória (ES), o Grupo Telemed Hub Saúde amplia sua presença regional ao inaugurar uma nova unidade dentro do Instituto Caldeira, em Porto Alegre. O movimento marca uma etapa relevante de aproximação com o ecossistema de inovação, empreendedorismo e negócios do Sul do país.' },
      { t: 'p', c: 'A escolha do espaço reflete uma afinidade de propósito. O Instituto Caldeira reúne empresas, startups, universidades e investidores em torno da colaboração e da tecnologia — valores que orientam a atuação do Grupo na transformação da saúde digital com responsabilidade.' },
      { t: 'h2', c: 'Por que o Instituto Caldeira importa' },
      { t: 'p', c: 'Expandir a saúde digital exige diálogo constante entre tecnologia, gestão e realidades locais. Em um ambiente aberto à troca entre diferentes setores, torna-se mais natural construir parcerias alinhadas às necessidades práticas de clínicas, operadoras, corretoras e organizações.' },
      { t: 'p', c: 'Para o Grupo, estar presente no hub gaúcho facilita conversas diretas sobre modelos de atendimento, governança e sustentabilidade, evitando soluções padronizadas que não consideram as particularidades de cada região ou operação.' },
      { t: 'h2', c: 'O que é apresentado no espaço' },
      { t: 'img', src: '/images/blog/porto-alegre-apresentacao.jpg', alt: 'Executiva apresentando a plataforma de telemedicina para empresários em uma sala de reunião' },
      { t: 'p', c: 'Na nova unidade, visitantes e parceiros conhecem de perto como a estrutura do Grupo apoia iniciativas de saúde digital com segurança e organização:' },
      { t: 'ul', items: [
        'Solução White Label: estrutura para empresas operarem telemedicina com identidade própria e suporte especializado.',
        'Atendimento 24/7 e especialidades: disponibilidade contínua com mais de 30 especialidades médicas.',
        'Apoio à continuidade do cuidado: liberação automática de saldo para ampliar a possibilidade real de seguir o tratamento prescrito.',
        'Segurança e agilidade: fluxos desenhados para oferecer atendimento confiável, ético e sem burocracia desnecessária.',
      ] },
      { t: 'h2', c: 'Presença da liderança e diálogo regional' },
      { t: 'img', src: '/images/diretoria/mila-genari.jpg', alt: 'Mila Genari, Diretora de Estratégias & Expansão do Grupo Telemed Hub Saúde', pos: '50% 12%', caption: 'Mila Genari, sócia e Diretora de Estratégias & Expansão' },
      { t: 'p', c: 'A operação na capital gaúcha conta com a presença da sócia e Diretora de Estratégias & Expansão, Mila Genari, disponível para receber empresários, gestores e lideranças que desejam conhecer o modelo de atuação e trocar experiências pessoalmente.' },
      { t: 'p', c: 'Segundo Mila, estar em Porto Alegre dentro de um ambiente de inovação como o Instituto Caldeira aproxima a equipe de gestores e clínicas que buscam modernizar processos sem abrir mão da própria marca nem da qualidade assistencial.' },
      { t: 'quote', c: 'Estar em um polo de inovação aproxima a saúde digital de quem busca modernizar operações mantendo a própria identidade e o rigor no cuidado.' },
      { t: 'p', c: 'A expansão para o Sul também reforça a visão de pluralidade territorial: levar saúde digital bem estruturada a diferentes regiões ajuda a encurtar distâncias, qualificar a jornada do paciente e apoiar iniciativas locais de cuidado contínuo.' },
      { t: 'h2', c: 'Como conversar com a equipe' },
      { t: 'p', c: 'Clínicas, operadoras, corretoras, associações e empresas interessadas em conhecer a proposta de saúde digital com marca própria podem visitar o espaço no Instituto Caldeira ou entrar em contato direto com a liderança.' },
      { t: 'p', c: 'O atendimento pode ser feito pelo e-mail mila@grupotelemed.com.br ou pelo WhatsApp (51) 98573-7430, abrindo espaço para esclarecer dúvidas técnicas, regulatórias e operacionais com transparência.' },
    ],
  },
  {
    slug: 'telemedicina-white-label-marca-propria',
    title: 'Telemedicina White Label: como expandir com marca própria',
    excerpt:
      'Entenda como o modelo White Label une tecnologia, atendimento 24/7, PBM e governança para levar saúde digital com segurança e impacto social.',
    category: 'Soluções',
    date: '2026-11-17',
    cover: { variant: 'orbit', tones: ['profundo', 'petroleo', 'oceano', 'ceu'], rotate: 0 },
    body: [
      { t: 'p', c: 'O mercado brasileiro de saúde digital abre caminhos consistentes para empresas que desejam ampliar sua atuação, diversificar receitas e gerar valor real. Mais do que lançar um novo produto, expandir na saúde exige unir sustentabilidade empresarial, rigor regulatório e compromisso com o cuidado humano.' },
      { t: 'p', c: 'Nesse cenário, o modelo White Label do Grupo Telemed Hub Saúde permite que empresas operem sua própria telemedicina com identidade visual própria, apoiadas por uma infraestrutura clínica, tecnológica e operacional já estruturada.' },
      { t: 'h2', c: 'Estrutura completa para operar com segurança' },
      { t: 'img', src: '/images/blog/white-label-expansao-24h.jpg', alt: 'Médica com fone de ouvido em teleconsulta à noite, atendimento 24 horas' },
      { t: 'p', c: 'Uma operação digital séria depende de bases sólidas desde o primeiro dia. A estrutura oferecida reúne frentes essenciais para sustentar o crescimento do parceiro sem improvisos:' },
      { t: 'ul', items: [
        'Atendimento 24/7 e especialidades: médicos disponíveis dia e noite, com mais de 30 especialidades para acolher diferentes demandas.',
        'Identidade da sua marca: plataforma personalizada que fortalece o vínculo do parceiro com seus clientes ou beneficiários.',
        'Governança clínica e suporte: acompanhamento operacional e diretrizes alinhadas às normas do CFM, da ANVISA e da LGPD.',
        'Indicadores e gestão comercial: acesso a dados anonimizados para gestão, além de estrutura para organização de consultores e comissões.',
      ] },
      { t: 'h2', c: 'Integração com PBM e continuidade do cuidado' },
      { t: 'img', src: '/images/blog/white-label-expansao-pbm.jpg', alt: 'Farmacêutica entregando medicamento a uma paciente com a receita digital no celular' },
      { t: 'p', c: 'Um atendimento médico ganha ainda mais efetividade quando o paciente consegue dar sequência ao tratamento prescrito. Por isso, a solução pode integrar o Programa de Benefícios em Medicamentos (PBM).' },
      { t: 'p', c: 'Por meio do aplicativo, o usuário recebe saldo automático para adquirir medicamentos prescritos nas consultas da plataforma, abrangendo genéricos, similares e de marca. A integração conta com rede credenciada em todo o Brasil, incluindo Drogasil, Pague Menos e Panvel.' },
      { t: 'p', c: 'Ao facilitar o acesso responsável a medicamentos após a orientação médica, a iniciativa reduz barreiras financeiras e ajuda a evitar a interrupção de tratamentos, fortalecendo a adesão clínica e o bem-estar das famílias.' },
      { t: 'quote', c: 'Expandir em saúde digital exige união entre viabilidade de negócio, rigor ético e cuidado que alcança quem mais precisa na ponta.' },
      { t: 'h2', c: 'Negócio sustentável e impacto no bem comum' },
      { t: 'p', c: 'A expansão da saúde digital em um país de dimensões continentais como o Brasil também cumpre um papel social relevante. Quando empresas, clínicas, operadoras, associações e corretores levam atendimento qualificado a novas regiões, encurtam-se distâncias e reduz-se a sobrecarga sobre serviços presenciais.' },
      { t: 'p', c: 'Empreender nesse segmento pede equilíbrio constante entre viabilidade econômica e responsabilidade pública. Respeitar o sigilo dos dados sensíveis, a autonomia médica e a realidade de cada território transforma a expansão comercial em benefício coletivo.' },
      { t: 'h2', c: 'Caminhos para empreender com responsabilidade' },
      { t: 'p', c: 'Se você é empresário, gestor, corretor, dono de clínica, operadora ou associação e avalia expandir na saúde digital, conhecer os fundamentos do modelo White Label ajuda a tomar decisões mais seguras.' },
      { t: 'p', c: 'Com a combinação de tecnologia, governança, integração a medicamentos e visão de longo prazo, o Grupo Telemed Hub Saúde apoia parceiros que desejam crescer mantendo sua identidade e servindo melhor à sociedade.' },
    ],
  },
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

/* Junta as fotos: capa em `image`. Se photos.js tiver `inline`, ela entra depois do primeiro parágrafo;
   artigos com várias imagens podem pôr blocos { t: 'img', src, alt } direto no body, onde quiserem. */
export const POSTS = RAW_POSTS.map((p) => {
  const ph = PHOTOS[p.slug]
  if (!ph) return p
  return {
    ...p,
    image: ph.cover,
    body: ph.inline ? [p.body[0], { t: 'img', ...ph.inline }, ...p.body.slice(1)] : p.body,
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
