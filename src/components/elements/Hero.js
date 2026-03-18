import React from "react";
import Resume from "../../resume.json";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="hero-kicker">{Resume.basics.label}</p>
          <h1>{Resume.basics.headline}</h1>
          <p className="hero-summary">{Resume.basics.summary}</p>
          <p className="hero-trust-note">{Resume.basics.leadershipNote}</p>

          <div className="hero-proof-strip" aria-label="Professional proof points">
            <span>Architecture-first quality leadership</span>
            <span>Cross-functional delivery influence</span>
            <span>Frameworks built for scale</span>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View work
            </a>
            <a className="button button-secondary" href="#contact">
              Contact me
            </a>
          </div>

          <div className="hero-socials" aria-label="Professional profiles">
            {Resume.basics.profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
              >
                <i className={profile.icon} aria-hidden="true" />
                <span>{profile.network}</span>
              </a>
            ))}
          </div>
        </div>

        <aside className="hero-panel" data-reveal>
          <div className="hero-panel-glow" />
          <p className="eyebrow">Executive Snapshot</p>
          <h2>{Resume.basics.availability}</h2>
          <p>
            I work across framework design, delivery architecture, and release
            confidence systems for high-velocity engineering teams.
          </p>

          <div className="hero-metrics">
            {Resume.about.metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
