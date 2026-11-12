# Prompt da imagem do hero

A foto do hero fica em `public/images/hero.webp`. Ela cobre o hero inteiro, sem degradê nem filtro, e o título fica em uma barra sólida no canto inferior direito.
Para trocar, gere a imagem com o prompt abaixo e salve por cima desse arquivo. Nada mais precisa mudar.

## Prompt (português)

```
Fotografia editorial realista, formato 16:9, de uma mulher latina de cerca de 35 anos, sorridente e relaxada, sentada de pernas cruzadas em um sofá de tecido cinza-claro, em uma sala de estar aconchegante e luminosa. Ela segura um smartphone com uma das mãos e acena com a outra, em uma videochamada com seu médico, usando um fone de ouvido sem fio em uma orelha. Cabelo escuro preso em coque solto, camisa de linho verde-água aberta sobre regata branca, jeans claro, descalça. A tela do celular não aparece para a câmera.

Cenário: janela com cortina de voal à esquerda, planta grande de folhas largas em vaso de cerâmica, luminária de piso com tripé de madeira, quadro abstrato claro na parede, prateleira com livros e uma vela acesa ao fundo, xícara de cerâmica sobre a mesa de centro em primeiro plano.

Composição: a pessoa ocupa o centro-direita do quadro, com bastante espaço livre acima da cabeça. O canto inferior direito fica coberto por uma barra de texto, então deixe essa área sem rosto, mão ou objeto importante. Sem objetos importantes cortados nas bordas.

Luz natural suave de janela, sombras delicadas, contraste moderado. Lente 50mm f/2.0, profundidade de campo rasa, nitidez no rosto e na mão, fundo levemente desfocado. Temperatura de cor ligeiramente fria, com azul-petróleo e azul-água nas sombras e nos reflexos, bege e cinza neutros, verde da planta dessaturado, pele natural.

Estilo de banco de imagens premium: acolhedor, humano e confiável. Sem texto, sem logotipos, sem marcas visíveis no aparelho, sem aparência de ilustração.
```

Prompt negativo, se a ferramenta aceitar:

```
texto, letras, logotipo, marca d'água, mãos deformadas, dedos extras, rosto distorcido, pele plástica, olhos desalinhados, mais de uma pessoa, tela do celular visível, saturação exagerada, HDR exagerado, aparência de ilustração ou renderização 3D
```

## Versão em inglês (Midjourney, Flux, Imagen)

```
Realistic editorial photograph, 16:9, of a Latina woman in her mid-30s, smiling and relaxed, sitting cross-legged on a light gray fabric sofa in a bright, cozy living room. She holds a smartphone in one hand and waves with the other, on a video call with her doctor, wearing a single wireless earbud. Dark hair in a loose bun, sage-green linen shirt open over a white tank top, light jeans, barefoot. The phone screen is not visible to the camera.

Setting: sheer curtain window on the left, large broad-leaf plant in a ceramic pot, wooden tripod floor lamp, light abstract framed art on the wall, bookshelf with books and a lit candle in the background, ceramic mug on the coffee table in the foreground.

Composition: the subject sits center-right with generous empty space above the head. The bottom-right corner will be covered by a text bar, so keep that area free of faces, hands or important objects. No important objects cut off at the edges.

Soft natural window light, gentle shadows, moderate contrast. 50mm lens, f/2.0, shallow depth of field, sharp on face and hand, softly blurred background. Slightly cool color temperature, teal and aqua blue in shadows and highlights, neutral beige and gray, desaturated plant green, natural skin.

Premium stock photography style: warm, human, trustworthy. No text, no logos, no visible brand marks on the device, no illustration look. --ar 16:9
```

## Especificações

| Item | Valor |
|---|---|
| Proporção | 16:9 (cobre o hero inteiro) |
| Tamanho | 2400 px de largura ou mais |
| Formato final | WebP, até 250 KB |
| Arquivo | `public/images/hero.webp` |
| Sujeito | Centro-direita, cabeça com espaço acima |
| Canto inferior direito | Sem rosto, mão ou objeto importante: uma barra de texto cobre essa área |
| Bordas | Sem objetos importantes cortados, a imagem não leva degradê nem filtro por cima |

No celular a foto é recortada para 5:4, mantendo o centro. Deixe os assuntos principais na faixa central, entre 18% e 82% da largura.

## Imagem do celular (vertical)

O hero no celular usa `public/images/hero-mobile.webp`. A foto vertical atual tem 862 × 1824 px (cerca de 9:19).

Peça a mesma cena do prompt acima, trocando o enquadramento:

```
Mesma cena, em formato vertical 9:19 (retrato de celular). O terço superior da imagem é uma parede lisa, clara e uniforme, com luz suave e sem objetos, para receber um título em texto escuro. As pessoas, o sofá e a mesa de centro ocupam a metade inferior. Janela com cortina de voal apenas na borda esquerda, bem estreita. Sem objetos importantes cortados nas bordas.
```

| Item | Valor |
|---|---|
| Proporção | Cerca de 9:19 (a altura do hero acompanha a da foto) |
| Topo | Parede clara e lisa, sem objetos, em pelo menos 40% da altura |
| Cabeças | Abaixo de 45% da altura da imagem |
| Borda esquerda | Evite áreas escuras (janela, vegetação), o texto é centralizado mas pode chegar perto |
| Formato final | WebP, até 250 KB, 1080 px de largura ou mais |
