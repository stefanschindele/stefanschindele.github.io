// network5.jsx – Netzwerk (live): freigegebene Partner-Texte.
// Reihenfolge nach Dauer: Zündel (1998) → Saffron (2009) → Frontira (2015) → Engrd (2017).
// Alle Partner freigegeben. Dubai entfernt (bis auf Weiteres).
// FLAG: Engrd-Link fehlt · DE/EN-Abweichungen bei Frontira und Engrd noch angleichen.
const NETWORK5 = {
  de: {
    label: "Netzwerk",
    title: "die umsetzung.",
    intro: "Kein Apparat – aber auch kein Alleingang. Die Umsetzung führen Partner, mit denen seit Jahren, teils Jahrzehnten, echte Projekte entstanden sind. In jedem dieser Felder eigene Praxis: Das macht Auswahl belastbar, Briefings präzise und das Qualitätsurteil unabhängig. Die Verantwortung beim Kunden bleibt an einer Stelle.",
    fine: "Arbeitsstand – alle Partner-Texte gehen vor Veröffentlichung zur Freigabe an die Partner.",
    since: "seit",
    statusDraft: "zur Freigabe",
    statusHold: "nicht live · zur Abstimmung",
    linkLabel: "Website",
    partners: [
      {
        name: "Rudolf Zündel", field: "Design", year: "1998", status: "draft",
        note: "Konzeptionelles Design ohne Umwege: Gestaltung, die auf einer zentralen Idee basiert und ihr treu bleibt. Gemeinsame Arbeiten seit 1998, vom Design und der Werbung für ONE über Sembritzki Feinkost in München bis zu Mobilfunkmarken in Osteuropa. Die Rollenteilung ist eingespielt: Beratung und Briefing auf der einen Seite, konzeptionelle Ideenfindung und exzellentes Design auf der anderen. Der Partner für Projekte, die eine klare, durchgängige Design-Idee brauchen, die lange hält.",
      },
      {
        name: "Saffron Brand Consultants", field: "Brand Design", year: "2009", status: "hold",
        href: "https://saffron-consultants.com",
        note: "Markenkern, der bis in die einzelne Interaktion verankert wird. Designsysteme, die über Märkte hinweg tragen. Die Zusammenarbeit begann von innen, als Strategic Planner, und setzte sich über Jahre auf der anderen Seite des Tisches fort: Saffron war die primäre Brandagentur der A1-Jahre. Gelernt habe ich dort die Grundlagenarbeit an Marken: Definition, Herleitung, Beweisführung, bis der Kern jeder Nachfrage standhält. Dieses Fundament trägt die Arbeit bis heute. Der Partner für große, komplexe Markenstrategie- und Designmandate.",
      },
      {
        name: "Frontira", field: "Business-Prozesse & AI", year: "2015", status: "draft",
        href: "https://frontira.com",
        note: "Geschäftsprozesse in Automatisierung übersetzen – mit globalem Blick auf das, was gerade möglich ist. Seit 2015 gemeinsame Projekte: zuerst die strategische Planung, dann die internationale Strategie der A1-Rebrandings über Dachmarke und lokale Integration in sieben Ländern, später drei AI-Tools, von der Newsletter-Automatisierung bis zum Markenchatbot. Die Arbeitsteilung: gemeinsam Business Needs und Strategie klären auf der einen Seite; Frontira gießt sie in strategische Muster, Applikationen und robuste Systeme. Der Partner für Automatisierung, die den dahinterliegenden Geschäftsprozess wirklich versteht.",
      },
      {
        name: "Engrd", field: "Digital", year: "2017", status: "draft",
        href: "https://engrd.at/",
        note: "Performance und Ästhetik: Ansprüche, die im Digitalen gerne mal nicht zusammenkommen. Seit 2017 gemeinsame Projekte, darunter die Weiterentwicklung des A1-Markendesigns samt Markenportal und Guidelines, Arbeiten für die Erste Bank sowie KI-Experimente für Markenwelten. Strategie und Konzept auf der einen Seite; Engrd strukturiert und übersetzt ins Digitale. Der Partner für Websites, Apps und UI/UX bis hin zu Interfaces für KI-Agenten.",
      },
    ],
  },
  en: {
    label: "Network",
    title: "the execution.",
    intro: "No apparatus – but no going it alone either. Execution is carried by partners with whom real projects have been built over years, in some cases decades. Hands-on practice in each of these fields: that is what makes the selection sound, the briefings precise and the quality judgement independent. Responsibility towards the client stays in one place.",
    fine: "Working draft – all partner texts go to the partners for approval before publication.",
    since: "since",
    statusDraft: "pending approval",
    statusHold: "not live · in coordination",
    linkLabel: "Website",
    partners: [
      {
        name: "Rudolf Zündel", field: "Design", year: "1998", status: "draft",
        note: "Conceptual design without frills: work that rests on one central idea – and stays true to it. Joint projects since 1998, from the design and advertising for ONE to Sembritzki Feinkost in Munich and mobile brands in Eastern Europe. The division of roles is well-rehearsed: consulting and briefing on one side, conceptual ideation and excellent design on the other. The partner for projects that need one clear, consistent design idea.",
      },
      {
        name: "Saffron Brand Consultants", field: "Brand Design", year: "2009", status: "hold",
        href: "https://saffron-consultants.com",
        note: "Brand essence embedded down to the single interaction. Design systems that hold across markets. The collaboration began from inside, as a strategic planner, and continued for years from the other side of the table: Saffron was the primary brand agency throughout the A1 period. That is where I learned the foundational work on brands: definition, derivation, evidence, until the core withstands every question put to it. That grounding carries the work today. The partner for large, complex brand strategy and design mandates.",
      },
      {
        name: "Frontira", field: "Business processes & AI", year: "2015", status: "draft",
        href: "https://frontira.com",
        note: "Translating business processes into automation – with a global view of what is just becoming possible. Joint projects since 2015: first the strategic planning of the A1 rebrandings across masterbrand and local integration, later three AI tools from newsletter automation to a brand chatbot. The division of labour: clarifying business needs on one side; Frontira casts them into strategic patterns and applications. The partner for automation that truly understands the business process beneath it.",
      },
      {
        name: "Engrd", field: "Digital", year: "2017", status: "draft",
        href: "https://engrd.at/",
        note: "Performance and aesthetics – two ambitions that rarely meet in digital. Joint projects since 2017, including the evolution of the A1 brand design with brand portal and guidelines, and work for Erste Bank. Strategy and concept on one side; Engrd structures and translates into digital – including AI experiments. The partner for websites, apps and UI/UX, up to interfaces for AI agents.",
      },
    ],
  },
};

function NetworkSection({ lang }) {
  const d = NETWORK5[lang] || NETWORK5.de;
  return (
    <section className="section section-network" id="network" data-screen-label="Netzwerk">
      <div className="prose">
        <div className="section-label">
          <span className="rule"></span><span className="label-text">{d.label}</span><span className="rule"></span>
        </div>
        <h2 className="section-title">{d.title}</h2>
      </div>

      <div className="reg-intro">
        <p>{d.intro}</p>
      </div>

      <ul className="partners">
        {d.partners.map((p, i) => (
          <li className="partner" key={i}>
            <div className="p-row">
              <span className="p-since">{p.year.match(/^\d/) ? d.since + " " + p.year : p.year}</span>
              <div>
                <div className="p-head">
                  <span className="p-name">{p.name}</span>
                  <span className="p-field">{p.field}</span>
                </div>
                <p className="p-note">{p.note}</p>
                {p.href ? (
                  <a className="p-link" href={p.href} target="_blank" rel="noopener noreferrer">
                    {d.linkLabel} <span className="arrow">↗</span>
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

window.NetworkSection = NetworkSection;
