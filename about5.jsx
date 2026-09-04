// about5.jsx – Bio: kreative Herkunft zuerst, dann Konzern-Bio, angereichert aus CV 2026.
// Stationen an den CV angeglichen (inkl. Demner Merlicek & Bergmann).
const ABOUT5 = {
  de: {
    label: "Über mich",
    title: "stefan schindele",
    role: "Marken- und Kommunikationsstratege",
    origin: "Begonnen hat es bei Vogue und Marie Claire in München, Grafik-Trainee und Praktikum bei Condé Nast und Gruner & Jahr. Danach die Meisterklasse für Grafik und Werbung bei Walter Lürzer an der Akademie für angewandte Kunst Wien, Abschluss als Mag. art.",
    bio: "Danach zwei Jahrzehnte Markenstrategie und Brand Systems für internationale Organisationen. Bei A1 Telekom Austria Markenführung über sieben Märkte, in Zagreb die Leitung zweier Länder und eines 18-köpfigen Teams. Davor die Agentur- und Beratungsseite – Saffron, Demner Merlicek & Bergmann – und der Markteintritt von 3/Drei, aufgebaut von Grund auf. Marken über die Telekommunikation hinaus: OMV, Sony PlayStation, MasterCard, die Stadt Wien.",
    bridge: <>Was bleibt, ist die Tiefe dieser Arbeit – <span className="accent">ohne den Apparat</span>, der sie sonst begleitet. Konzern-Erfahrung, direkt zugänglich.</>,
    stationsLabel: "Stationen",
    stations: [
      { years: "2016 – 2025", role: "Domain Lead Brand Strategy, Brand Management & Marketing Communications", org: "A1 Telekom Austria Group" },
      { years: "2014 – 2016", role: "Director Brand & Marketing Communication", org: "Vipnet (Kroatien & Nordmazedonien)" },
      { years: "2009 – 2014", role: "Client Service Director & Strategic Planner", org: "Saffron Brand Consultants" },
      { years: "2006 – 2009", role: "Account Director, Vorstand", org: "Demner, Merlicek & Bergmann" },
      { years: "2003 – 2006", role: "Head of Marketing Communication", org: "Hutchison 3G Austria (3/Drei)" },
    ],
  },
  en: {
    label: "About",
    title: "stefan schindele",
    role: "Brand & communication strategist",
    origin: "It started at Vogue and Marie Claire in Munich – a graphic design traineeship and internship at Condé Nast and Gruner & Jahr. Then the master class in graphic design and advertising under Walter Lürzer at the University of Applied Arts Vienna, graduating Mag. art.",
    bio: "Then two decades of brand strategy and brand systems for international organisations. At A1 Telekom Austria, brand management across seven markets; in Zagreb, leadership of two countries and an 18-person team. Before that the agency and consulting side – Saffron, Demner Merlicek & Bergmann – and the market launch of 3/Drei, built from the ground up. Brands beyond telecommunications: OMV, Sony PlayStation, MasterCard, the City of Vienna.",
    bridge: <>What remains is the depth of that work – <span className="accent">without the apparatus</span> that usually comes with it. Corporate experience, directly accessible.</>,
    stationsLabel: "Stations",
    stations: [
      { years: "2016 – 2025", role: "Domain Lead Brand Strategy, Brand Management & Marketing Communications", org: "A1 Telekom Austria Group" },
      { years: "2014 – 2016", role: "Director Brand & Marketing Communication", org: "Vipnet (Croatia & North Macedonia)" },
      { years: "2009 – 2014", role: "Client Service Director & Strategic Planner", org: "Saffron Brand Consultants" },
      { years: "2006 – 2009", role: "Account Director, Board Member", org: "Demner, Merlicek & Bergmann" },
      { years: "2003 – 2006", role: "Head of Marketing Communication", org: "Hutchison 3G Austria (3/Drei)" },
    ],
  },
};

function About({ lang }) {
  const d = ABOUT5[lang] || ABOUT5.de;
  return (
    <section className="section section-about" id="about" data-screen-label="Über mich">
      <div className="prose">
        <div className="section-label">
          <span className="rule"></span><span className="label-text">{d.label}</span><span className="rule"></span>
        </div>
        <img className="about-portrait" src="assets/about-portrait.jpg" alt="Stefan Schindele" />
        <h2 className="section-title">{d.title}</h2>
        <p className="about-role">{d.role}</p>
        <p className="about-bio">{d.origin}</p>
        <p className="about-bio">{d.bio}</p>
        <p className="about-bridge">{d.bridge}</p>

        <ul className="stations">
          {d.stations.map((s, i) => (
            <li className="station" key={i}>
              <span className="st-years">{s.years}</span>
              <span className="st-main">
                <span className="st-role">{s.role}</span>
                <span className="st-org">{s.org}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

window.About = About;
