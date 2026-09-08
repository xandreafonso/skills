/* global React */

const aboutStyles = {
  section: { padding: "120px 32px", borderBottom: "1px solid var(--color-border)" },
  inner: {
    maxWidth: "var(--container-wide)", margin: "0 auto",
    display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start",
  },
  left: { position: "sticky", top: 100 },
  portrait: {
    aspectRatio: "3 / 4",
    background: "linear-gradient(135deg, var(--navy-700), var(--navy-900))",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    position: "relative", overflow: "hidden",
    display: "flex", alignItems: "flex-end", padding: 24,
  },
  portraitOverlay: {
    position: "absolute", inset: 0,
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)," +
      "linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  },
  portraitLabel: {
    position: "relative", zIndex: 1,
    fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-fg-subtle)",
    letterSpacing: "0.08em", textTransform: "uppercase",
  },
  caption: {
    fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-fg-subtle)",
    letterSpacing: "0.04em", marginTop: 12, lineHeight: 1.5,
  },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-accent)", marginBottom: 24,
  },
  h2: {
    fontSize: 44, fontWeight: 600, letterSpacing: "-0.025em",
    lineHeight: 1.1, margin: "0 0 32px", color: "var(--color-fg)",
  },
  p: {
    fontSize: 17, lineHeight: 1.65, color: "var(--color-fg-muted)",
    marginBottom: 20, textWrap: "pretty",
  },
  pStrong: { color: "var(--color-fg)" },
  skillsHeader: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.08em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)",
    marginTop: 48, marginBottom: 16,
  },
  skills: { display: "flex", flexWrap: "wrap", gap: 8 },
};

function About() {
  return (
    <section style={aboutStyles.section} id="sobre">
      <div style={aboutStyles.inner}>
        <div style={aboutStyles.left}>
          <div style={aboutStyles.portrait}>
            <div style={aboutStyles.portraitOverlay} />
            <span style={aboutStyles.portraitLabel}>retrato · placeholder</span>
          </div>
          <div style={aboutStyles.caption}>São Paulo, 2026 · foto por substituir</div>
        </div>
        <div>
          <div style={aboutStyles.eyebrow}>— Sobre</div>
          <h2 style={aboutStyles.h2}>Consultor solo. Foco em IA aplicada para PMEs e prestadores de serviço.</h2>
          <p style={aboutStyles.p}>
            Trabalho hands-on. Entro junto com o seu time, <span style={aboutStyles.pStrong}>documento o processo atual</span> (ou o projeto novo), identifico onde a IA agrega valor real e implemento a solução com a qualidade e o prazo combinados.
          </p>
          <p style={aboutStyles.p}>
            Cada solução é construída para o seu contexto. O que funciona para um cliente pode não funcionar para você — então não chego com pacote pronto nem com ferramenta pré-escolhida. <span style={aboutStyles.pStrong}>A stack é decidida depois do diagnóstico</span>, não antes.
          </p>
          <p style={aboutStyles.p}>
            Você fala diretamente comigo, do primeiro contato até o hand-off. Sem time intermediário, sem revenda de licença, sem contrato anual amarrado.
          </p>
          <div style={aboutStyles.skillsHeader}>Áreas de atuação</div>
          <div style={aboutStyles.skills}>
            <span className="badge badge--neutral">Agentes autônomos</span>
            <span className="badge badge--neutral">Automação de processos</span>
            <span className="badge badge--neutral">Documentação de processo</span>
            <span className="badge badge--neutral">Arquitetura de solução</span>
            <span className="badge badge--neutral">Integração de sistemas</span>
            <span className="badge badge--neutral">N8N · Kestra</span>
            <span className="badge badge--neutral">Claude Code · Deep Agents</span>
            <span className="badge badge--neutral">Hospedagem e operação</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
