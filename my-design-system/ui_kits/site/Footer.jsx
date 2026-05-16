/* global React */

const footerStyles = {
  footer: { padding: "64px 32px 40px", background: "var(--navy-950)" },
  inner: { maxWidth: "var(--container-wide)", margin: "0 auto" },
  top: {
    display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
    gap: 48, paddingBottom: 56, borderBottom: "1px solid var(--color-border)",
  },
  brand: { display: "flex", flexDirection: "column" },
  brandName: { fontSize: 22, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1, color: "var(--color-fg)" },
  brandRole: {
    fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 500,
    letterSpacing: "0.32em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)", marginTop: 8,
  },
  brandRoleIA: { color: "var(--color-accent)" },
  brandTag: {
    marginTop: 24, fontSize: 13, color: "var(--color-fg-muted)",
    lineHeight: 1.6, maxWidth: 320,
  },
  col: { display: "flex", flexDirection: "column", gap: 12 },
  colTitle: {
    fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)", marginBottom: 8,
  },
  link: {
    fontSize: 13, color: "var(--color-fg-muted)", textDecoration: "none",
  },
  bottom: {
    paddingTop: 24, display: "flex", justifyContent: "space-between",
    alignItems: "center", flexWrap: "wrap", gap: 12,
    fontFamily: "var(--font-mono)", fontSize: 11,
    letterSpacing: "0.04em", color: "var(--color-fg-subtle)",
  },
};

function Footer() {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.inner}>
        <div style={footerStyles.top}>
          <div style={footerStyles.brand}>
            <span style={footerStyles.brandName}>Alexandre</span>
            <span style={footerStyles.brandRole}>Consultor<span style={footerStyles.brandRoleIA}>IA</span></span>
            <span style={footerStyles.brandTag}>
              Consultoria solo em IA aplicada para prestadores de serviço e pequenas e médias empresas. Documentação, arquitetura e implementação sob medida.
            </span>
          </div>
          <div style={footerStyles.col}>
            <div style={footerStyles.colTitle}>Navegar</div>
            <a href="#sobre" style={footerStyles.link}>Sobre</a>
            <a href="#metodo" style={footerStyles.link}>Como trabalho</a>
            <a href="#casos" style={footerStyles.link}>Trabalhos</a>
            <a href="#principios" style={footerStyles.link}>Princípios</a>
          </div>
          <div style={footerStyles.col}>
            <div style={footerStyles.colTitle}>Conteúdo</div>
            <a href="#" style={footerStyles.link}>Posts</a>
            <a href="#" style={footerStyles.link}>Palestras</a>
            <a href="#" style={footerStyles.link}>Newsletter quinzenal</a>
          </div>
          <div style={footerStyles.col}>
            <div style={footerStyles.colTitle}>Contato</div>
            <a href="mailto:contato@alexandre.ai" style={footerStyles.link}>contato@alexandre.ai</a>
            <a href="#" style={footerStyles.link}>LinkedIn</a>
            <a href="#" style={footerStyles.link}>GitHub</a>
          </div>
        </div>
        <div style={footerStyles.bottom}>
          <span>© 2026 Alexandre Afonso · CNPJ sob consulta</span>
          <span>São Paulo · BR · UTC−3</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
