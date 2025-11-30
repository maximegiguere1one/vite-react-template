// src/App.tsx

import { useEffect } from "react";
import type { ElementType } from "react";
import "./App.css";

type Module = {
  title: string;
  tagline: string;
  bullets: string[];
};

type Faq = {
  question: string;
  answer: string;
};

type Win = {
  value: string;
  label: string;
  detail: string;
};

const modules: Module[] = [
  {
    title: "Module 1 · Setup Express",
    tagline: "Boutique prête en 4h chrono",
    bullets: [
      "Templates AI-Com optimisés mobile",
      "Checkout multi devises + taxes QC",
      "Automations SMS + flows IA plug-and-play",
    ],
  },
  {
    title: "Module 2 · Le Cerveau IA",
    tagline: "Produits gagnants avant tout le monde",
    bullets: [
      "Scraping des tendances TikTok via IA",
      "Score prédictif demand/supply",
      "Prompts propriétaires pour naming et angles",
    ],
  },
  {
    title: "Module 3 · Marketing de Guérilla",
    tagline: "Ads à froid qui convertissent sec",
    bullets: [
      "Sprints UGC tournés pour toi",
      "Media buying automatisé par IA",
      "Scripts DM + funnels vocaux",
    ],
  },
  {
    title: "Module 4 · L'Empire Québécois",
    tagline: "Logistique locale, confiance instantanée",
    bullets: [
      "Fournisseurs certifiés QC + Ontario",
      "Service client bilingue IA + humain",
      "Plans d'expansion retail pop-up",
    ],
  },
];

const faqs: Faq[] = [
  {
    question: "C'est quoi la garantie 72h?",
    answer:
      "Tu suis nos SOP + coaching 1:1. Si t'as pas ta première vente en 72h après le sprint lancement, on te coach gratuitement jusqu'à ce que ça rentre.",
  },
  {
    question: "Je débute en e-com, c'est trop avancé?",
    answer:
      "Non. On part de zéro avec un setup guidé. Tu copies le blueprint, l'IA fait le lourd, et ton coach valide chaque étape sur Loom/Zoom.",
  },
  {
    question: "Combien de temps je dois investir?",
    answer:
      "2h/jour pendant 14 jours pour lancer, puis 30 min/jour pour optimiser. Tout est mobile-friendly pour que tu puisses hustle depuis TikTok.",
  },
  {
    question: "Pourquoi c'est ciblé Québec?",
    answer:
      "Notre stack se branche aux banques locales, taxes, et aux créateurs québécois. Résultat: confiance + ROAS imbattable chez nous.",
  },
];

const wins: Win[] = [
  {
    value: "$4 230 CAD",
    label: "Cohorte Mai",
    detail: "UGC IA + pub Advantage+ sur cosmétique niche",
  },
  {
    value: "$500 CAD",
    label: "Jour 2",
    detail: "« Hey man, j'viens de closer mon premier 500$! »",
  },
  {
    value: "$12 980 CAD",
    label: "Semaine 3",
    detail: "Scaling via catalogue bilingue + offres SMS IA",
  },
  {
    value: "$2 115 CAD",
    label: "Première nuit",
    detail: "Automations DM + retargeting IA",
  },
];

type SplitTextProps = {
  text: string;
  className?: string;
  as?: ElementType;
};

const SplitText = ({ text, className, as: Tag = "span" }: SplitTextProps) => {
  const letters = text.split("");

  return (
    <Tag className={`split-text ${className ?? ""}`.trim()}>
      {letters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="split-text__char"
          style={{ transitionDelay: `${index * 18}ms` }}
          aria-hidden="true"
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </Tag>
  );
};

function App() {
  useEffect(() => {
    const handleCursor = (event: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${event.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${event.clientY}px`,
      );
    };

    window.addEventListener("pointermove", handleCursor, { passive: true });

    return () => window.removeEventListener("pointermove", handleCursor);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <div className="cursor-spotlight" aria-hidden />
      <div className="noise-overlay" aria-hidden />

      <header className="hero" id="top">
        <video
          className="hero__video"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=60"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-flowing-digital-waves-9383/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero__glow" aria-hidden />

        <div className="hero__content">
          <div className="nav-pill" data-reveal>
            <span>AI-COM ACCELERATOR</span>
            <span className="dot" />
            <span>Places limitées · Coaching 1:1</span>
          </div>

          <SplitText
            as="h1"
            text="L'E-com au Québec a changé. Tes premières ventes dans 72h. Garanti."
            className="hero__title"
          />

          <p className="hero__subtitle" data-reveal>
            La seule formation qui fusionne l'intelligence artificielle et le
            dropshipping pour dominer le marché québécois. Oublie les méthodes
            de 2020.
          </p>

          <div className="hero__cta-group" data-reveal>
            <button className="cta-primary">ACCÉDER AU SYSTÈME AI COM</button>
            <p>Coaching 1:1 · Stack IA propriétaire · Garantie résultats</p>
          </div>

          <div className="hero__stats" data-reveal>
            <article>
              <span>72h</span>
              <p>pour déclencher tes premières ventes assistées IA</p>
            </article>
            <article>
              <span>+2,3M$</span>
              <p>générés par nos cohortes locales en 2024</p>
            </article>
            <article>
              <span>90%</span>
              <p>des membres rentables en moins de 30 jours</p>
            </article>
          </div>
        </div>

        <div className="hero__device" data-reveal>
          <div className="device-screen">
            <div className="notification">
              <span className="label">Shopify · Québec</span>
              <strong>Nouvelle vente</strong>
              <p>$187,90 CAD · skincare IA</p>
            </div>
            <div className="notification">
              <span className="label">Automation IA</span>
              <strong>DM TikTok closé</strong>
              <p>$89,00 CAD · upsell bundle</p>
            </div>
            <div className="device-metrics">
              <div>
                <span>ROAS</span>
                <strong>4.7x</strong>
              </div>
              <div>
                <span>Panier moyen</span>
                <strong>$132</strong>
              </div>
              <div>
                <span>Conversion</span>
                <strong>5,3%</strong>
              </div>
            </div>
          </div>
          <p>
            Lance ton premier e-commerce rentable en 90 jours grâce à l'IA. La
            seule formation francophone avec coaching 1:1 personnalisé pour des
            ventes en 90 jours, même si tu pars de zéro.
          </p>
        </div>
      </header>

      <section className="reality" id="reality">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Reality Check</p>
          <h2>Pourquoi tu échoues?</h2>
          <p>
            Tu utilises des méthodes lentes. Le marché est saturé pour les
            amateurs, mais vide pour les experts en IA. On t'apprend à devenir
            cette exception.
          </p>
        </div>

        <div className="reality__grid">
          <article className="reality__card reality__card--classic" data-reveal>
            <h3>E-com classique</h3>
            <p>On avance à la vitesse d'une tortue.</p>
            <ul>
              <li>Tests produits au hasard</li>
              <li>Ads qui brûlent ton cash</li>
              <li>Logistique lente, clients frustrés</li>
            </ul>
            <span className="emoji" aria-hidden>
              🐢
            </span>
          </article>

          <article className="reality__card reality__card--ai" data-reveal>
            <h3>Méthode AI Com</h3>
            <p>Propulsion fusée grâce à l'IA.</p>
            <ul>
              <li>Produits gagnants calculés par IA</li>
              <li>Copy, visuels et vidéos générés</li>
              <li>Opérations locales ultra rapides</li>
            </ul>
            <span className="emoji" aria-hidden>
              🚀
            </span>
          </article>
        </div>
      </section>

      <section className="curriculum" id="programme">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">La Méthode</p>
          <h2>Curriculum Badass</h2>
          <p>Un bento grid brutaliste, chaque module = un levier de cash.</p>
        </div>

        <div className="bento-grid">
          {modules.map((module) => (
            <article className="bento-card" key={module.title} data-reveal>
              <div className="bento-card__head">
                <p className="eyebrow">{module.title}</p>
                <h3>{module.tagline}</h3>
              </div>
              <ul>
                {module.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <button className="ghost-link" type="button">
                Voir le module
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="social" id="preuves">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Preuve Sociale</p>
          <h2>Wall of Love</h2>
          <p>
            Captures d'écran Shopify en $CAD, messages vocaux d'entrepreneurs
            québécois qui explosent.
          </p>
        </div>

        <div className="marquee" data-reveal>
          <div className="marquee__track">
            {[...wins, ...wins].map((win, index) => (
              <article className="win-card" key={`${win.value}-${index}`}>
                <div>
                  <span className="win-card__label">{win.label}</span>
                  <strong>{win.value}</strong>
                </div>
                <p>{win.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block" data-reveal>
        <div>
          <h2>Prêt à hacker l'e-com québécois?</h2>
          <p>
            Tu appliques notre stack IA, on te drive chaque jour jusqu'à tes
            premières ventes. Pas de blabla, juste des systèmes.
          </p>
        </div>
        <button className="cta-primary">JE VEUX MES VENTES EN 72H</button>
      </section>

      <section className="faq" id="faq">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Questions? On y répond cash.</p>
          <h2>FAQ & Fin de l'hésitation</h2>
        </div>

        <div className="faq__list">
          {faqs.map((faq) => (
            <article className="faq__item" key={faq.question} data-reveal>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">AI-COM ACCELERATOR</p>
          <h2>Fait fièrement au Québec ⚜️</h2>
          <p>Dark mode, argent, résultats. On lance?</p>
        </div>
        <button className="cta-secondary">Réserver mon audit IA</button>
      </footer>
    </div>
  );
}

export default App;
