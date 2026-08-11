/* global React */
const { useState: useStateBN } = React;

const blogNavStyles = {
  bar: {
    position: "sticky", top: 0, zIndex: 50,
    background: "rgba(6, 11, 22, 0.82)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    borderBottom: "1px solid var(--color-border)",
  },
  inner: {
    maxWidth: "var(--container-wide)", margin: "0 auto",
    padding: "14px 32px",
    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32,
  },
  brand: { display: "flex", alignItems: "baseline", gap: 12, color: "var(--color-fg)", textDecoration: "none" },
  brandName: { fontSize: 16, fontWeight: 600, letterSpacing: "-0.02em" },
  brandSlash: { color: "var(--color-fg-subtle)" },
  brandSection: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-accent)",
  },
  links: { display: "flex", gap: 28 },
  link: {
    fontSize: 13, color: "var(--color-fg-muted)", textDecoration: "none",
    fontWeight: 500, padding: "6px 0",
  },
  linkActive: { color: "var(--color-fg)", boxShadow: "inset 0 -1px 0 var(--color-accent)" },
};

function BlogNav({ active = "posts", onNav, mode = "index", onBack }) {
  return (
    <nav style={blogNavStyles.bar}>
      <div style={blogNavStyles.inner}>
        <a href="#" style={blogNavStyles.brand} onClick={(e) => { e.preventDefault(); onBack && onBack(); }}>
          <span style={blogNavStyles.brandName}>Alexandre</span>
          <span style={blogNavStyles.brandSlash}>/</span>
          <span style={blogNavStyles.brandSection}>Posts</span>
        </a>
        <div style={blogNavStyles.links}>
          <a href="#" style={{ ...blogNavStyles.link, ...(active === "posts" ? blogNavStyles.linkActive : {}) }}>Posts</a>
          <a href="#" style={blogNavStyles.link}>Sobre</a>
          <a href="#" style={blogNavStyles.link}>Newsletter</a>
          <a href="#" style={blogNavStyles.link}>RSS</a>
        </div>
        {mode === "article" ? (
          <button className="btn btn--ghost btn--sm" onClick={onBack}>← Todos os posts</button>
        ) : (
          <button className="btn btn--secondary btn--sm">Assinar</button>
        )}
      </div>
    </nav>
  );
}

window.BlogNav = BlogNav;
