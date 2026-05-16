/* global React */

const manifestoStyles = {
  section: {
    padding: "140px 32px",
    background: "var(--navy-950)",
    borderBottom: "1px solid var(--color-border)",
    position: "relative", overflow: "hidden",
  },
  glow: {
    position: "absolute", top: "-20%", right: "-10%", width: "60%", height: "120%",
    background: "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 55%)",
    pointerEvents: "none",
  },
  inner: {
    maxWidth: 920, margin: "0 auto", position: "relative",
  },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-accent)", marginBottom: 32,
  },
  quote: {
    fontSize: "clamp(28px, 3.6vw, 44px)",
    lineHeight: 1.25, letterSpacing: "-0.022em", fontWeight: 500,
    color: "var(--color-fg)", margin: "0 0 64px", textWrap: "balance",
  },
  quoteAccent: { color: "var(--color-accent)", fontStyle: "normal" },
  rules: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px 56px", marginTop: 48 },
  rule: { display: "flex", flexDirection: "column", gap: 8 },
  ruleNum: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)",
  },
  ruleTitle: {
    fontSize: 17, fontWeight: 600, letterSpacing: "-0.015em",
    color: "var(--color-fg)",
  },
  ruleDesc: {
    fontSize: 14, lineHeight: 1.6, color: "var(--color-fg-muted)",
  },
};

function Manifesto() {
  const rules = [
    { num: "01", title: "Processo primeiro, ferramenta depois.", desc: "Ferramenta certa muda em função do contexto. O processo bem documentado é o que sustenta a escolha." },
    { num: "02", title: "Explico o raciocínio.", desc: "Você sabe por que escolhi cada coisa. Não entrego só o resultado — entrego o raciocínio." },
    { num: "03", title: "O conhecimento fica com você.", desc: "Documentação clara, treinamento do time. Você não fica dependente de mim para ajustar a solução depois." },
    { num: "04", title: "Custo é parte da decisão.", desc: "Cada chamada de modelo é dinheiro. Otimizar custo de inferência é parte do trabalho, não detalhe técnico." },
  ];
  return (
    <section style={manifestoStyles.section} id="principios">
      <div style={manifestoStyles.glow} />
      <div style={manifestoStyles.inner}>
        <div style={manifestoStyles.eyebrow}>— Princípios</div>
        <h2 style={manifestoStyles.quote}>
          O que separa uma solução de IA que <em style={manifestoStyles.quoteAccent}>funciona</em> de uma demo bonita é o contexto: o processo que ninguém documentou, os dados que vivem em planilhas, as decisões que dependem de duas pessoas.
        </h2>
        <div style={manifestoStyles.rules}>
          {rules.map((r, i) => (
            <div key={i} style={manifestoStyles.rule}>
              <span style={manifestoStyles.ruleNum}>{r.num}</span>
              <span style={manifestoStyles.ruleTitle}>{r.title}</span>
              <span style={manifestoStyles.ruleDesc}>{r.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Manifesto = Manifesto;
