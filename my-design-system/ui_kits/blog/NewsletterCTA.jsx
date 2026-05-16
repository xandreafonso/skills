/* global React */

const newsletterStyles = {
  card: {
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    padding: 24, marginTop: 32,
  },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-accent)", marginBottom: 16,
  },
  h3: {
    fontSize: 18, fontWeight: 600, letterSpacing: "-0.018em",
    lineHeight: 1.25, color: "var(--color-fg)", margin: "0 0 8px",
  },
  p: { fontSize: 13, lineHeight: 1.55, color: "var(--color-fg-muted)", margin: "0 0 16px" },
  row: { display: "flex", gap: 8 },
  input: { flex: 1 },
  meta: {
    marginTop: 14, fontFamily: "var(--font-mono)", fontSize: 10,
    letterSpacing: "0.04em", color: "var(--color-fg-subtle)",
    display: "flex", gap: 12,
  },
};

function NewsletterCTA() {
  return (
    <div style={newsletterStyles.card}>
      <div style={newsletterStyles.eyebrow}>— Newsletter</div>
      <h3 style={newsletterStyles.h3}>Um post a cada duas sextas.</h3>
      <p style={newsletterStyles.p}>
        Um caso, uma decisão técnica ou um aprendizado prático. Sem dump de notícias.
      </p>
      <form style={newsletterStyles.row} onSubmit={(e) => e.preventDefault()}>
        <input className="input" style={newsletterStyles.input} type="email" placeholder="seu@email.com" />
        <button className="btn btn--primary" type="submit">Assinar</button>
      </form>
      <div style={newsletterStyles.meta}>
        <span>em PT-BR</span>
        <span>·</span>
        <span>sem spam, sem venda</span>
      </div>
    </div>
  );
}

window.NewsletterCTA = NewsletterCTA;
