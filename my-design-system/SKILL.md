---
name: alexandre-afonso-design
description: Use this skill to generate well-branded interfaces and assets for Alexandre Afonso (ConsultorIA), a solo AI consultant serving service providers and SMBs in Brazil. Covers landing pages, blog posts, commercial proposal slides, and throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Dark-first, navy + amber, sober "expert · accessible · safe" aesthetic in Portuguese (BR).
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

The brand:
- **Alexandre Afonso · ConsultorIA** — solo consultant who architects and implements AI/agent solutions for service providers and SMBs
- Tagline: _"É a inteligência orgânica que faz a IA funcionar."_
- Personality: **Especialista · Acessível · Seguro** (NOT provocative, NOT arrogant)
- Dark-first, navy `#1a2a4a` + amber `#f59e0b`, Geist sans + Geist mono
- Portuguese (BR)
- No emoji, no buzzwords (no _disruptivo_, _revolucionário_, _de ponta_, _alavancar_), no AI-slop tropes (gradients, glow blobs, generic stock)
- Audience scale matters: realistic numbers for SMBs — proposals in R$ 30-200k range, teams of 5-150 people, not enterprise-scale figures.

Critical source docs (read in this order):
1. `uploads/Estratégia - Consultor.md` — what the business actually is, who it serves, what the offer is
2. `uploads/Tom de Voz - Consultor.md` — voice rules, do/don't, antes/depois examples, checklist

Quick map of the design system:
- `colors_and_type.css` — design tokens (CSS vars). Always import this first.
- `components.css` — UI primitives (`.btn`, `.card`, `.badge`, `.input`, `.dot`).
- `assets/` — SVG logos and mark.
- `preview/` — small reference cards for every token / component, viewable in browser.
- `ui_kits/site/` — landing page, modular React components.
- `ui_kits/blog/` — editorial blog with index/article toggle.
- `slides/` — 16:9 commercial-proposal deck template using `<deck-stage>`.

Voice checklist (apply to every line of copy):
- [ ] Faria sentido numa reunião com o cliente?
- [ ] Expliquei o raciocínio, não só a conclusão?
- [ ] Está livre de buzzwords e promessas vazias?
- [ ] O próximo passo está claro?

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Use `colors_and_type.css` + `components.css` as the base and lift entire JSX components from `ui_kits/` when applicable.

If working on production code, copy assets and read the rules in `README.md` to become an expert in designing with this brand. Pay particular attention to:
- **Content Fundamentals** (section 3 in README) — voice, casing, punctuation. The brand is direct, in PT-BR, never uses emoji or hype words.
- **Visual Foundations** (section 4) — restrained radii (`md` default, no oversized rounding), 1px hairlines as a signature, navy + amber only, status colors desaturated.
- **Iconography** — Lucide only, stroke 1.5, currentColor.

If the user invokes this skill without any other guidance, ask them what they want to build or design (a slide for a proposal? a landing variant? a blog post? a presentation deck?), ask 3-5 sharp clarifying questions (audience, format, surface, length, tone variant), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
