/* global React */

const articleStyles = {
  wrap: { padding: "64px 32px 120px" },
  inner: { maxWidth: 760, margin: "0 auto" },
  meta: {
    display: "flex", gap: 16, alignItems: "center",
    fontFamily: "var(--font-mono)", fontSize: 11,
    letterSpacing: "0.08em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)", marginBottom: 24,
  },
  metaCat: { color: "var(--color-accent)" },
  metaSep: { width: 4, height: 1, background: "currentColor" },
  title: {
    fontSize: "clamp(36px, 5.4vw, 56px)",
    fontWeight: 600, letterSpacing: "-0.028em",
    lineHeight: 1.06, color: "var(--color-fg)",
    margin: "0 0 24px", textWrap: "balance",
  },
  lede: {
    fontSize: 22, lineHeight: 1.55, color: "var(--color-fg-muted)",
    margin: "0 0 48px", letterSpacing: "-0.012em",
    fontWeight: 400, textWrap: "pretty",
  },
  hairline: {
    height: 1, background: "var(--color-border)", margin: "48px 0",
    border: 0,
  },
  byline: {
    display: "flex", alignItems: "center", gap: 12,
    padding: "16px 0 32px",
    borderBottom: "1px solid var(--color-border)",
    marginBottom: 48,
  },
  avatar: {
    width: 36, height: 36, borderRadius: "var(--radius-sm)",
    background: "var(--color-accent)", color: "var(--color-fg-on-amber)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 700, fontSize: 13, letterSpacing: "-0.04em",
  },
  bylineName: { fontSize: 13, color: "var(--color-fg)", fontWeight: 500 },
  bylineRole: { fontSize: 12, color: "var(--color-fg-subtle)" },
  bylineRight: { marginLeft: "auto", display: "flex", gap: 8 },
  h2: {
    fontSize: 28, fontWeight: 600, letterSpacing: "-0.022em",
    lineHeight: 1.2, color: "var(--color-fg)",
    margin: "56px 0 16px",
  },
  p: {
    fontSize: 17, lineHeight: 1.7, color: "var(--color-fg)",
    margin: "0 0 20px", textWrap: "pretty",
  },
  pMuted: { color: "var(--color-fg-muted)" },
  code: {
    fontFamily: "var(--font-mono)", fontSize: 14,
    color: "var(--color-fg)",
    background: "var(--color-bg-sunken)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    padding: "20px 24px",
    overflow: "auto",
    margin: "32px 0",
    lineHeight: 1.65,
  },
  codeComment: { color: "var(--color-fg-subtle)" },
  codeKey: { color: "var(--color-accent)" },
  pullquote: {
    margin: "48px 0",
    padding: "24px 0 24px 32px",
    borderLeft: "2px solid var(--color-accent)",
    fontSize: 22, lineHeight: 1.35, letterSpacing: "-0.015em",
    color: "var(--color-fg)", fontWeight: 500,
  },
  list: { padding: 0, margin: "0 0 24px", listStyle: "none" },
  li: {
    fontSize: 17, lineHeight: 1.7, color: "var(--color-fg)",
    display: "flex", gap: 14, paddingLeft: 0, margin: "8px 0",
  },
  liDot: {
    fontFamily: "var(--font-mono)", color: "var(--color-accent)",
    flexShrink: 0, paddingTop: 1,
  },
  inlineCode: {
    fontFamily: "var(--font-mono)", fontSize: "0.9em",
    background: "var(--color-bg-sunken)",
    padding: "2px 6px", borderRadius: "var(--radius-xs)",
    color: "var(--color-accent)",
    border: "1px solid var(--color-border)",
  },
  footer: {
    marginTop: 80, paddingTop: 32, borderTop: "1px solid var(--color-border)",
    display: "flex", gap: 12, flexWrap: "wrap",
  },
};

function Article({ post }) {
  return (
    <div style={articleStyles.wrap}>
      <div style={articleStyles.inner}>
        <div style={articleStyles.meta}>
          <span style={articleStyles.metaCat}>{post.category}</span>
          <span style={articleStyles.metaSep} />
          <span>{post.date}</span>
          <span style={articleStyles.metaSep} />
          <span>{post.readTime} min de leitura</span>
        </div>
        <h1 style={articleStyles.title}>{post.title}</h1>
        <p style={articleStyles.lede}>{post.excerpt}</p>
        <div style={articleStyles.byline}>
          <div style={articleStyles.avatar}>aa</div>
          <div>
            <div style={articleStyles.bylineName}>Alexandre Afonso</div>
            <div style={articleStyles.bylineRole}>ConsultorIA · escreve a cada 2 sextas</div>
          </div>
          <div style={articleStyles.bylineRight}>
            <button className="btn btn--ghost btn--sm">Compartilhar</button>
            <button className="btn btn--secondary btn--sm">Salvar</button>
          </div>
        </div>

        <p style={articleStyles.p}>
          Toda semana converso com pelo menos um cliente preocupado em escolher o modelo certo antes de qualquer coisa. Faz sentido — é a decisão que parece mais técnica e mais visível. Mas, na prática, escolher o modelo costuma ser a parte mais simples do projeto.
        </p>
        <p style={articleStyles.p}>
          O que dá trabalho é o que vem antes: descobrir que <span style={articleStyles.inlineCode}>o CRM tem 3 fontes de informação diferentes</span>, que a equipe de atendimento não tem permissão para escrever no sistema, que metade da base de conhecimento da empresa mora em conversas de WhatsApp.
        </p>

        <blockquote style={articleStyles.pullquote}>
          O modelo é uma das decisões. O contexto é o que decide se a solução funciona.
        </blockquote>

        <h2 style={articleStyles.h2}>O que faço primeiro</h2>
        <p style={articleStyles.p}>
          Antes de qualquer linha de código, três artefatos saem da fase de entendimento:
        </p>
        <ul style={articleStyles.list}>
          <li style={articleStyles.li}><span style={articleStyles.liDot}>—</span><span>Mapa de onde o dado realmente está (não onde a documentação diz que está)</span></li>
          <li style={articleStyles.li}><span style={articleStyles.liDot}>—</span><span>Lista nominal de quem aprova o quê no processo</span></li>
          <li style={articleStyles.li}><span style={articleStyles.liDot}>—</span><span>Top 5 perguntas que a solução vai precisar responder no dia 1</span></li>
        </ul>

        <pre style={articleStyles.code}>
{`# diagnóstico resumido — exemplo real
$ inspect --org cliente --depth 3
`}
<span style={articleStyles.codeComment}>{`# saída`}</span>
{`
`}
<span style={articleStyles.codeKey}>fontes de informação</span>{`     : 4 (3 sistemas + 1 planilha)
`}
<span style={articleStyles.codeKey}>decisões manuais/dia</span>{`     : 12
`}
<span style={articleStyles.codeKey}>casos cobertos por IA</span>{`    : 8 de 12
`}
<span style={articleStyles.codeKey}>casos que ficam humanos</span>{`  : 4`}
        </pre>

        <p style={articleStyles.p}>
          Quando os três artefatos batem com o que a liderança imaginava, o projeto começa. Quando não bate — e isso é mais comum do que parece — paro uma semana para alinhar. Vale sempre.
        </p>

        <div style={articleStyles.footer}>
          <span className="badge badge--neutral">#diagnóstico</span>
          <span className="badge badge--neutral">#processo</span>
          <span className="badge badge--neutral">#contexto</span>
        </div>
      </div>
    </div>
  );
}

window.Article = Article;
