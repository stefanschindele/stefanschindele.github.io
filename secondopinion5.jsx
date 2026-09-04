// secondopinion5.jsx – Second Opinion als eigenes Kapitel, außerhalb der drei Formate.
// v6: drei Formen (Kurzcheck · Analyse · Begleitung), Grenze zum Strategieprojekt, Anlässe.
// EN übersetzt, noch nicht final freigegeben.
const SO_MAIL = "office@stefan-schindele.com";

const SECONDOPINION5 = {
  de: {
    label: "Second Opinion",
    title: "second opinion.",
    line: "Eine unabhängige Außensicht, bevor Budget und Öffentlichkeit daran hängen.",
    intro1: "Was hältst du davon? So beginnt es meistens. Ein Konzept, ein Skript, eine Präsentation, manchmal eine ganze Strategie – über den Tisch geschoben, bevor sie weitergeht.",
    intro2: "Die Antwort kommt von jemandem, der die Arbeit selbst gemacht hat, nicht nur beurteilt. Auf beiden Seiten des Tisches: im Konzern als Auftraggeber, in Agentur und Beratung als Lieferant.",
    formsLabel: "Drei Formen",
    forms: [
      { name: "Kurzcheck", p: "Ein einzelnes Werbemittel, ein Skript, ein Konzept. Ein Nachmittag Arbeit, ein Gespräch, eine schriftliche Einschätzung." },
      { name: "Analyse", p: "Strategien, Konzeptvorschläge, Designsysteme. Hier geht der Einarbeitung ein paar Tage voraus – dann Gespräch und ein Dokument mit Analyse und Empfehlung." },
      { name: "Begleitung", p: "Als unabhängige Stimme im Raum, wenn zwischen Agenturen, Konzepten oder Wegen entschieden wird. Pitch-Prozesse, Auswahlverfahren, Entscheidungsrunden. Über mehrere Tage, mit schriftlichem Ergebnis." },
    ],
    constant: "In jeder Form ein Gespräch und ein Dokument. Und in keiner Form eine neue Idee: Beurteilt wird, was vorliegt. Konzeption und Strategie entstehen hier nicht – das hält den Rahmen klein und die Grenze zum Strategieprojekt klar.",
    notLabel: "Wann nicht",
    not: "Nicht sinnvoll, wenn die Entscheidung schon gefallen ist und nur noch Rückendeckung braucht. Ob die Meinung am Ende genutzt wird, ist offen. Dass sie gehört wird, nicht.",
    casesLabel: "Typische Anlässe",
    cases: "Ein Vorstand, der ein Werbekonzept prüfen lässt, bevor es ins Budget geht. Ein Finanzinstitut, das das Designkonzept seiner Agentur von außen sehen will. Eine Agentur, die ein Konzept testen will, bevor der Kunde es sieht.",
    mailSubject: "Second Opinion",
    fine: "Folgemandate sind möglich – und stehen dann offen im Angebot. Nie auf dem Werk, das geprüft wurde.",
  },
  en: {
    label: "Second Opinion",
    title: "second opinion.",
    line: "An independent outside view, before budget and public exposure depend on it.",
    intro1: "What do you make of this? That is usually how it starts. A concept, a script, a presentation, sometimes an entire strategy – pushed across the table before it goes any further.",
    intro2: "The answer comes from someone who has done the work, not only judged it. On both sides of the table: as the client inside a corporation, as the supplier in agency and consultancy.",
    formsLabel: "Three forms",
    forms: [
      { name: "Quick check", p: "A single piece of communication, a script, a concept. An afternoon's work, a conversation, a written assessment." },
      { name: "Analysis", p: "Strategies, concept proposals, design systems. A few days of reading in come first – then a conversation and a document with analysis and recommendation." },
      { name: "Accompaniment", p: "An independent voice in the room when the choice is between agencies, concepts or directions. Pitch processes, selection procedures, decision rounds. Over several days, with a written result." },
    ],
    constant: "Every form includes a conversation and a document. No form includes a new idea: what is assessed is what exists. Concept and strategy are not created here – which keeps the scope small and the line to a strategy project clear.",
    notLabel: "When not",
    not: "Not useful when the decision has already been made and only needs cover. Whether the opinion is used in the end is open. Whether it is heard is not.",
    casesLabel: "Typical occasions",
    cases: "A board member having an advertising concept checked before it goes into the budget. A financial institution wanting to see its agency's design concept from the outside. An agency wanting to test a concept before the client sees it.",
    mailSubject: "Second Opinion",
    fine: "Follow-on mandates are possible – and are disclosed openly in the proposal. Never on the work that was examined.",
  },
};

function SecondOpinionSection({ lang }) {
  const d = SECONDOPINION5[lang] || SECONDOPINION5.de;
  const mailHref = "mailto:" + SO_MAIL + "?subject=" + encodeURIComponent(d.mailSubject);
  return (
    <section className="section section-secondopinion" id="secondopinion" data-screen-label="Second Opinion">
      <div className="prose">
        <span className="so-script"><Wordmark name="secondopinion" label="second opinion" /></span>
        <p className="section-lede">{d.line}</p>
        <p className="so-p">{d.intro1}</p>
        <p className="so-p">{d.intro2}</p>

        <div className="section-label">
          <span className="rule"></span><span className="label-text">{d.formsLabel}</span><span className="rule"></span>
        </div>
        {d.forms.map((f, i) => (
          <p className="so-p" key={i}><strong>{f.name}.</strong> {f.p}</p>
        ))}

        <p className="so-p">{d.constant}</p>

        <div className="section-label">
          <span className="rule"></span><span className="label-text">{d.notLabel}</span><span className="rule"></span>
        </div>
        <p className="so-p">{d.not}</p>

        <div className="section-label">
          <span className="rule"></span><span className="label-text">{d.casesLabel}</span><span className="rule"></span>
        </div>
        <p className="so-p">{d.cases}</p>

        <p className="so-p"><a className="p-link" href={mailHref}>{SO_MAIL}<span className="arrow">→</span></a></p>

        <p className="so-fine">{d.fine}</p>
      </div>
    </section>
  );
}

window.SecondOpinionSection = SecondOpinionSection;
