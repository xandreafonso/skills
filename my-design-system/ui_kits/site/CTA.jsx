/* global React */

const ctaStyles = {
  section: { padding: "120px 32px", borderBottom: "1px solid var(--color-border)" },
  inner: {
    maxWidth: "var(--container-wide)", margin: "0 auto",
    display: "grid", gridTemplateColumns: "1.2fr 1fr",
    gap: 96, alignItems: "center",
  },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-accent)", marginBottom: 24,
  },
  h2: {
    fontSize: "clamp(36px, 4.2vw, 56px)",
    fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05,
    margin: "0 0 24px", textWrap: "balance",
  },
  p: { fontSize: 18, lineHeight: 1.6, color: "var(--color-fg-muted)", marginBottom: 40 },
  ctas: { display: "flex", gap: 12 },
  card: {
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    padding: 32, display: "flex", flexDirection: "column", gap: 8,
  },
  cardEyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.08em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)", marginBottom: 16,
  },
  row: {
    display: "flex", justifyContent: "space-between", alignItems: "baseline",
    padding: "16px 0", borderBottom: "1px solid var(--color-border)",
  },
  rowLast: { borderBottom: "none" },
  rowLabel: { fontSize: 13, color: "var(--color-fg-muted)" },
  rowValue: {
    fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-fg)",
    fontVariantNumeric: "tabular-nums",
  },
  rowValueAccent: { color: "var(--color-accent)" },
  fineprint: {
    marginTop: 16, fontSize: 12, color: "var(--color-fg-subtle)", lineHeight: 1.55,
  },
};

function CTA() {
  return (
    <section style={ctaStyles.section} id="contato">
      <div style={ctaStyles.inner}>
        <div>
          <div style={ctaStyles.eyebrow}>— Próximo passo</div>
          <h2 style={ctaStyles.h2}>Uma conversa para entender o seu processo.</h2>
          <p style={ctaStyles.p}>
            Sem briefing prévio. Você descreve o que quer melhorar ou construir, eu pergunto o que precisar. Saio com uma leitura clara se a IA resolve no seu caso — e digo na mesma reunião se não for.
          </p>
          <div style={ctaStyles.ctas}>
            <button className="btn btn--primary btn--lg">Marcar conversa →</button>
            <button className="btn btn--ghost btn--lg">contato@alexandre.ai</button>
          </div>
        </div>
        <div style={ctaStyles.card}>
          <div style={ctaStyles.cardEyebrow}>Como funciona</div>
          <div style={ctaStyles.row}>
            <span style={ctaStyles.rowLabel}>Formato</span>
            <span style={ctaStyles.rowValue}>Vídeo · 30 min</span>
          </div>
          <div style={ctaStyles.row}>
            <span style={ctaStyles.rowLabel}>Quem participa</span>
            <span style={ctaStyles.rowValue}>Você + responsável técnico</span>
          </div>
          <div style={ctaStyles.row}>
            <span style={ctaStyles.rowLabel}>Preparação</span>
            <span style={ctaStyles.rowValue}>nenhuma</span>
          </div>
          <div style={ctaStyles.row}>
            <span style={ctaStyles.rowLabel}>Custo da conversa</span>
            <span style={{ ...ctaStyles.rowValue, ...ctaStyles.rowValueAccent }}>R$ 0</span>
          </div>
          <div style={{ ...ctaStyles.row, ...ctaStyles.rowLast }}>
            <span style={ctaStyles.rowLabel}>Compromisso depois</span>
            <span style={ctaStyles.rowValue}>nenhum</span>
          </div>
          <p style={ctaStyles.fineprint}>
            Se eu achar que outra pessoa atende melhor, indico. Você sai da conversa com uma direção, contratando ou não.
          </p>
        </div>
      </div>
    </section>
  );
}

window.CTA = CTA;
