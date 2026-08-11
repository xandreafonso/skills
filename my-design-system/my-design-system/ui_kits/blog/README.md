# Blog / Conteúdo técnico

Layout editorial dark, focado em posts técnicos longos com bom hit-rate de leitura no celular e desktop. Inspirado em revistas técnicas de boutique (Stripe Press, Cantilever, Future).

## Componentes
- `BlogNav.jsx` — barra superior fina com tabs (Posts, Sobre, Newsletter)
- `BlogIndex.jsx` — listagem com post em destaque + lista cronológica + sidebar de tags
- `PostCard.jsx` — card de post (variante featured + compact)
- `Article.jsx` — view de post aberto com tipografia editorial e callouts
- `NewsletterCTA.jsx` — bloco de assinatura quinzenal
- `TagFilter.jsx` — pílulas para filtrar por tema

## Modos
A página tem dois modos toggláveis no topo (mantido em estado):
1. **Index** — feed de posts
2. **Article** — leitura de um post aberto

Isso permite mostrar o sistema de tipografia editorial e o feed no mesmo arquivo.
