/* global React */

const postCardStyles = {
  card: {
    display: "flex", flexDirection: "column", gap: 16,
    padding: "32px 0", borderBottom: "1px solid var(--color-border)",
    textDecoration: "none", color: "inherit",
    cursor: "pointer",
  },
  cardFirst: { paddingTop: 0 },
  meta: {
    display: "flex", gap: 16, alignItems: "center",
    fontFamily: "var(--font-mono)", fontSize: 11,
    letterSpacing: "0.08em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)",
  },
  metaCategory: { color: "var(--color-accent)" },
  metaSep: { width: 4, height: 1, background: "currentColor", display: "inline-block" },
  title: {
    fontSize: 28, fontWeight: 600, letterSpacing: "-0.022em",
    lineHeight: 1.15, color: "var(--color-fg)", margin: 0,
    transition: "color 160ms",
  },
  titleHover: { color: "var(--color-accent)" },
  excerpt: {
    fontSize: 15, lineHeight: 1.6, color: "var(--color-fg-muted)",
    margin: 0, maxWidth: 720,
  },
  /* featured variant */
  featured: {
    display: "grid", gridTemplateColumns: "1.4fr 1fr",
    gap: 56, paddingTop: 0, paddingBottom: 48,
    marginBottom: 24, borderBottom: "1px solid var(--color-border-strong)",
  },
  featuredVisual: {
    position: "relative",
    background: "var(--navy-800)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    aspectRatio: "4 / 3",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)," +
      "linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  featuredVisualText: {
    fontFamily: "var(--font-mono)", fontSize: 16, letterSpacing: "0.12em",
    color: "var(--color-fg-subtle)", textTransform: "uppercase",
    padding: "6px 14px", border: "1px solid var(--color-border-strong)",
    borderRadius: "var(--radius-pill)",
  },
  featuredBody: { display: "flex", flexDirection: "column", justifyContent: "center" },
};

function PostCard({ post, featured, isFirst, onOpen }) {
  const [hover, setHover] = React.useState(false);
  if (featured) {
    return (
      <a href="#" style={postCardStyles.featured}
         onClick={(e) => { e.preventDefault(); onOpen && onOpen(post); }}
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div style={postCardStyles.featuredVisual}>
          <span style={postCardStyles.featuredVisualText}>{post.cover}</span>
        </div>
        <div style={postCardStyles.featuredBody}>
          <div style={{ ...postCardStyles.meta, marginBottom: 20 }}>
            <span style={postCardStyles.metaCategory}>★ Em destaque</span>
            <span style={postCardStyles.metaSep} />
            <span>{post.category}</span>
            <span style={postCardStyles.metaSep} />
            <span>{post.date}</span>
            <span style={postCardStyles.metaSep} />
            <span>{post.readTime} min</span>
          </div>
          <h2 style={{ ...postCardStyles.title, fontSize: 38, marginBottom: 16, ...(hover ? postCardStyles.titleHover : {}) }}>
            {post.title}
          </h2>
          <p style={postCardStyles.excerpt}>{post.excerpt}</p>
        </div>
      </a>
    );
  }
  return (
    <a href="#" style={{ ...postCardStyles.card, ...(isFirst ? postCardStyles.cardFirst : {}) }}
       onClick={(e) => { e.preventDefault(); onOpen && onOpen(post); }}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={postCardStyles.meta}>
        <span style={postCardStyles.metaCategory}>{post.category}</span>
        <span style={postCardStyles.metaSep} />
        <span>{post.date}</span>
        <span style={postCardStyles.metaSep} />
        <span>{post.readTime} min</span>
      </div>
      <h3 style={{ ...postCardStyles.title, ...(hover ? postCardStyles.titleHover : {}) }}>{post.title}</h3>
      <p style={postCardStyles.excerpt}>{post.excerpt}</p>
    </a>
  );
}

window.PostCard = PostCard;
