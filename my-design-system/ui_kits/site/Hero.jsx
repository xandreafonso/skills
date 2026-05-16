/* global React */

const heroStyles = {
  section: {
    position: "relative",
    padding: "120px 32px 96px",
    borderBottom: "1px solid var(--color-border)",
    overflow: "hidden",
  },
  grid: {
    position: "absolute", inset: 0,
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), " +
      "linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    maskImage: "radial-gradient(ellipse 80% 60% at 30% 40%, black 30%, transparent 75%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 30% 40%, black 30%, transparent 75%)",
    pointerEvents: "none",
  },
  inner: { position: "relative", maxWidth: "var(--container-wide)", margin: "0 auto" },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-accent)", marginBottom: 28,
    display: "flex", alignItems: "center", gap: 12,
  },
  eyebrowDot: {
    width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)",
    boxShadow: "0 0 12px rgba(245,158,11,0.6)",
  },
  h1: {
    fontSize: "clamp(48px, 7.2vw, 96px)",
    fontWeight: 500,
    letterSpacing: "-0.04em",
    lineHeight: 0.98,
    margin: "0 0 32px",
    maxWidth: 1080,
  },
  h1Accent: { color: "var(--color-accent)", fontStyle: "normal" },
  lede: {
    fontSize: 22, lineHeight: 1.55, color: "var(--color-fg-muted)",
    maxWidth: 640, margin: "0 0 48px", letterSpacing: "-0.012em",
    fontWeight: 400,
  },
  ctas: { display: "flex", gap: 12, marginBottom: 80 },
  kpis: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 0,
    borderTop: "1px solid var(--color-border)",
    paddingTop: 32,
    maxWidth: 880,
  },
  kpi: { padding: "0 32px 0 0", borderRight: "1px solid var(--color-border)" },
  kpiLast: { padding: "0 0 0 32px", border: "none" },
  kpiMid: { padding: "0 32px", borderRight: "1px solid var(--color-border)" },
  kpiValue: {
    fontFamily: "var(--font-sans)",
    fontVariantNumeric: "tabular-nums",
    fontSize: 44, fontWeight: 500, letterSpacing: "-0.04em",
    color: "var(--color-fg)", lineHeight: 1,
    marginBottom: 8,
  },
  kpiUnit: { fontSize: 22, color: "var(--color-fg-muted)" },
  kpiLabel: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.08em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)",
  },
};

function Hero() {
  return (
    <section style={heroStyles.section} id="inicio">
      <div style={heroStyles.grid} />
      <div style={heroStyles.inner}>
        <div style={heroStyles.eyebrow}>
          <span style={heroStyles.eyebrowDot} />
          Consultoria em IA · prestadores de serviço & PMEs
        </div>
        <h1 style={heroStyles.h1}>
          É a inteligência orgânica que faz a <em style={heroStyles.h1Accent}>IA funcionar</em>.
        </h1>
        <p style={heroStyles.lede}>
          Mapeio o seu processo, identifico onde a IA resolve de verdade e implemento isso — sem enrolação. Cada solução é construída para o seu contexto.
        </p>
        <div style={heroStyles.ctas}>
          <button className="btn btn--primary btn--lg">
            Conversar sobre o seu processo
            <span aria-hidden="true" style={{marginLeft: 4}}>→</span>
          </button>
          <button className="btn btn--secondary btn--lg">Como trabalho</button>
        </div>
        <div style={heroStyles.kpis}>
          <div style={heroStyles.kpi}>
            <div style={heroStyles.kpiValue}>1</div>
            <div style={heroStyles.kpiLabel}>consultor · 1 ponto de contato</div>
          </div>
          <div style={heroStyles.kpiMid}>
            <div style={heroStyles.kpiValue}>3</div>
            <div style={heroStyles.kpiLabel}>fases · escopo fechado</div>
          </div>
          <div style={heroStyles.kpiLast}>
            <div style={heroStyles.kpiValue}>0</div>
            <div style={heroStyles.kpiLabel}>contrato anual · sem amarra</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
