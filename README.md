# Grupo Telemed · Hub Saúde

Site institucional do Grupo Telemed. React 18, Vite, React Router, Motion e Lenis.
Identidade visual: [Manual Visual v1.0](docs/manual-visual.html). Arquitetura: [documento de arquitetura](docs/arquitetura-do-site.docx).
Design e decisões: [spec do site](docs/superpowers/specs/2026-11-12-grupo-telemed-site-design.md).

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

O deploy precisa reescrever qualquer rota para `index.html` (SPA). Já estão incluídos `vercel.json` e `public/_redirects` (Netlify e Cloudflare Pages).

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Hero, manifesto, pilares, infraestrutura, soluções, implantação, programas, blog, FAQ |
| `/quem-somos` | Posicionamento, atuação, telemedicina, referências regulatórias, marcas do grupo |
| `/solucoes` | Mercados público e privado e cinco soluções |
| `/como-funciona` | Implantação em quatro etapas e jornada do paciente |
| `/programas-de-saude`, `/programas-de-saude/:slug` | Sete programas e a página de cada um |
| `/blog`, `/blog/:slug` | Artigos com filtro por categoria |
| `/contato` | Formulário, canais e FAQ |
| `/perguntas-frequentes` | FAQ completo |

## Onde editar o conteúdo

Todo texto fica em `src/data`, sem tocar em componentes.

| Arquivo | O que controla |
|---|---|
| `site.js` | Menu, contato, marcas do grupo, referências regulatórias, pilares, especialidades |
| `programs.js` | Os sete programas: textos, público, passos, cor |
| `solutions.js` | Soluções, quatro etapas de implantação, jornada do paciente |
| `faq.js` | Perguntas e respostas |
| `posts.js` | Artigos do blog |
| `photos.js` | Fotos do blog (capa e foto no texto de cada artigo) e seus créditos |

## Fotos do blog

Cada artigo tem uma capa e uma foto dentro do texto, do Pexels, em `public/images/blog`. Os créditos aparecem em legenda sob a foto e estão em [docs/creditos-das-imagens.md](docs/creditos-das-imagens.md).

## Foto do hero

O hero da home usa duas fotos, sem degradê nem filtro: `public/images/hero.webp` (horizontal, desktop e tablet) e `public/images/hero-mobile.webp` (vertical, até 760 px de largura). No desktop o texto fica em uma barra sólida no canto inferior direito. No celular ele fica centralizado e em branco no topo da foto, sobre uma camada escura suave que termina antes das cabeças, e o cabeçalho vira uma barra branca. Para trocar, substitua os arquivos. A horizontal deve ser 16:9, de preferência com 2400 px de largura, com o canto inferior direito sem rosto, mão ou objeto importante. A vertical deve ser cerca de 9:19, com o terço superior vazio (parede clara) para receber o título. Os caminhos e o texto alternativo ficam em `HERO_IMAGE`, em `src/data/site.js`.
O prompt para gerar uma foto própria, com as especificações, está em [docs/prompt-imagem-hero.md](docs/prompt-imagem-hero.md).

## Formulário de contato

Sem back-end. Se a variável `VITE_CONTACT_ENDPOINT` existir (veja `.env.example`), o formulário envia um `POST` em JSON para ela (Formspree, Make, n8n ou API própria). Sem a variável, abre o app de e-mail do usuário com a mensagem preenchida para o endereço de `CONTACT.email`.

## Sistema visual

- Tokens do manual em `src/styles/tokens.css`. Os oito azuis não devem ser alterados.
- Cada `<section>` escolhe um tema (`theme-light`, `theme-alt`, `theme-dark`) e usa as variáveis `--c-*`.
- `data-nav="dark|light"` na seção diz ao cabeçalho qual tom assumir enquanto ela passa por baixo.
- Símbolo animado: `src/components/brand/PetalSymbol.jsx`. Arte gerada a partir da pétala: `PetalArt.jsx`.
- Movimento respeita `prefers-reduced-motion`: sem rolagem suave, cursor, abertura nem transição de página.

## Pendências antes de publicar

- [ ] Trocar os dados de contato provisórios em `src/data/site.js` (e-mail, telefone, WhatsApp, endereço).
- [ ] Definir o endpoint do formulário ou confirmar o e-mail de destino.
- [ ] Validar com o jurídico e o clínico os textos de Soluções, Programas, FAQ e Blog (são rascunhos).
- [ ] Criar Política de Privacidade e Termos de Uso e linkar no rodapé.
- [ ] O documento de arquitetura cita "05 Programas de Saúde" e lista sete. O site conta a lista (sete).
- [ ] Revisar os artigos de exemplo do blog antes de publicar.
