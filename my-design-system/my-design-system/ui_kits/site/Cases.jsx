/* global React */

const casesStyles = {
  section: { padding: "120px 32px", borderBottom: "1px solid var(--color-border)" },
  inner: { maxWidth: "var(--container-wide)", margin: "0 auto" },
  head: {
    display: "flex", justifyContent: "space-between", alignItems: "flex-end",
    marginBottom: 56, gap: 32, flexWrap: "wrap",
  },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-accent)", marginBottom: 24,
  },
  h2: {
    fontSize: 44, fontWeight: 600, letterSpacing: "-0.025em",
    lineHeight: 1.1, margin: 0, maxWidth: 640,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20,
  },
  card: {
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    padding: 32, display: "flex", flexDirection: "column",
    transition: "border-color 240ms, background 240ms",
    cursor: "pointer", textDecoration: "none", color: "inherit",
    minHeight: 380,
  },
  cardHover: {
    borderColor: "var(--color-border-strong)",
    background: "var(--color-surface-hover)",
  },
  cardFeatured: {
    gridColumn: "span 2",
    minHeight: 280,
    flexDirection: "row",
    alignItems: "stretch",
    gap: 48,
  },
  cardFeaturedLeft: { flex: 1.2, display: "flex", flexDirection: "column" },
  cardFeaturedRight: {
    flex: 1, borderLeft: "1px solid var(--color-border)", paddingLeft: 48,
    display: "flex", flexDirection: "column", justifyContent: "center", gap: 32,
  },
  meta: {
    display: "flex", gap: 12, alignItems: "center", marginBottom: 24,
    fontFamily: "var(--font-mono)", fontSize: 10,
    letterSpacing: "0.08em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)",
  },
  sector: { color: "var(--color-fg-muted)" },
  title: {
    fontSize: 22, fontWeight: 600, letterSpacing: "-0.018em",
    lineHeight: 1.2, marginBottom: 16, color: "var(--color-fg)",
  },
  titleLg: { fontSize: 28 },
  desc: {
    fontSize: 14, lineHeight: 1.6, color: "var(--color-fg-muted)",
    marginBottom: 24, flex: 1,
  },
  descLg: { fontSize: 15 },
  stats: {
    display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
    paddingTop: 24, borderTop: "1px solid var(--color-border)",
  },
  statBlock: { display: "flex", flexDirection: "column", gap: 4 },
  statValue: {
    fontFamily: "var(--font-sans)", fontVariantNumeric: "tabular-nums",
    fontSize: 26, fontWeight: 600, letterSpacing: "-0.025em",
    color: "var(--color-accent)", lineHeight: 1,
  },
  statValueLg: { fontSize: 38 },
  statLabel: {
    fontFamily: "var(--font-mono)", fontSize: 10,
    letterSpacing: "0.08em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)",
  },
  arrow: {
    marginTop: 16, color: "var(--color-fg-muted)",
    fontFamily: "var(--font-mono)", fontSize: 12,
    display: "flex", alignItems: "center", gap: 8,
  },
};

const cases = [
  {
    featured: true,
    sector: "Software B2B · 80 colaboradores",
    year: "2026",
    title: "Atendimento de pós-venda passou a responder em minutos, sem precisar contratar.",
    desc: "A operação tinha 8 atendentes e estava prevista para crescer mais 3 no ano. Implementei um agente que cobre as 12 perguntas que respondiam 70% dos tickets. As contratações foram suspensas e os atendentes ficaram com os casos que pedem julgamento humano.",
    stats: [{ v: "70%", l: "tickets resolvidos sem atendente" }, { v: "3 hires", l: "evitados no plano anual" }],
  },
  {
    sector: "Prestador de serviço · contábil",
    year: "2025",
    title: "Triagem inicial de documentos integrada ao sistema interno.",
    desc: "Agente lê documentos enviados pelo cliente, classifica e popula o sistema. Equipe ganha 4h por dia.",
    stats: [{ v: "+30%", l: "produtividade do time" }, { v: "92%", l: "concordância humana" }],
  },
  {
    sector: "Agência de marketing · 14 pessoas",
    year: "2025",
    title: "Geração de briefings e análise de campanhas automatizada.",
    desc: "Reduziu em metade o tempo de elaboração de propostas comerciais sem perder qualidade.",
    stats: [{ v: "−52%", l: "tempo de proposta" }, { v: "+R$ 18k", l: "faturamento/mês" }],
  },
];

function Cases() {
  const [hover, setHover] = React.useState(null);
  return (
    <section style={casesStyles.section} id="casos">
      <div style={casesStyles.inner}>
        <div style={casesStyles.head}>
          <div>
            <div style={casesStyles.eyebrow}>— Trabalhos recentes</div>
            <h2 style={casesStyles.h2}>Cada caso é um contexto diferente.</h2>
          </div>
          <button className="btn btn--secondary">Ver todos os trabalhos</button>
        </div>
        <div style={casesStyles.grid}>
          {cases.map((c, i) => {
            const isFeatured = c.featured;
            const base = { ...casesStyles.card, ...(isFeatured ? casesStyles.cardFeatured : {}) };
            return (
              <a key={i} href="#" style={hover === i ? { ...base, ...casesStyles.cardHover } : base}
                 onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
                {isFeatured ? (
                  <>
                    <div style={casesStyles.cardFeaturedLeft}>
                      <div style={casesStyles.meta}>
                        <span style={casesStyles.sector}>{c.sector}</span>
                        <span>·</span>
                        <span>{c.year}</span>
                        <span className="badge badge--amber" style={{marginLeft: "auto"}}>Em destaque</span>
                      </div>
                      <h3 style={{ ...casesStyles.title, ...casesStyles.titleLg }}>{c.title}</h3>
                      <p style={{ ...casesStyles.desc, ...casesStyles.descLg }}>{c.desc}</p>
                      <div style={casesStyles.arrow}>Leia o estudo completo →</div>
                    </div>
                    <div style={casesStyles.cardFeaturedRight}>
                      {c.stats.map((s, j) => (
                        <div key={j} style={casesStyles.statBlock}>
                          <div style={{ ...casesStyles.statValue, ...casesStyles.statValueLg }}>{s.v}</div>
                          <div style={casesStyles.statLabel}>{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={casesStyles.meta}>
                      <span style={casesStyles.sector}>{c.sector}</span>
                      <span>·</span>
                      <span>{c.year}</span>
                    </div>
                    <h3 style={casesStyles.title}>{c.title}</h3>
                    <p style={casesStyles.desc}>{c.desc}</p>
                    <div style={casesStyles.stats}>
                      {c.stats.map((s, j) => (
                        <div key={j} style={casesStyles.statBlock}>
                          <div style={casesStyles.statValue}>{s.v}</div>
                          <div style={casesStyles.statLabel}>{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.Cases = Cases;
