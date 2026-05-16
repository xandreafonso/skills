/* global React */
const { useState } = React;

const navStyles = {
  bar: {
    position: "sticky", top: 0, zIndex: 50,
    background: "rgba(6, 11, 22, 0.78)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    borderBottom: "1px solid var(--color-border)",
  },
  inner: {
    maxWidth: "var(--container-wide)",
    margin: "0 auto",
    padding: "16px 32px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    gap: 32,
  },
  brand: {
    display: "flex", flexDirection: "column", lineHeight: 1, color: "var(--color-fg)",
    textDecoration: "none",
  },
  brandName: { fontSize: 17, fontWeight: 600, letterSpacing: "-0.025em" },
  brandRole: {
    fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 500,
    letterSpacing: "0.32em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)", marginTop: 4,
  },
  brandRoleIA: { color: "var(--color-accent)" },
  links: { display: "flex", gap: 28 },
  link: {
    fontSize: 13, color: "var(--color-fg-muted)", textDecoration: "none",
    fontWeight: 500, transition: "color 160ms",
  },
  linkActive: { color: "var(--color-fg)" },
};

function Nav({ active = "inicio" }) {
  const [hover, setHover] = useState(null);
  const items = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "metodo", label: "Como trabalho" },
    { id: "casos", label: "Trabalhos" },
    { id: "principios", label: "Princípios" },
  ];
  return (
    <nav style={navStyles.bar}>
      <div style={navStyles.inner}>
        <a href="#" style={navStyles.brand}>
          <span style={navStyles.brandName}>Alexandre</span>
          <span style={navStyles.brandRole}>
            Consultor<span style={navStyles.brandRoleIA}>IA</span>
          </span>
        </a>
        <div style={navStyles.links}>
          {items.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                ...navStyles.link,
                ...(active === item.id || hover === item.id ? navStyles.linkActive : {}),
              }}
              onMouseEnter={() => setHover(item.id)}
              onMouseLeave={() => setHover(null)}
            >{item.label}</a>
          ))}
        </div>
        <button className="btn btn--primary btn--sm">Conversar</button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
