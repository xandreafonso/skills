/* global React */

const tagFilterStyles = {
  wrap: { display: "flex", flexDirection: "column", gap: 8 },
  title: {
    fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)", marginBottom: 12,
  },
  item: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "8px 10px", borderRadius: "var(--radius-sm)",
    fontSize: 13, color: "var(--color-fg-muted)",
    cursor: "pointer", transition: "background 160ms, color 160ms",
    fontFamily: "var(--font-sans)",
  },
  itemActive: { background: "var(--color-surface)", color: "var(--color-fg)" },
  count: {
    fontFamily: "var(--font-mono)", fontSize: 11,
    color: "var(--color-fg-subtle)",
  },
  countActive: { color: "var(--color-accent)" },
};

function TagFilter({ tags, active, onChange }) {
  return (
    <div style={tagFilterStyles.wrap}>
      <div style={tagFilterStyles.title}>Tópicos</div>
      {tags.map((t) => {
        const isActive = active === t.id;
        return (
          <div key={t.id}
               style={{ ...tagFilterStyles.item, ...(isActive ? tagFilterStyles.itemActive : {}) }}
               onClick={() => onChange(t.id)}>
            <span>{t.label}</span>
            <span style={{ ...tagFilterStyles.count, ...(isActive ? tagFilterStyles.countActive : {}) }}>
              {String(t.count).padStart(2, "0")}
            </span>
          </div>
        );
      })}
    </div>
  );
}

window.TagFilter = TagFilter;
