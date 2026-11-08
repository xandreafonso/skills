---
name: "design-system-stalex"
description: "Use ao criar qualquer interface, página, slide ou peça visual para Alexandre Afonso / ConsultorIA: aplica o Stalex, design system inspirado no Claude com as cores de alexandreafonso.com.br."
---

# Stalex — Design System de Alexandre Afonso · ConsultorIA

O Stalex une a estrutura e o tom do Claude (serifa nos títulos, muito respiro, superfícies discretas, conversa como centro) à paleta azul-noite + ciano do site alexandreafonso.com.br. Idioma padrão das peças: português do Brasil.

## Princípios
1. Calmo como uma conversa, preciso como um diagnóstico: pouco elemento, muito espaço.
2. Elevação por borda, não por sombra.
3. Um único destaque: ciano. Nada de gradientes chamativos, emoji ou cards com borda lateral colorida.
4. Contraste AA sempre (texto ≥ 4.5:1).

## Cores

### Tema escuro (padrão, igual ao site)
| Token | Hex |
|---|---|
| bg | #060b16 |
| surface | #080f1c |
| raised | #0e172a |
| border | rgba(255,255,255,0.07) |
| border-strong | rgba(255,255,255,0.15) |
| text | #eef2f9 |
| text-2 | #a9b4c8 |
| text-3 (só ≥13px) | #8b97ad |
| accent | #0ea5e9 |
| accent-hover | #38bdf8 |
| accent-text (ênfase/links) | #7dd3fc |
| on-accent | #03111f |
| danger | #f87171 |

### Tema claro (versão "papel" fria)
| Token | Hex |
|---|---|
| bg | #f5f7fb |
| surface | #ffffff |
| raised | #eef2f9 |
| border | #e3e8f1 |
| border-strong | #cfd8e6 |
| text | #0e172a |
| text-2 | #3d4a63 |
| text-3 | #5a6780 |
| accent (botões) | #0ea5e9 com texto #03111f e borda #0284c7 |
| link / accent-text | #0369a1 |
| danger | #b91c1c |

### Escala ciano
100 #e0f2fe · 300 #7dd3fc · 400 #38bdf8 · 500 #0ea5e9 · 600 #0284c7 · 700 #0369a1 · 950 #03111f

## Tipografia
Google Fonts: `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap`

- **Newsreader** (serifa, peso 400): títulos e respostas do assistente. Ênfase em itálico na cor accent-text.
- **Geist**: corpo, interface, botões, mensagens do usuário. Tracking levemente negativo.
- **Geist Mono**: eyebrows e numeração de seção, caixa alta, 11px, peso 500, letter-spacing 0.2em, cor accent. Padrão: "— 01 O PROBLEMA".

| Token | Especificação |
|---|---|
| display | Newsreader 76/1.02, -1.5px |
| h1 | Newsreader 54/1.05, -1px |
| h2 | Newsreader 40/1.1, -0.6px |
| h3 | Geist 600 22/1.3, -0.3px |
| body-lg | Geist 18/1.6, text-2 |
| body | Geist 15/1.5 |
| small | Geist 13/1.5, text-2 |
| eyebrow | Geist Mono 500 11, +0.2em, caixa alta |

## Forma e espaço
- Raios: 8 (botões, campos), 12 (cards), 16 (painéis), 20 (compositor de chat), 999 (tags/pills).
- Espaçamento base 4: 4, 8, 12, 16, 24, 32, 48, 64, 96. Seções separadas por 72–96px com linha de borda no topo.
- Níveis: bg → surface (borda 7%) → raised (borda 15%). Foco: borda accent 70% + anel `0 0 0 4px rgba(14,165,233,0.12)`.

## Componentes
- **Botão primário**: altura 48, padding 0 28px, raio 8, fundo #0ea5e9, texto #03111f, Geist 500 15px, borda rgba(14,165,233,0.7); hover #38bdf8. Pequeno: altura 36, 13px.
- **Secundário**: fundo raised, borda border-strong, texto text. **Fantasma**: transparente, texto text-2.
- **Botão de ícone**: 36–44px, raio 8–10, ícones em SVG de traço (stroke 2–2.4), nunca emoji.
- **Campo**: altura 44, raio 8, fundo bg, borda border-strong, label 13px 500 acima; erro com borda e mensagem em danger.
- **Tag**: pill 28px, 12px 500; versão destaque com fundo accent 10%, borda accent 40%, texto accent-text e ponto de 6px.
- **Listas**: ✓ em SVG ciano para benefícios, ✕ em danger para "o que não é".
- **Card de conteúdo**: fundo raised, raio 12, padding 28, número em Geist Mono accent 80%, título em Newsreader 28.
- **Conversa (estilo Claude)**: mensagem do usuário em balão raised (raio 16, Geist 15) alinhado à direita; resposta do assistente SEM balão, em Newsreader 18/1.65, com avatar quadrado 28px (fundo accent 12%, borda accent 40%, "A" em serifa). Coluna de leitura com no máximo 720px.
- **Compositor**: raio 20, fundo raised (claro: branco), borda border-strong, textarea sem borda, botão de envio ciano 36px com seta para cima.
- **Layout de app**: barra lateral de 272px em surface, com borda à direita; cabeçalho de 56px; conteúdo centralizado.

## Voz
Direta, honesta, sem promessas. Frases curtas. Ex.: "Faz — mas provavelmente não do jeito que te venderam." Nunca invente números ou depoimentos; use placeholders como [SEU PREÇO].

## Checklist antes de entregar
- Só um destaque (ciano) por tela; serifa nos títulos, Geist no resto.
- Contraste AA conferido (no claro, links em #0369a1, nunca #0ea5e9 sobre branco).
- Tema escuro como padrão, a menos que pedido o claro.
- Botões, links e campos como elementos reais e acessíveis (label, aria-label em botões de ícone).