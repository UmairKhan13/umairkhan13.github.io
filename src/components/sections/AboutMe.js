import React from "react";
import Resume from "../../resume.json";
import Section from "../ui/Section";

function AboutMe() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Quality leadership grounded in systems thinking."
      description="A senior-level profile built around scalable automation, cross-functional partnership, and a calm, structured approach to product quality."
    >
      <div className="about-grid">
        <div className="about-copy">
          {Resume.about.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="leadership-pillars">
            {Resume.about.leadershipPillars.map((pillar) => (
              <article key={pillar.title} className="pillar-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-card surface-card">
          <p className="about-card-title">What I bring to leadership teams</p>
          <ul className="feature-list">
            {Resume.about.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>

          <div className="about-quote">
            <p>
              Quality is most valuable when it is visible, scalable, and trusted
              by both engineers and decision-makers.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
