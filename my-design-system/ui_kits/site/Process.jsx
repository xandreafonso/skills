/* global React */

const processStyles = {
  section: { padding: "120px 32px", borderBottom: "1px solid var(--color-border)" },
  inner: { maxWidth: "var(--container-wide)", margin: "0 auto" },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-accent)", marginBottom: 24,
  },
  h2: {
    fontSize: 44, fontWeight: 600, letterSpacing: "-0.025em",
    lineHeight: 1.1, margin: "0 0 24px", maxWidth: 720,
  },
  lede: {
    fontSize: 18, lineHeight: 1.6, color: "var(--color-fg-muted)",
    maxWidth: 640, margin: "0 0 80px",
  },
  steps: {
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
    gap: 0, position: "relative",
  },
  step: {
    padding: "32px 32px 32px 0",
    borderRight: "1px solid var(--color-border)",
    position: "relative",
  },
  stepLast: {
    padding: "32px 0 32px 32px",
    border: "none",
  },
  stepMid: { padding: "32px" },
  stepNum: {
    fontFamily: "var(--font-mono)", fontSize: 11,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--color-accent)", marginBottom: 24,
  },
  stepTitle: {
    fontSize: 26, fontWeight: 600, letterSpacing: "-0.018em",
    color: "var(--color-fg)", marginBottom: 16, lineHeight: 1.15,
  },
  stepDesc: {
    fontSize: 14, lineHeight: 1.6, color: "var(--color-fg-muted)",
    marginBottom: 24,
  },
  stepList: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 },
  stepLi: {
    fontSize: 13, color: "var(--color-fg-muted)",
    display: "flex", alignItems: "flex-start", gap: 10,
    fontFamily: "var(--font-mono)",
  },
  stepLiDot: {
    width: 4, height: 4, borderRadius: "50%",
    background: "var(--color-fg-subtle)",
    marginTop: 7, flexShrink: 0,
  },
  stepDuration: {
    marginTop: 28, paddingTop: 20,
    borderTop: "1px dashed var(--color-border-strong)",
    fontFamily: "var(--font-mono)", fontSize: 11,
    letterSpacing: "0.08em", textTransform: "uppercase",
    color: "var(--color-fg-subtle)",
    display: "flex", justifyContent: "space-between",
  },
  stepDurationValue: { color: "var(--color-fg)" },
};

const steps = [
  {
    num: "01 — Entender",
    title: "Reunião, coleta de materiais e análise do processo.",
    desc: "Quero ver como funciona hoje antes de propor qualquer coisa. Documento o processo atual ou o projeto novo com você no detalhe.",
    items: [
      "Reuniões com quem opera e quem decide",
      "Coleta de materiais, sistemas e dados",
      "Análise dos pontos de fricção atuais",
      "Documento do processo / projeto",
    ],
    duration: "1 a 2 semanas",
  },
  {
    num: "02 — Planejar",
    title: "Diagnóstico, plano de ação e arquitetura.",
    desc: "Identifico onde a IA resolve de verdade — e onde não vale. Saio com plano de ação e arquitetura da solução proposta.",
    items: [
      "Diagnóstico dos problemas e riscos",
      "Plano de ação com escopo e prioridades",
      "Arquitetura da solução proposta",
      "Escolha justificada de ferramentas",
    ],
    duration: "1 semana",
  },
  {
    num: "03 — Implementar",
    title: "Construo a solução, integro e entrego em operação.",
    desc: "Implemento de acordo com a qualidade e o prazo combinados. Você acompanha o progresso e o hand-off é documentado.",
    items: [
      "Implementação em ciclos curtos",
      "Integração com seus sistemas",
      "Validação contra casos reais",
      "Hand-off + treinamento do time",
    ],
    duration: "4 a 8 semanas",
  },
];

function Process() {
  return (
    <section style={processStyles.section} id="metodo">
      <div style={processStyles.inner}>
        <div style={processStyles.eyebrow}>— Como trabalho</div>
        <h2 style={processStyles.h2}>Três fases. Cada uma com entrega clara no fim.</h2>
        <p style={processStyles.lede}>
          Você sabe o que vai receber em cada fase, qual o prazo e qual o investimento. Adapto a profundidade ao seu contexto, não a estrutura.
        </p>
        <div style={processStyles.steps}>
          {steps.map((step, i) => (
            <div key={i} style={i === 0 ? processStyles.step : i === 1 ? processStyles.stepMid : processStyles.stepLast}>
              <div style={processStyles.stepNum}>{step.num}</div>
              <h3 style={processStyles.stepTitle}>{step.title}</h3>
              <p style={processStyles.stepDesc}>{step.desc}</p>
              <ul style={processStyles.stepList}>
                {step.items.map((it, j) => (
                  <li key={j} style={processStyles.stepLi}>
                    <span style={processStyles.stepLiDot} />{it}
                  </li>
                ))}
              </ul>
              <div style={processStyles.stepDuration}>
                <span>Duração</span>
                <span style={processStyles.stepDurationValue}>{step.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Process = Process;
