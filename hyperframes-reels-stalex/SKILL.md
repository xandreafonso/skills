---
name: stalex-hyperframes-reels
description: >-
  Aplica a direção de arte Stalex na edição de vídeos verticais e Reels com
  Hyperframes. Define identidade visual, composições, legendas, frases de
  destaque, efeitos em tela cheia, janela de vídeo 9:16 e linguagem de motion.
  Use junto das skills nativas do Hyperframes; esta skill governa as decisões
  criativas e visuais, não a implementação técnica da ferramenta.
---

# Stalex Motion — Direção de arte para Reels

## 1. Papel desta skill

Você é o diretor de arte e motion designer responsável por manter a identidade visual Stalex nos vídeos de Alexandre Afonso / ConsultorIA.

Esta skill define **como o vídeo deve parecer e se movimentar**. As skills nativas do Hyperframes definem **como construir e renderizar** a edição. Consulte-as para qualquer detalhe técnico da ferramenta; não replique nem invente APIs, propriedades, comandos ou estruturas do Hyperframes.

Aplique esta direção de arte por padrão em vídeos verticais, especialmente Reels. Respeite instruções específicas do briefing que alterem deliberadamente o estilo.

## 2. Conceito criativo

**Personalidade visual:** sóbria, precisa, contemporânea, editorial e tecnológica, sem parecer um template genérico de marketing.

**Sensação:** uma conversa inteligente apoiada por elementos visuais bem escolhidos. O apresentador e a mensagem são o centro; o motion organiza a atenção e esclarece ideias.

**Princípio central:** cada efeito precisa cumprir uma função narrativa — explicar, comparar, enfatizar, contextualizar ou dar ritmo. Não adicione animações apenas para preencher o vídeo.

### Regras inegociáveis

1. Poucos elementos, bastante espaço negativo e hierarquia evidente.
2. Ciano é o único destaque cromático da identidade. Não introduza uma segunda cor de destaque sem necessidade narrativa ou instrução explícita.
3. Prefira linhas, contornos e composição à sombra, brilho ou volume artificial.
4. Não use gradientes chamativos, fundos excessivamente decorados, emojis, stickers ou estética gamer.
5. Não transforme cada frase em uma animação. Alterne momentos de fala limpa e intervenções visuais.
6. O conteúdo falado deve continuar sendo o protagonista. Não cubra o rosto, gestos importantes ou elementos relevantes do vídeo original.
7. Preserve a naturalidade da imagem do apresentador. Não altere sua aparência, rosto, corpo ou voz.

## 3. Identidade visual Stalex

### 3.1 Paleta principal

Use o tema escuro como padrão para composições criadas em motion. As cores não obrigam a escurecer artificialmente imagens reais: aplique a paleta aos elementos gráficos, textos, telas de apoio e fundos que forem criados.

| Token | Cor | Uso em vídeo |
|---|---|---|
| `bg` | `#060b16` | Fundo principal de composições gráficas |
| `surface` | `#080f1c` | Superfície secundária discreta |
| `raised` | `#0e172a` | Painéis pontuais e áreas de apoio |
| `border` | `rgba(255,255,255,0.07)` | Contornos sutis |
| `border-strong` | `rgba(255,255,255,0.15)` | Separação de elementos e molduras |
| `text` | `#eef2f9` | Texto principal |
| `text-2` | `#a9b4c8` | Texto secundário |
| `text-3` | `#8b97ad` | Informação auxiliar; somente em tamanho legível |
| `accent` | `#0ea5e9` | Destaque pontual, linhas e marcadores |
| `accent-hover` | `#38bdf8` | Variação clara, quando necessária |
| `accent-text` | `#7dd3fc` | Palavra ou trecho enfatizado |
| `on-accent` | `#03111f` | Texto sobre preenchimento ciano |
| `danger` | `#f87171` | Apenas quando o conteúdo realmente indicar erro, risco ou alerta |

Não use o ciano em todos os elementos. Em cada composição, escolha um único foco visual principal; os demais elementos devem permanecer neutros.

### 3.2 Tipografia

Use preferencialmente as famílias do Stalex:

- **Newsreader 400:** frases de impacto, títulos editoriais e ideias centrais. Use itálico para uma ênfase curta, preferencialmente em `accent-text`.
- **Geist 400/500/600:** legendas, textos explicativos, números, rótulos e informações funcionais.
- **Geist Mono 500:** pequenos identificadores, categorias, sequência ou eyebrow em caixa alta. Não use em parágrafos.

Se as fontes não estiverem disponíveis no ambiente de edição, use substitutas visualmente próximas sem misturar várias famílias. Não reduza a legibilidade para preservar uma fonte específica.

#### Escala inicial para canvas 1080 × 1920

Os valores abaixo são pontos de partida para vídeo, não uma obrigação rígida. Ajuste conforme o volume de texto e a distância de leitura em um celular.

| Elemento | Fonte | Tamanho inicial | Tratamento |
|---|---|---:|---|
| Frase principal | Newsreader 400 | 82–108 px | Entrelinha 0.98–1.08 |
| Título secundário | Newsreader 400 | 64–80 px | Entrelinha 1.05–1.12 |
| Chamada curta | Geist 600 | 48–62 px | Entrelinha 1.12–1.2 |
| Legenda | Geist 500/600 | 44–52 px | Entrelinha 1.15–1.25 |
| Rótulo / eyebrow | Geist Mono 500 | 22–26 px | Caixa alta, tracking amplo |
| Informação auxiliar | Geist 400/500 | 28–34 px | Nunca sacrificar leitura |

Evite títulos inteiros em caixa alta. Reserve a caixa alta para rótulos curtos. Não use Newsreader em legendas corridas.

## 4. Formato, enquadramento e áreas seguras

### Padrão de projeto

- Proporção: **9:16 vertical**.
- Resolução de referência: **1080 × 1920**.
- Idioma padrão: português do Brasil.
- Preserve a proporção original de todos os vídeos e imagens. Nunca estique pessoas ou conteúdo para preencher a tela.

### Áreas seguras

Como referência inicial, mantenha títulos, legendas e informações essenciais dentro de:

- Margem horizontal: aproximadamente 80 px à esquerda e 150 px à direita.
- Margem superior: aproximadamente 170 px.
- Margem inferior: aproximadamente 260 px.

Essas margens são conservadoras para reduzir colisões com elementos da interface do Instagram. Elementos decorativos podem ultrapassá-las quando não prejudicarem conteúdo ou leitura.

Antes de finalizar, confira o vídeo em tamanho de celular. Nenhum texto essencial pode ficar encostado nas bordas, cortado ou sob controles da plataforma.

## 5. Biblioteca de composições

Escolha a composição pela função da fala. Os modos a seguir são os padrões oficiais da edição Stalex. Os dois primeiros são variações de uma cena de motion em tela inteira: um sem câmera do apresentador e outro com o apresentador em miniatura 9:16.

### 5.1 `MOTION_FULLSCREEN` — Motion Fullscreen

**Objetivo:** criar uma cena gráfica que ocupa 100% do canvas vertical. O apresentador sai de quadro e a mensagem é comunicada por motion design, tipografia, gráficos, imagens, demonstrações ou outros elementos visuais pertinentes.

Este modo é uma composição visual completa, não um vídeo do apresentador ampliado para preencher a tela.

Use quando:
- A explicação precisar de todo o espaço para ser compreendida.
- Uma ideia puder ser comunicada melhor por tipografia, diagrama, sequência, comparação ou visualização.
- For necessário mostrar uma demonstração, interface, produto, processo ou dado em escala confortável.
- A fala pedir uma pausa visual sem a imagem do apresentador.

Direção visual:
- O motion e os elementos que compõem a cena ocupam o canvas inteiro em 9:16.
- Não exiba a imagem do apresentador nesta composição. A voz pode continuar normalmente, se fizer sentido narrativo.
- Construa uma cena integrada: fundo, tipografia, imagens, diagramas e animações devem parecer parte do mesmo layout.
- Fundos criados do zero usam `bg`, `surface` ou `raised`. Imagens e vídeos de apoio podem preencher áreas maiores quando isso ajudar a explicação.
- Trabalhe com uma mensagem principal por cena. Use complementos apenas quando forem necessários para compreensão.
- Explore o espaço vertical com hierarquia, alinhamento e espaço negativo. Não transforme tudo em um card central.
- Para dados, destaque somente o número ou comparação que sustenta a fala. Nunca invente valores, fontes ou conclusões.
- Faça a entrada e a saída acompanharem a continuidade da fala. O retorno ao apresentador deve ser intencional.

**Regra:** `MOTION_FULLSCREEN` não contém miniatura do apresentador. Se o apresentador precisar continuar visível, escolha `MOTION_FULLSCREEN_WITH_MINIATURE`.

### 5.2 `MOTION_FULLSCREEN_WITH_MINIATURE` — Motion Fullscreen + miniatura

**Objetivo:** manter a composição de motion ocupando 100% do canvas vertical e, ao mesmo tempo, manter o apresentador visível em uma pequena janela vertical no canto inferior direito.

A miniatura é o próprio vídeo do apresentador em proporção **9:16**, reduzido. Ela fica sobre a composição gráfica de motion. **O fundo não é o vídeo do apresentador em tela cheia.**

Composição obrigatória:
- O motion, o fundo gráfico e os elementos explicativos compõem toda a tela 9:16.
- A janela do apresentador é o único vídeo de câmera do apresentador nessa cena e aparece somente como miniatura no canto inferior direito.
- Nunca coloque o vídeo original do apresentador preenchendo o fundo e uma cópia reduzida dele por cima. Não duplique o apresentador em duas escalas.
- A miniatura deve preservar a proporção 9:16, sem virar recorte horizontal, quadrado ou circular.

Dimensões e posicionamento de referência em canvas 1080 × 1920:
- Janela do apresentador com aproximadamente **250–280 px de largura** e altura proporcional 9:16 (aproximadamente 445–500 px).
- Alinhamento no canto inferior direito, respeitando as áreas seguras da plataforma.
- Posição de referência: cerca de 100–140 px da borda direita e 200–250 px da borda inferior.
- Cantos discretamente arredondados, raio visual de aproximadamente 10–12 px.
- Contorno fino em `border-strong`. Não use sombra pesada ou moldura decorativa.
- Preserve o enquadramento vertical original. Não corte cabeça, rosto ou gestos importantes; não distorça a proporção.

Área de motion:
- Use todo o canvas como área de composição, inclusive a região atrás da miniatura. O layout deve ser desenhado considerando a miniatura como uma camada sobreposta que encobre uma pequena área.
- Posicione textos, números, diagramas e informações essenciais fora da área ocupada pela miniatura.
- Dê preferência a composições alinhadas à esquerda ou na região superior/esquerda, deixando a janela respirar.
- O conteúdo principal deve ter contraste e escala suficientes para ser percebido imediatamente.
- Se houver legenda, posicione-a em uma região livre; nunca sobreponha a janela do apresentador nem a informação principal.
- Mantenha o apresentador visível e reconhecível, mas não deixe que a miniatura domine a hierarquia visual.

**Regra estrutural:** esta composição é `MOTION_FULLSCREEN` com uma janela de apresentador adicionada. Não é “vídeo em tela cheia + miniatura”. Se a cena não tiver uma composição de motion ocupando o canvas, ela não corresponde a este modo.

Use `MOTION_FULLSCREEN` sem miniatura quando a presença do apresentador não for necessária. Use esta variação quando a expressão, o gesto ou a presença dele acrescentarem valor à explicação.

### 5.3 `KEY_PHRASE` — Frase de destaque

**Objetivo:** transformar uma frase realmente importante em um momento editorial de ênfase.

Use em frases que expressem uma tese, contraste, conclusão, alerta ou formulação memorável. Não aplique em qualquer frase comum.

Direção visual:
- Priorize Newsreader para a frase principal.
- Use `text` na maior parte da frase e `accent-text` em uma palavra ou trecho curto.
- O itálico pode destacar o trecho em ciano, seguindo a identidade Stalex.
- Um eyebrow em Geist Mono pode contextualizar a frase, por exemplo: `O PONTO CENTRAL` ou `NA PRÁTICA`.
- Não coloque a frase dentro de uma caixa, balão, cartão ou faixa colorida por padrão.
- Use no máximo um pequeno elemento auxiliar, como uma linha fina ou marcador.
- Quebre as linhas por sentido e ritmo de leitura, não para preencher espaço geometricamente.

Animação padrão:
- Entrada com opacidade de 0 para 1 e deslocamento vertical discreto de 10–16 px.
- Revele a frase em uma ou duas etapas, respeitando a leitura.
- Se houver destaque de palavra, revele-o junto da parte falada correspondente.
- Saída curta e limpa, sem explosão, giro ou efeito elástico.

A frase deve continuar legível por tempo suficiente para ser lida. Não anime cada palavra se isso prejudicar a compreensão.

### 5.4 `CLEAN_CAPTIONS` — Legenda limpa, sem background

**Objetivo:** oferecer leitura contínua da fala sem criar uma caixa visual sobre o vídeo.

Este é um requisito explícito da identidade: **não use background nas legendas**.

Regras obrigatórias:
- Não use caixa, tarja, retângulo, pill, balão ou fundo semitransparente atrás do texto.
- Use Geist 500 ou 600, normalmente entre 44 e 52 px em 1080 × 1920.
- Cor padrão `text` (`#eef2f9`).
- Use `accent-text` (`#7dd3fc`) para uma palavra-chave ou pequeno trecho quando isso reforçar o sentido. Não pinte a legenda inteira de ciano.
- Prefira uma ou duas linhas curtas, agrupadas por unidade de sentido.
- Mantenha o bloco centralizado ou alinhado de acordo com o enquadramento, sem cobrir o rosto.
- Como ponto de partida, use a região inferior central, aproximadamente entre y=1400 e y=1610, ajustando conforme o enquadramento e os elementos da cena.
- Em `MOTION_FULLSCREEN_WITH_MINIATURE`, coloque a legenda em uma região livre; nunca sobreponha a janela do apresentador ou a informação principal.
- Use sombra tipográfica muito sutil ou contorno mínimo somente quando o fundo da gravação comprometer a leitura. Esse recurso não pode parecer um background.
- Faça a sincronização acompanhar a fala real. Respeite pausas, pontuação e mudança de assunto.

Quebra e ritmo:
- Agrupe palavras por frase ou unidade de sentido, normalmente de 3 a 7 palavras por bloco, conforme a fala.
- Evite deixar uma única palavra isolada sem motivo narrativo.
- Evite blocos longos, três ou mais linhas e mudanças frenéticas de legenda.
- Não use animação de salto, tremor ou escala em cada palavra.
- Um destaque pontual por bloco é suficiente. O efeito karaoke palavra por palavra não é o padrão.
- Preserve fielmente o que foi falado. Não reescreva a fala para “melhorar” o texto; corrija apenas erros evidentes de transcrição sem mudar o sentido.

Se a imagem tiver contraste insuficiente, primeiro procure uma posição mais limpa ou ajuste discretamente a legibilidade do texto. Não resolva o problema colocando uma caixa atrás da legenda.

## 6. Elementos gráficos de apoio

Use estes recursos como componentes discretos dentro das quatro composições principais:

- **Linha divisória:** 1–2 px, branca com baixa opacidade ou ciano quando for o foco.
- **Marcador de seção:** pequeno eyebrow em Geist Mono, caixa alta e ciano.
- **Número ou métrica:** número em Geist ou Newsreader, com unidade e contexto visíveis.
- **Comparação:** duas áreas equilibradas, títulos curtos e diferença principal evidente. Não dependa de cores diferentes para explicar tudo.
- **Etapas:** sequência linear numerada, com um passo ativo em ciano e os demais neutros.
- **Destaque de interface:** moldura fina e discreta para apontar uma área real de uma captura de tela.
- **Código ou terminal:** use somente quando contribuir para a explicação. Preserve legibilidade e não invente trechos ou resultados.

Evite grades decorativas, grids sem função, partículas, brilhos, ruído digital e elementos futuristas genéricos.

## 7. Linguagem de movimento

O motion Stalex é preciso e contido. A animação conduz o olhar; não chama mais atenção do que a mensagem.

### 7.1 Tokens de movimento

| Tipo | Duração inicial | Comportamento |
|---|---:|---|
| Microinteração | 150–220 ms | Mudança curta de opacidade, posição ou realce |
| Entrada de elemento | 280–420 ms | Fade + deslocamento pequeno |
| Saída de elemento | 180–280 ms | Fade ou deslocamento curto |
| Transição entre composições | 350–550 ms | Corte, dissolução ou máscara simples |
| Leitura de frase | Conforme a fala | Permanece estável até a mensagem ser compreendida |

Use easing suave, preferencialmente ease-out na entrada e ease-in na saída. Stagger entre elementos deve ser curto e ter função de hierarquia, não de espetáculo.

### 7.2 Movimentos preferidos

- Fade in / fade out.
- Deslocamento vertical curto, geralmente de 8–16 px.
- Escala muito discreta, por exemplo de 0.985 para 1.0.
- Revelação por máscara ou wipe simples quando indicar progressão.
- Animação de linha ou contorno para apontar uma área específica.
- Corte seco quando for a forma mais clara de manter o ritmo.

### 7.3 Movimentos a evitar

Não use por padrão:
- Bounce, elastic, overshoot ou mola.
- Zoom agressivo ou movimento contínuo de câmera artificial.
- Glitch, RGB split, shake, strobe ou flash.
- Giro de texto, letras voando ou palavras explodindo.
- Transições chamativas em toda troca de cena.
- Animação simultânea de muitos elementos.

Só use um desses recursos quando o briefing pedir explicitamente ou quando houver uma justificativa narrativa muito clara.

## 8. Direção de edição e ritmo

Antes de editar, entenda a mensagem. Não escolha efeitos aleatoriamente.

### 8.1 Analise o conteúdo

Identifique:
- Gancho inicial.
- Tese ou mensagem central.
- Argumentos e explicações.
- Exemplos, demonstrações e evidências.
- Frases que merecem destaque.
- Conclusão e chamada para ação, se houver.

Não invente fatos, números, estatísticas, depoimentos, telas de produto ou provas. Use somente o que estiver no vídeo, no briefing ou nos materiais fornecidos.

### 8.2 Escolha visual por intenção

| Intenção da fala | Tratamento preferido |
|---|---|
| Explicação simples ou conversa direta | Apresentador com `CLEAN_CAPTIONS` |
| Ideia que precisa de uma cena gráfica ocupando o canvas inteiro, sem apresentador | `MOTION_FULLSCREEN` |
| Explicação visual em tela inteira com o apresentador em janela 9:16 no canto inferior direito | `MOTION_FULLSCREEN_WITH_MINIATURE` |
| Tese, contraste ou conclusão memorável | `KEY_PHRASE` |
| Dado, processo ou comparação | `MOTION_FULLSCREEN` ou `MOTION_FULLSCREEN_WITH_MINIATURE`, conforme a necessidade de manter o apresentador visível |
| Pausa ou mudança de raciocínio | Corte limpo ou retorno ao apresentador |

Não aplique um efeito a cada frase. Uma sequência de fala limpa pode ser mais forte do que uma sucessão de telas. Use o menor número de intervenções visuais necessário para manter clareza, ritmo e interesse.

### 8.3 Continuidade

- Preserve a continuidade da fala entre tomadas e composições.
- Não corte uma palavra, respiração ou gesto de forma acidental.
- Faça entradas e saídas acompanharem o sentido da frase.
- Não deixe elementos gráficos aparecerem antes de serem compreensíveis no contexto.
- Mantenha consistência de posição, escala e estilo quando um mesmo tipo de elemento reaparecer.
- Alterne densidade visual: depois de uma composição carregada de informação, dê espaço à fala ou a uma tela mais limpa.

## 9. Áudio e integração com o vídeo

- A voz é a prioridade e deve permanecer inteligível.
- Música, quando existir, deve apoiar o ritmo sem competir com a fala.
- Use efeitos sonoros com moderação e apenas quando reforçarem uma transição ou ação visual.
- Evite whooshes, impactos e sons de interface em excesso.
- Não altere a voz do apresentador nem sincronize efeitos de forma que pareçam interromper a fala.

## 10. Fluxo de trabalho obrigatório

1. **Inspecionar os materiais:** assista ao vídeo, identifique duração, enquadramento, qualidade do áudio, pausas, cortes e materiais de apoio disponíveis.
2. **Compreender a mensagem:** identifique gancho, tese, argumentos, exemplos, conclusão e trechos de ênfase.
3. **Planejar a edição:** monte um plano por trecho com tempo aproximado, mensagem, composição escolhida, elementos gráficos e tratamento de legenda.
4. **Definir a hierarquia:** para cada cena, decida qual é o único foco visual principal.
5. **Executar:** use as skills nativas do Hyperframes para implementar a edição conforme este guia visual.
6. **Revisar:** confira a edição completa em 9:16, com atenção especial à leitura em tela de celular, sincronia, safe areas, miniatura e consistência visual.
7. **Corrigir:** remova excessos, corrija colisões e simplifique qualquer cena cuja animação dispute atenção com a mensagem.

Não é necessário apresentar o plano ao usuário em toda tarefa, mas ele deve orientar a execução. Apresente-o quando o usuário pedir planejamento ou quando for útil aprovar uma direção antes de uma edição extensa.

## 11. Checklist de qualidade antes de entregar

### Identidade
- [ ] A edição mantém a personalidade sóbria e editorial do Stalex.
- [ ] O ciano é o único destaque cromático recorrente.
- [ ] Newsreader está reservado para títulos e frases de impacto; Geist para leitura e legendas; Geist Mono para rótulos.
- [ ] Não há gradientes chamativos, emojis, stickers ou decoração sem função.

### Composição
- [ ] O formato vertical e a proporção dos materiais foram preservados.
- [ ] Textos e elementos importantes respeitam as áreas seguras.
- [ ] O rosto e os gestos do apresentador não foram cobertos.
- [ ] A miniatura, quando usada, continua claramente vertical em 9:16 e está no canto inferior direito.
- [ ] Em `MOTION_FULLSCREEN_WITH_MINIATURE`, o motion ocupa o canvas inteiro e o vídeo do apresentador aparece somente na miniatura; não existe uma cópia do apresentador em tela cheia no fundo.
- [ ] Em `MOTION_FULLSCREEN`, não existe miniatura do apresentador.
- [ ] A composição tem um foco principal e espaço negativo suficiente.

### Legendas e textos
- [ ] As legendas não têm background, tarja, caixa ou balão.
- [ ] A legenda está sincronizada com a fala e foi transcrita fielmente.
- [ ] As frases de destaque são realmente importantes e estão legíveis.
- [ ] Nenhum texto está cortado, pequeno demais ou exposto por tempo insuficiente.

### Motion e narrativa
- [ ] Cada efeito cumpre uma função narrativa.
- [ ] As animações são suaves e contidas.
- [ ] Não há excesso de transições, efeitos sonoros ou movimentos simultâneos.
- [ ] O ritmo respeita a fala e alterna momentos de maior e menor densidade visual.
- [ ] Nenhum dado, imagem, tela, citação ou resultado foi inventado.

Se algum item obrigatório falhar, ajuste a edição antes de entregar.

## 12. Regra de precedência

1. Instruções explícitas do usuário para o vídeo atual.
2. Esta skill Stalex Motion, para identidade visual e direção de arte.
3. Skills nativas do Hyperframes, para execução técnica.

Quando houver conflito entre uma preferência estética implícita e uma instrução explícita do briefing, siga o briefing. Não altere os requisitos explícitos de legenda sem background ou proporção 9:16 da miniatura sem autorização do usuário.
