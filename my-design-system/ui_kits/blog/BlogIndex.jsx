/* global React */

const blogIndexStyles = {
  wrap: { padding: "64px 32px 120px" },
  inner: { maxWidth: "var(--container-wide)", margin: "0 auto" },
  header: { marginBottom: 56 },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-accent)", marginBottom: 16,
  },
  h1: {
    fontSize: 48, fontWeight: 600, letterSpacing: "-0.03em",
    lineHeight: 1.05, margin: "0 0 16px",
  },
  lede: { fontSize: 18, color: "var(--color-fg-muted)", lineHeight: 1.55, maxWidth: 580 },
  layout: { display: "grid", gridTemplateColumns: "1fr 240px", gap: 64, alignItems: "start" },
  list: { display: "flex", flexDirection: "column" },
  sidebar: { position: "sticky", top: 84 },
};

function BlogIndex({ posts, tags, activeTag, onTagChange, onOpenPost }) {
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);
  return (
    <div style={blogIndexStyles.wrap}>
      <div style={blogIndexStyles.inner}>
        <div style={blogIndexStyles.header}>
          <div style={blogIndexStyles.eyebrow}>— Posts</div>
          <h1 style={blogIndexStyles.h1}>O que aprendo aplicando IA na prática.</h1>
          <p style={blogIndexStyles.lede}>Casos, decisões técnicas e o raciocínio por trás de cada uma. Em português, para quem quer entender, não só ler manchete.</p>
        </div>
        <div style={blogIndexStyles.layout}>
          <div style={blogIndexStyles.list}>
            {featured && <PostCard post={featured} featured onOpen={onOpenPost} />}
            {rest.map((p, i) => (
              <PostCard key={p.slug} post={p} isFirst={i === 0} onOpen={onOpenPost} />
            ))}
          </div>
          <aside style={blogIndexStyles.sidebar}>
            <TagFilter tags={tags} active={activeTag} onChange={onTagChange} />
            <NewsletterCTA />
          </aside>
        </div>
      </div>
    </div>
  );
}

window.BlogIndex = BlogIndex;
