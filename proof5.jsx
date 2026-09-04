// proof5.jsx – Sichtbar: vier Belege zwischen Second Opinion und Netzwerk.
// Nutzt die vorhandenen stations-Klassen aus styles5.css – kein neues CSS nötig.
// EN übersetzt, noch nicht final freigegeben.
const PROOF5 = {
  de: {
    label: "Sichtbar",
    title: "sichtbar.",
    lede: "Strategie zählt erst, wenn sie sichtbar wird. Vier Stellen, an denen sie es wurde.",
    items: [
      { years: "2017 – 2022", what: "A1 Group · Markenwert von 0,9 auf 2,2 Mrd. € (Brand Finance)", role: "Markenstrategie und -führung, alle Märkte" },
      { years: "2011 · 2017 – 2021", what: "A1 Rebranding · eine Dachmarke, sieben Länder", role: "Österreich als Berater bei Saffron, danach sechs Länder als Verantwortlicher im Konzern" },
      { years: "2003 – 2006", what: "3/Drei Österreich · Markteintritt, Marke von null", role: "Head of Marketing Communication" },
      { years: "2024", what: "A1 Prozesse · Quartalsbericht von drei Wochen auf drei Stunden, ein Posting auf fünfzehn", role: "Konzept, Umsetzung mit Frontira" },
    ],
  },
  en: {
    label: "Proof",
    title: "proof.",
    lede: "Strategy only counts once it becomes visible. Four places where it did.",
    items: [
      { years: "2017 – 2022", what: "A1 Group · brand value from 0.9 to 2.2 bn € (Brand Finance)", role: "Brand strategy and management, all markets" },
      { years: "2011 · 2017 – 2021", what: "A1 rebranding · one masterbrand, seven countries", role: "Austria as consultant at Saffron, then six countries as lead inside the group" },
      { years: "2003 – 2006", what: "3/Drei Austria · market entry, brand from zero", role: "Head of Marketing Communication" },
      { years: "2024", what: "A1 processes · quarterly report from three weeks to three hours, one post to fifteen", role: "Concept, delivery with Frontira" },
    ],
  },
};

function ProofSection({ lang }) {
  const d = PROOF5[lang] || PROOF5.de;
  return (
    <section className="section section-proof" id="sichtbar" data-screen-label="Sichtbar">
      <div className="prose">
        <div className="section-label">
          <span className="rule"></span><span className="label-text">{d.label}</span><span className="rule"></span>
        </div>
        <h2 className="section-title">{d.title}</h2>
        <p className="section-lede">{d.lede}</p>

        <ul className="stations">
          {d.items.map((it, i) => (
            <li className="station" key={i}>
              <span className="st-years">{it.years}</span>
              <span className="st-main">
                <span className="st-role">{it.what}</span>
                <span className="st-org">{it.role}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

window.ProofSection = ProofSection;
