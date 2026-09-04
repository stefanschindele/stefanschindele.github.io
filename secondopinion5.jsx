// secondopinion5.jsx – Second Opinion als eigenes Kapitel, außerhalb der drei Formate.
const SECONDOPINION5 = {
  de: {
    label: "Second Opinion",
    title: "second opinion.",
    line: "Eine Unabhängige Außensicht.",
    p: "Strategien, Konzepte, Kampagnen – geprüft, bevor Budget und Öffentlichkeit daran hängen. Eine Außensicht von jemandem, der die Arbeit selbst gemacht hat, nicht nur beurteilt.",
    fine: "Folgemandate sind möglich – und stehen dann offen im Angebot. Nie auf dem Werk, das geprüft wurde.",
  },
  en: {
    label: "Second Opinion",
    title: "second opinion.",
    line: "An independent outside view.",
    p: "Strategies, concepts, campaigns – examined before budget and public exposure depend on them. An outside view from someone who has done the work, not only judged it.",
    fine: "Follow-on mandates are possible – and are disclosed openly in the proposal. Never on the work that was examined.",
  },
};

function SecondOpinionSection({ lang }) {
  const d = SECONDOPINION5[lang] || SECONDOPINION5.de;
  return (
    <section className="section section-secondopinion" id="secondopinion" data-screen-label="Second Opinion">
      <div className="prose">
        <span className="so-script"><Wordmark name="secondopinion" label="second opinion" /></span>
        <p className="section-lede">{d.line}</p>
        <p className="so-p">{d.p}</p>
        <p className="so-fine">{d.fine}</p>
      </div>
    </section>
  );
}

window.SecondOpinionSection = SecondOpinionSection;
