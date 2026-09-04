// core5.jsx – Kern (v5): + Kreative-Herkunft-Satz (Briefing v3, 3a).
const CORE5 = {
  de: {
    label: "Der Kern",
    title: "eine disziplin.",
    lede: "Marken- und Kommunikationsstrategie: Verdichtung, Positionierung, Konzept – und die Führung der Umsetzung.",
    statement: "Sichtbar machen, was schon da ist.",
    note: "Keine Repositionierung. Verdichtung und Übersetzung der Strategie, die in einer Organisation oft schon existiert – nur unausgesprochen.",
    philosophy: <>Schwächen kennen. Stärken erkennen. <span className="accent">Dann strategisch darauf aufbauen.</span></>,
    origin: "Analytisch in der Sache, kreativ im Weg dorthin – Verdichtung braucht beides: das Zerlegen und das überraschende Neu-Zusammensetzen.",
    practice: "Zwanzig Jahre Praxis in Marke und Kommunikation – im Konzern, über sieben Märkte, bis in die Umsetzung. Geblieben ist eine einfache Gewissheit: Strategie zählt erst, wenn sie sichtbar wird.",
  },
  en: {
    label: "The core",
    title: "one discipline.",
    lede: "Brand and communication strategy: distillation, positioning, concept – and the direction of execution.",
    statement: "Making visible what is already there.",
    note: "No repositioning. A distillation and translation of the strategy that often already exists inside an organisation – just unspoken.",
    philosophy: <>Know the weaknesses. Recognise the strengths. <span className="accent">Then build on them strategically.</span></>,
    origin: "Analytical in substance, creative in the route – condensing takes both: taking apart, and reassembling in ways not expected.",
    practice: "Twenty years of practice in brand and communication – inside a corporation, across seven markets, through to execution. What remains is a simple certainty: strategy only counts once it becomes visible.",
  },
};

function CoreSection({ lang }) {
  const d = CORE5[lang] || CORE5.de;
  return (
    <section className="section section-core" id="core" data-screen-label="Kern">
      <div className="prose">
        <div className="section-label">
          <span className="rule"></span><span className="label-text">{d.label}</span><span className="rule"></span>
        </div>
        <h2 className="section-title">{d.title}</h2>
        <p className="section-lede">{d.lede}</p>
      </div>

      <div className="core-wm">
        <Wordmark name="strategy" label="strategy" />
      </div>

      <div className="core-statement">
        <p>{d.statement}</p>
        <p className="core-note">{d.note}</p>
      </div>

      <div className="core-philosophy">
        <p>{d.philosophy}</p>
      </div>

      <div className="core-practice">
        <p>{d.origin}</p>
      </div>

      <div className="core-practice">
        <p>{d.practice}</p>
      </div>
    </section>
  );
}

window.CoreSection = CoreSection;
