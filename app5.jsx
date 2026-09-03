// app5.jsx — sts site (live, Sept 2026). App-Shell, TopBar, Hero, Contact, Closing, Footer.
// Tweak-Panel entfernt: theme/lang laufen über useState + localStorage.
const { useState, useEffect, useRef } = React;

const MAIL = "office@stefan-schindele.com";

// ─────────────────────────────────────────────────────────────────
// State: theme + lang, lokal im Browser gespeichert (kein Tracking).
// ─────────────────────────────────────────────────────────────────
const DEFAULTS = { theme: "dark", lang: "de", accent: "#F5332C", subline: "klarheit" };
function useTweaks(defaults) {
  const read = (k, d) => { try { return window.localStorage.getItem("sts-" + k) || d; } catch (e) { return d; } };
  const [values, setValues] = useState(() => ({
    ...defaults,
    theme: read("theme", defaults.theme),
    lang: read("lang", defaults.lang),
  }));
  const setTweak = (key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
    try { window.localStorage.setItem("sts-" + key, val); } catch (e) {}
  };
  return [values, setTweak];
}

// ─────────────────────────────────────────────────────────────────
// Wordmark — script illustration with text fallback for missing ones
// ─────────────────────────────────────────────────────────────────
const WORDMARKS_AVAILABLE = new Set([
  "strategy", "sparring", "execution", "secondopinion", "advisory", "design", "contact", "sts",
]);
function Wordmark({ name, label, className = "" }) {
  const has = WORDMARKS_AVAILABLE.has(name);
  if (has) {
    return (
      <span
        className={"wm " + className}
        role="img"
        aria-label={label || name}
        style={{
          WebkitMaskImage: `url(assets/wordmark-${name}.svg)`,
          maskImage: `url(assets/wordmark-${name}.svg)`,
        }}
      />
    );
  }
  // FLAG: wordmark missing — text fallback until SVG is delivered (sparring, second opinion).
  return <span className={"wm-fallback " + className} aria-label={label || name}>{label || name}</span>;
}
window.Wordmark = Wordmark;

// ─────────────────────────────────────────────────────────────────
// Content — bilingual
// ─────────────────────────────────────────────────────────────────
const COPY = {
  de: {
    practice: "Stefan Schindele · Wien",
    contactTop: "Kontakt",
    hero: {
      name: "Stefan Schindele",
      motto: ["Das Ende von ", "vielleicht", "."],
      sub: {
        klarheit: "Klarheit in Marke und Kommunikation.",
        strategie: "Strategie für Marke und Kommunikation.",
      },
      mailPrompt: "Lieber gleich persönlich?",
      cue: "Kern · Formate · Netzwerk · Kontakt",
    },
    contact: {
      label: "Kontakt",
      title: "kontakt",
      lede: "Wien-basiert. Verfügbar für Projekte in DACH und CEE.",
      mailButton: "Schreiben Sie mir",
      form: {
        kicker: "Oder direkt hier",
        nameLabel: "Name",
        emailLabel: "E-Mail",
        messageLabel: "Nachricht",
        submit: "Nachricht senden",
        sending: "Wird gesendet …",
        success: "Danke. Ich melde mich.",
        error: "Etwas ist schiefgelaufen. Bitte nochmal versuchen — oder direkt per Mail.",
      },
      directory: [
        { label: "E-Mail",   href: "mailto:" + MAIL, text: MAIL },
        { label: "Telefon",  href: "tel:+436641616164", text: "+43 664 1616164" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/stefan-schindele-wien/", text: "linkedin.com / stefan-schindele-wien", external: true },
        { label: "Standort", text: "Wien — München" },
      ],
    },
    footer: { left: "© 2026 sts — Stefan Schindele e.U. · Wien", imprint: "Impressum", agb: "AGB", privacy: "Datenschutz", right: "das ende von vielleicht." },
  },
  en: {
    practice: "Stefan Schindele · Vienna",
    contactTop: "Contact",
    hero: {
      name: "Stefan Schindele",
      motto: ["The end of ", "maybe", "."],
      sub: {
        klarheit: "Clarity in brand and communication.",
        strategie: "Strategy for brand and communication.",
      },
      mailPrompt: "Prefer to go straight to a conversation?",
      cue: "Core · Formats · Network · Contact",
    },
    contact: {
      label: "Get in touch",
      title: "contact",
      lede: "Based in Vienna. Available for projects across DACH and CEE.",
      mailButton: "Write to me",
      form: {
        kicker: "Or right here",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        submit: "Send message",
        sending: "Sending …",
        success: "Thank you. I'll be in touch.",
        error: "Something went wrong. Please try again — or reach out by mail directly.",
      },
      directory: [
        { label: "Email",    href: "mailto:" + MAIL, text: MAIL },
        { label: "Phone",    href: "tel:+436641616164", text: "+43 664 1616164" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/stefan-schindele-wien/", text: "linkedin.com / stefan-schindele-wien", external: true },
        { label: "Based",    text: "Vienna — Munich" },
      ],
    },
    footer: { left: "© 2026 sts — Stefan Schindele e.U. · Vienna", imprint: "Imprint", agb: "Terms", privacy: "Privacy", right: "the end of maybe." },
  },
};

// ─────────────────────────────────────────────────────────────────
// Top bar — reduziert: Marke · Kontakt (Mail) · Sprache · Modus
// ─────────────────────────────────────────────────────────────────
function TopBar({ lang, setLang, theme, setTheme, copy }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={"topbar topbar--lean" + (scrolled ? " is-scrolled" : "")}>
      <div className="left">
        <span className="practice"><span className="accent-dot"></span>{copy.practice}</span>
      </div>
      <div className="right">
        <a className="topbar-contact" href={"mailto:" + MAIL}>{copy.contactTop}<span className="arrow">→</span></a>
        <button className="tab-btn" onClick={() => setLang(lang === "en" ? "de" : "en")} aria-label="Toggle language">
          <span className={lang === "de" ? "on" : "off"}>DE</span>
          <span className="sep">/</span>
          <span className={lang === "en" ? "on" : "off"}>EN</span>
        </button>
        <button className="tab-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
          <span className={theme === "dark" ? "on" : "off"}>DARK</span>
          <span className="sep">/</span>
          <span className={theme === "light" ? "on" : "off"}>LIGHT</span>
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Hero — sts logo + name + motto + subline + direkter Mail-Zugang
// ─────────────────────────────────────────────────────────────────
function Hero({ copy, subKey }) {
  const h = copy.hero;
  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <img src="assets/logo-medium.svg" alt="sts" className="sts-logo" draggable="false" />
      <div className="sts-name">{h.name}</div>
      <h1 className="hero-motto">{h.motto[0]}{h.motto[1]}<span className="dot">{h.motto[2]}</span></h1>
      <p className="hero-sub">{h.sub[subKey] || h.sub.klarheit}</p>
      <p className="hero-mail">{h.mailPrompt} <a href={"mailto:" + MAIL}>{MAIL}<span className="arrow">→</span></a></p>
      <div className="scroll-cue">
        <span>{h.cue}</span>
        <span className="line"></span>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// Contact Form — Formspree, Alternative zu mailto
// ─────────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mljenlro";

function ContactForm({ t }) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: "Anfrage über stefan-schindele.com",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setValues({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return <p className="contact-form-success">{t.success}</p>;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor="cf-name">{t.nameLabel}</label>
        <input id="cf-name" name="name" type="text" required value={values.name} onChange={onChange} />
      </div>
      <div className="form-field">
        <label htmlFor="cf-email">{t.emailLabel}</label>
        <input id="cf-email" name="email" type="email" required value={values.email} onChange={onChange} />
      </div>
      <div className="form-field">
        <label htmlFor="cf-message">{t.messageLabel}</label>
        <textarea id="cf-message" name="message" rows="4" required value={values.message} onChange={onChange} />
      </div>
      <button type="submit" className="form-submit" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.submit}
      </button>
      {status === "error" && <p className="form-error">{t.error}</p>}
    </form>
  );
}

// ─────────────────────────────────────────────────────────────────
// Contact — direkter Mail-Weg + Kurzverzeichnis
// ─────────────────────────────────────────────────────────────────
function Contact({ copy }) {
  const c = copy.contact;
  return (
    <section className="section section-foot section-contact" id="contact" data-screen-label="Kontakt">
      <div className="prose">
        <div className="section-label">
          <span className="rule"></span><span className="label-text">{c.label}</span><span className="rule"></span>
        </div>
        <h2 className="section-title">{c.title}</h2>
        <p className="contact-lede">{c.lede}</p>
        <p className="contact-cta">
          <a className="contact-mail" href={"mailto:" + MAIL}>{c.mailButton} <span className="cm-addr">{MAIL}</span><span className="arrow">→</span></a>
        </p>

        <div className="contact-form-wrap">
          <span className="contact-form-kicker">{c.form.kicker}</span>
          <ContactForm t={c.form} />
        </div>
      </div>

      <div className="prose" style={{ marginTop: "var(--space-3xl)" }}>
        <dl className="directory">
          {c.directory.map((row, i) => (
            <div className="dir-row" key={i}>
              <dt>{row.label}</dt>
              <dd>
                {row.href ? (
                  <a href={row.href} target={row.external ? "_blank" : undefined} rel={row.external ? "noopener noreferrer" : undefined}>
                    {row.text}<span className="arrow">{row.external ? "↗" : "→"}</span>
                  </a>
                ) : row.text}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing" aria-hidden="true">
      <div className="closing-inner">
        <img src="assets/logo-extrawide.svg" alt="sts" className="closing-sts" loading="lazy" draggable="false" />
      </div>
    </section>
  );
}

function SiteFooter({ copy }) {
  return (
    <footer className="site-footer">
      <div className="row">
        <span className="legal">{copy.footer.left}</span>
        <nav className="legal-links">
          <a href="impressum.html">{copy.footer.imprint}</a>
          <a href="agb.html">{copy.footer.agb}</a>
          <a href="datenschutz.html">{copy.footer.privacy}</a>
        </nav>
        <span className="word">{copy.footer.right}</span>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(DEFAULTS);
  const lang = t.lang;
  const theme = t.theme;
  const copy = COPY[lang];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.lang = lang;
  }, [theme, lang]);

  return (
    <>
      <TopBar
        lang={lang}
        setLang={(v) => setTweak("lang", v)}
        theme={theme}
        setTheme={(v) => setTweak("theme", v)}
        copy={copy}
      />
      <main className="page">
        <Hero copy={copy} subKey={t.subline} />
        <CoreSection lang={lang} />
        <FormatsSection lang={lang} />
        <SecondOpinionSection lang={lang} />
        <NetworkSection lang={lang} />
        <About lang={lang} />
        <Contact copy={copy} />
      </main>
      <Closing />
      <SiteFooter copy={copy} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
