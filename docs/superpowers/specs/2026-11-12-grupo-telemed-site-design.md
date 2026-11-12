# Site Grupo Telemed · Hub Saúde — design

Data: 12/11/2026 · Caminho: arquitetural (projeto novo) · Idioma: pt-BR

## 1. Entendimento

**O que foi pedido.** Um site institucional novo para o Grupo Telemed · Hub Saúde, em pasta própria, para subir em um repositório novo. A estrutura vem do documento de arquitetura. A identidade vem do manual visual. O site deve parecer profissional e inovador, com grids em caixas, animação e UI/UX de alto padrão, sem copiar a Telemedicina 360.

**O que veio dos anexos (fato).**
- Menu: Quem somos, Soluções, Como funciona, Programas de Saúde, Blog, Contato. Mais um FAQ "a elaborar".
- Quem somos: plataforma de saúde digital, telemedicina, modelo HaaS, white label, franquias, mercados público e privado. Slogan: "Tecnologia que conecta. Saúde que transforma."
- Infraestrutura: plataforma própria, corpo clínico próprio, 24/7, +30 especialidades, programas de saúde, governança clínica, projetos personalizados, integrações, help desk, implantação personalizada.
- Programas: telemedicina, entrevista qualificada, projeto remoção, programas de suporte, TEA, e dois novos (psicologia clínica e agendamento presencial).
- Referências regulatórias: Lei 14.510/2022, Resolução CFM 2.314/2022, LGPD (Lei 13.709/2018).
- Inspiração de estrutura: vixhealth.com.br (Soluções, Como funciona, Contato, sem quadro comparativo) e lsxmedical.com.br (Programas de Saúde).
- Marca: 8 azuis, Inter, botões pílula, raios 999/28/16/10, sombras tingidas de Abismo, versões clara e negativa do logotipo.

**Suposições minhas.** Vite + React 18 + React Router (mesma base do repositório atual). Copy provisória onde o documento diz apenas "100% insight". Dados de contato provisórios. Sem back-end: o formulário usa um endpoint configurável e, sem ele, abre o e-mail do usuário.

## 2. Conceito criativo: "a cruz que se monta"

O símbolo tem quatro pétalas que se sobrepõem e formam a cruz da saúde. O texto da arquitetura também tem quatro pilares: tecnologia, inovação, inteligência de dados e governança. O site usa essa coincidência como sistema:

- **Pétala como unidade gráfica.** A folha do símbolo, girada e escalonada, gera ilustrações, capas de blog e fundos. Tudo sai da mesma forma, sempre nos oito azuis.
- **Pétala como navegação.** Na home, o símbolo é o controle de uma seção fixada: cada pilar acende uma pétala. Em Como funciona, as quatro etapas da implantação completam a cruz.
- **Sobreposição como assinatura.** Onde duas formas se cruzam, a cor muda, como no logotipo. Isso guia cartões, capas e transições.

## 3. Sistema visual

- Tokens do manual, sem alterar nenhum hex. Seções alternam Abismo, branco e Fundo Alternativo.
- Assinatura tipográfica do manual (800 em cima, 400 apagado embaixo) vira o padrão dos títulos.
- Grids em caixas (bento) com raio 28/16/10, borda Linha e sombra do manual. Cartões com spotlight que segue o cursor.
- Hero escuro com gradiente Profundo, brilho Água que segue o ponteiro e malha de cruzes revelada pelo cursor.
- Contraste: texto pequeno azul só em Petróleo ou Profundo no claro; Água e Gelo só no escuro.

## 4. Sistema de movimento

- Rolagem suave (Lenis). Revelações por palavra nos títulos. Texto-manifesto que acende conforme a rolagem.
- Símbolo que se monta: contorno desenha, pétalas entram, sobreposições fecham.
- Transição de página por quatro painéis em forma de pétala. Abertura com o símbolo uma vez por sessão.
- Botões magnéticos com preenchimento líquido. Anel de cursor discreto, sem esconder o cursor nativo.
- `prefers-reduced-motion`: sem Lenis, sem cursor, sem abertura, animações viram fade curto.

## 5. Mapa e seções

| Rota | Seções principais |
|---|---|
| `/` | Hero, faixa de palavras, manifesto, pilares (símbolo fixado), infraestrutura em bento, soluções, implantação em 4 etapas, programas em painéis expansíveis, blog, FAQ, chamada final |
| `/quem-somos` | Hero, manifesto, desenvolvemos·integramos·gerenciamos, atuação, pilares, telemedicina e infraestrutura, referências regulatórias, marcas do grupo |
| `/solucoes` | Hero, mercados público e privado, cinco soluções em blocos alternados, implantação, FAQ |
| `/como-funciona` | Hero, quatro etapas de implantação, jornada do paciente em celular interativo, FAQ |
| `/programas-de-saude` e `/programas-de-saude/:slug` | Painéis expansíveis com sete programas; página de detalhe de cada um |
| `/blog` e `/blog/:slug` | Destaque, filtro por categoria, grade; artigo com progresso de leitura |
| `/contato` | Formulário com perfil e interesse em chips, canais, consentimento LGPD |
| `/perguntas-frequentes` | FAQ completo por categoria |

## 6. Estrutura técnica

`src/styles` (tokens e base), `src/data` (todo o conteúdo editável), `src/components/{brand,ui,layout,sections}`, `src/pages`. Páginas carregadas sob demanda. Conteúdo fora dos componentes, para o cliente editar sem tocar em JSX.

## 7. Pendências conhecidas

- Dados de contato e e-mail de destino do formulário são provisórios (`src/data/site.js`).
- Textos de Soluções, Como funciona, Programas, FAQ e Blog são rascunhos a validar com o jurídico e o clínico.
- O documento cita "05 Programas de Saúde", mas lista sete. O site conta a lista (sete).
- Políticas de privacidade e termos ainda não existem.
