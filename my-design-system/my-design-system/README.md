# Alexandre Afonso — ConsultorIA · Design System

> É a inteligência orgânica que faz a IA funcionar.

Sistema de design da marca pessoal **Alexandre Afonso**, consultor solo de IA aplicada para **prestadores de serviço e pequenas/médias empresas**. Dark-first, sóbrio, profissional — pensado para transmitir especialização sem distância.

---

## 1. Posicionamento

| | |
|---|---|
| **Marca** | Alexandre Afonso · ConsultorIA |
| **Negócio** | Arquitetar e implementar soluções de IA (automação de processos e agentes autônomos) sob medida |
| **Tagline** | _É a inteligência orgânica que faz a IA funcionar._ |
| **Público** | Prestadores de serviço e PMEs (até ~500 colaboradores) |
| **Modelo** | Consultor solo, B2B, projeto fechado em fases |
| **Idioma** | Português (BR) — sem mistura com inglês exceto termos técnicos consagrados |
| **Personalidade** | **Especialista · Acessível · Seguro** |

### Concorrentes mentais (não copiar, calibrar)
- Linear / Stripe Press / Vercel — pela tipografia e o "premium dark" sem peso
- Sites de consultores solo respeitados (Patrick Collison, Pieter Levels) — pela honestidade do conteúdo
- **Não** parecer uma agência grande nem uma boutique de M&A — o cliente fala com uma pessoa, não com uma marca

---

## 2. Fontes deste design system

Este design system foi gerado a partir dos seguintes materiais:

- Brief inicial (cor, tipografia, direção visual, produtos)
- `Estratégia - Consultor.md` (público, oferta, etapas, ferramentas)
- `Tom de Voz - Consultor.md` (personalidade, princípios de escrita, antes/depois)

Cópias dos dois últimos vivem em `/uploads/` no projeto.

> Se você atualizar Estratégia ou Tom de Voz, me chama — o sistema migra para os novos valores numa iteração.

---

## 3. Conteúdo · Fundamentos de copy

> Fonte canônica: `uploads/Tom de Voz - Consultor.md`. Esta seção é a versão operacional dele para uso em UI.

### Personalidade em 3 palavras

**Especialista · Acessível · Seguro.**

### É / não é

| É | Não é |
|---|---|
| Direto | Prolixo |
| Profissional | Informal em excesso |
| Acessível | Distante |
| Confiante | Arrogante |

### Princípios de escrita

1. **Frases curtas. Voz ativa.**
2. **Explicar o técnico sem simplificar demais.** O cliente não é leigo, mas também não é especialista.
3. **Mostrar o raciocínio**, não só o resultado. "Escolhi X porque Y" é melhor que "Aqui está X".
4. **Sem buzzwords vazios.** Proibidos: _disruptivo_, _revolucionário_, _de ponta_, _game-changer_, _alavancar_, _transformação digital_, _solução escalável_.
5. **Sem forçar venda.** O CTA é claro, mas nunca pressiona.

### O que nunca fazer

- Parecer arrogante (incluindo "sei mais que você", "a maioria erra")
- Forçar a venda ("não perca essa oportunidade!", "só hoje", "vagas limitadas")
- Usar jargão desnecessário

### Voz pessoal

- **Primeira pessoa do singular.** É uma pessoa, não uma agência. ("Trabalho", "implemento", "documento".)
- **"Você", nunca "senhor".** Relação adulta entre pares.
- **Sem "nós" institucional** (não tem time).

### Tom por canal

| Canal | Tom |
|---|---|
| **LinkedIn** | Educativo, cases, opiniões fundamentadas. Autoridade sem vender. |
| **E-mail / WhatsApp** | Direto. Contexto rápido, proposta clara, próximo passo explícito. |
| **Site / Blog** | Explica o processo e o valor com clareza. Foco no problema do cliente. |
| **Slides de proposta** | Estrutura limpa, números honestos, escopo fechado, próximo passo no fim. |

### Casing & pontuação

- **Sentence case** em títulos: "Como vamos trabalhar juntos", não "Como Vamos Trabalhar Juntos".
- **UPPERCASE MONOESPAÇADO** em eyebrows, tags e metadados.
- Números em mono tabular: `R$ 48k`, `70%`, `8 semanas`.
- **Travessão (—)** para incisos: `— Diagnóstico`, `— 01 / 03`.
- **Sem exclamações** em copy de marca.

### Emoji

- **Nunca** em UI ou copy.
- **Nunca** em slides.
- Aceitável só em mensagens pessoais (fora do escopo deste sistema).

### Antes / depois (do Tom de Voz)

**Antes** ❌
> Utilizamos soluções de ponta com IA de última geração para transformar digitalmente o seu negócio.

**Depois** ✅
> Mapeamos o seu processo, identificamos onde a IA resolve de verdade e implementamos isso — sem enrolação.

---

**Antes** ❌
> Nossa metodologia proprietária garante resultados disruptivos e escaláveis.

**Depois** ✅
> Cada solução é construída para o seu contexto. O que funciona para um cliente pode não funcionar para você.

### Checklist rápido (antes de publicar)

- [ ] Faria sentido ser dito numa reunião com o cliente?
- [ ] Expliquei o raciocínio, não só a conclusão?
- [ ] Está livre de buzzwords e promessas vazias?
- [ ] O próximo passo está claro?

---

## 4. Visual · Fundamentos

### Cor
- **Navy `#1a2a4a` é o âncora.** Canvas é `#060b16` (`--navy-900`). Cards usam `#0e172a`–`#13203a`.
- **Âmbar `#f59e0b` é o único acento.** Reservado para CTA primário, métricas, links e indicadores ativos. Se aparecer em mais de 5% da tela, está sendo abusado.
- **Sem cor decorativa.** Tons de status (success/warning/danger) são dessaturados de propósito.
- **Sem gradientes coloridos.** Aceitos só: radial sutil sobre navy para vinheta; glow âmbar pontual (uma vez por tela).

### Tipografia
- **Família única: [Geist](https://fonts.google.com/specimen/Geist) + Geist Mono.** Geométrica, neutra, premium. Substituível por Söhne / Inter Display em produção se o cliente quiser.
- Pesos: 300, 400, 500, 600, 700, 800.
- Display sempre com `letter-spacing: -0.04em` e `font-weight: 500`. Headings: `-0.025em` e `600`.
- Mono é o herói de **metadados**: eyebrows, tags, números tabulares, código.
- `text-wrap: balance` em títulos grandes; `pretty` em parágrafos.

### Espaçamento
Base **4px**, escala em `--space-1` (4) até `--space-32` (128). Padding interno de seção: `120px` vertical / `32px` horizontal. Gap entre cards: `20px`. Padding de card: `24-32px`.

### Backgrounds
- **Sólidos navy** são o default. Sem imagem de fundo decorativa.
- **Grid blueprint** (linhas de 1px a 3% de opacidade, célula 64-80px) com mask radial: usado no hero e em divisores.
- **Dots sutis** (1px, opacidade 6-8%, célula 20-24px): alternativa ao grid.
- **Glow âmbar pontual** (radial gradient, opacidade 10-12%): apenas em seções de manifesto/fechamento.
- **Sem imagens stock.** Quando precisar de foto, deixar placeholder com legenda `placeholder · substituir`.

### Animação
- **Duração padrão `--dur-fast` (160ms)** em hovers; `--dur-normal` (240ms) em transições maiores.
- **Easing default `--ease-out`** (`cubic-bezier(0.16, 1, 0.3, 1)`) — saída suave, sem bounce.
- Nada de bounce, elástico, _spring_ exagerado. Movimento é funcional, não decorativo.
- Reduce-motion é respeitado: nenhuma animação é essencial.

### Hover & press
- **Botão primário** (âmbar): hover clareia (`amber-400`), active escurece (`amber-600`).
- **Botão secundário**: hover muda `background` para `--color-surface-hover` (#142039).
- **Links**: hover sobe para `amber-300` mais claro.
- **Cards**: hover muda apenas borda de `--color-border` para `--color-border-strong` + leve mudança de superfície. Sem `transform: scale()`.
- **Press**: pequeno `translateY(0.5px)` em botões. Apenas isso.

### Bordas
- 1px sólido em `rgba(255,255,255,0.07)` (`--color-border`) é o default.
- `rgba(255,255,255,0.14)` (`--color-border-strong`) para hover, foco, divisores principais.
- **Hairlines** (1px sobre superfície escura) são uma assinatura. Usadas para separar KPIs, seções de pricing, células de timeline.

### Sombras
Sombras são **profundas e suaves** sobre dark, nunca _glow_. Sempre acompanhadas de uma highlight interna sutil (`inset 0 1px 0 rgba(255,255,255,0.05)`). Variante especial: `--shadow-amber` para focus ring e card destacado.

### Raios
- Default `--radius-md` (6px) para cards e botões.
- `--radius-lg` (10px) para cards grandes / modal.
- `--radius-pill` apenas para badges e dots.
- **Sem raios maiores que 14px.** Premium consulting é geometria contida.

### Transparência & blur
- **Header backdrop blur** (`14px`) + fundo `rgba(6,11,22,0.78)`: assinatura.
- Modal scrim: `rgba(6,11,22,0.72)`.
- **Sem _glassmorphism_** em conteúdo. Blur é só para barras fixas.

### Layout
- **Container max-width: 1280px** com 32px de padding lateral.
- **Containers narrow (720px)** para conteúdo editorial / leitura.
- **Sticky header** sempre presente em landing e blog.
- **Footer mínimo** — wordmark, navegação, contato.

### Imagens (quando entrarem)
- Tom **frio e contrastado**, sem warming filter.
- Preferência por **fotografia ambiente** (escritório, time, processo), não retratos posados.
- B&W ou desaturação 50% é aceitável; **não usar filtros coloridos**.
- Sem grain artificial. Sem stock genérico.

---

## 5. Iconografia

### Sistema
- **[Lucide](https://lucide.dev)** via CDN — stroke `1.5`, viewBox `24x24`, `currentColor`, sem fill.
- Tamanhos padrão: **16px** (inline UI), **20px** (botões), **24px** (cards).
- Cor segue contexto: `--color-fg` em botões, `--color-fg-muted` em metadados, `--color-accent` em estados ativos.

### O que não usar
- **Sem emoji** em nenhuma UI da marca.
- **Sem ícones em PNG/raster.** Sempre SVG.
- **Sem ícones com fill.** A linguagem é stroke 1.5 consistente.
- **Sem dois icon sets misturados.** Lucide só.
- **Sem unicode arrows decorativos** (→ ⬡ etc) misturados com Lucide. Setas em CTA usam o caractere `→` puro porque ele já é tipográfico, não decorativo.

### Assets locais
- `assets/logo.svg` — wordmark monocromático (use currentColor)
- `assets/logo-stacked-amber.svg` — wordmark com `IA` em âmbar
- `assets/logo-mark.svg` — mark `aa` para favicon e contextos pequenos

---

## 6. Index do projeto

| Caminho | O que é |
|---|---|
| `README.md` | este documento |
| `SKILL.md` | manifest para Claude Code / Agent Skills |
| `colors_and_type.css` | tokens (cores, tipografia, espaço, raios, sombras) |
| `components.css` | primitivos (botões, cards, inputs, badges) |
| `assets/` | logos SVG |
| `preview/` | cards do Design System tab (19 cards) |
| `ui_kits/site/` | UI kit — landing pessoal (8 componentes JSX + index.html) |
| `ui_kits/blog/` | UI kit — blog técnico (6 componentes JSX + index.html, modos index/article) |
| `slides/` | template de slides para propostas comerciais (9 slides 16:9) |

### Como usar em um novo projeto
```html
<link rel="stylesheet" href="colors_and_type.css" />
<link rel="stylesheet" href="components.css" />
<!-- pronto: tokens disponíveis como CSS vars, primitivos como classes -->
```

---

## 7. Fontes & substituições

| Uso | Família escolhida | Status | Fallback de produção |
|---|---|---|---|
| Sans (UI + display) | Geist | Google Fonts (CDN) | Söhne / Inter Display |
| Mono | Geist Mono | Google Fonts (CDN) | Berkeley Mono / Söhne Mono |

> Não foi pedida nenhuma fonte específica no brief. **Geist** foi escolhida por casar com a vibe "premium-tech-consulting" e por ter as 5 pesos necessários no Google Fonts. Se você usar/comprar uma família proprietária (Söhne, Founders Grotesk, ABC Diatype), me avise para trocar em `colors_and_type.css`.
