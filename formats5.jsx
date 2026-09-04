// formats5.jsx – Formate (live): drei Zugänge.
// Strategy · Sparring · Umsetzung. Second Opinion ist ein eigenes Kapitel (secondopinion5.jsx).
// Format-Namen als Handschrift-Wordmark (Fallback: Skript-Type, wo SVG fehlt).
const FORMATS5 = {
  de: {
    label: "Formate",
    title: "drei zugänge.",
    lede: "Dieselbe Arbeit – verschiedene Formen des Zugangs.",
    fine: "Arbeitsweisen, keine Pakete.",
    items: [
      {
        wm: "strategy",
        script: "strategy",
        name: "Strategieprojekte",
        line: "Von der Analyse bis zur Umsetzungsführung.",
        p: "Klare Aufgabe, klares Ergebnis. Marken- und Kommunikationsstrategie: Positionierung, Konzept, Roadmap – und die Führung der Gewerke, bis das Ergebnis steht.",
      },
      {
        wm: "sparring",
        script: "sparring",
        name: "Sparring",
        line: "Laufender Partner für Kommunikationsverantwortliche.",
        p: "Sparring heißt: Denken auf Augenhöhe. Keine Folien, sondern Fragen. Gespräche, die Umwege nehmen dürfen, weil dort oft die besseren Antworten liegen. Aus zwei Jahrzehnten Marken- und Kommunikationsarbeit – und einer Herkunft, die im Gestalten liegt, nicht im Verwalten.",
      },
      {
        wm: "execution",
        script: "execution",
        name: "Umsetzung",
        line: "Konzept und Umsetzung aus einer Hand – oder mit dem Netzwerk.",
        p: "Kleinere Vorhaben entstehen direkt: Strategie, Konzept und Gestaltung in einer Hand, aus einer Herkunft im Gestalten und beschleunigt durch KI-gestützte Prozesse. Für mittelständische Aufgaben – etwa die Marke eines Architekturbüros – heißt das Positionierung bis fertiges Ergebnis, ohne Reibungsverlust. Wird es größer oder komplexer, führt das Netzwerk die Umsetzung.",
      },
    ],
  },
  en: {
    label: "Formats",
    title: "three ways in.",
    lede: "The same work – different forms of access.",
    fine: "Ways of working, not packages.",
    items: [
      {
        wm: "strategy",
        script: "strategy",
        name: "Strategy projects",
        line: "From analysis through to directing execution.",
        p: "Clear task, clear result. Brand and communication strategy: positioning, concept, roadmap – and the direction of the disciplines until the result stands.",
      },
      {
        wm: "sparring",
        script: "sparring",
        name: "Sparring",
        line: "An ongoing partner for communication leads.",
        p: "Sparring means thinking at eye level. No slides – questions. Conversations allowed to take detours, because that is often where the better answers sit. Drawn from two decades of brand and communications work – and from origins in making, not administering.",
      },
      {
        wm: "execution",
        script: "execution",
        name: "Execution",
        line: "Concept and delivery from one hand – or with the network.",
        p: "Smaller undertakings take shape directly: strategy, concept and design in one hand, from origins in making and accelerated by AI-supported processes. For mid-sized tasks – the brand of an architecture practice, say – that means positioning through to finished result, without friction. When it grows larger or more complex, the network carries the delivery.",
      },
    ],
  },
};

function FormatsSection({ lang }) {
  const d = FORMATS5[lang] || FORMATS5.de;
  return (
    <section className="section section-formats" id="formats" data-screen-label="Formate">
      <div className="prose">
        <div className="section-label">
          <span className="rule"></span><span className="label-text">{d.label}</span><span className="rule"></span>
        </div>
        <h2 className="section-title">{d.title}</h2>
        <p className="section-lede">{d.lede}</p>
      </div>

      <div className="formats-grid">
        {d.items.map((f, i) => (
          <article className="format" key={i}>
            <span className="f-script"><Wordmark name={f.wm} label={f.script} /></span>
            <h3 className="f-name">{f.name}</h3>
            <p className="f-line">{f.line}</p>
            <p className="f-p">{f.p}</p>
            {f.fine ? <p className="f-fine">{f.fine}</p> : null}
          </article>
        ))}
      </div>


      <p className="formats-fine">{d.fine}</p>
    </section>
  );
}

window.FormatsSection = FormatsSection;
