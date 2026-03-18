import React from "react";
import Resume from "../../resume.json";
import Section from "../ui/Section";

function formatDate(value) {
  if (!value) {
    return "Present";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="A track record of building quality systems that scale."
      description="From hands-on framework development to architecture-level ownership, each role sharpened the ability to connect testing strategy with real delivery outcomes."
    >
      <div className="timeline-list">
        {Resume.work.map((role) => (
          <article key={`${role.company}-${role.startDate}`} className="timeline-card surface-card">
            <div className="timeline-meta">
              <span className="timeline-period">
                {formatDate(role.startDate)} - {formatDate(role.endDate)}
              </span>
              <a href={role.website} target="_blank" rel="noreferrer">
                Visit company
              </a>
            </div>
            <h3>{role.position}</h3>
            <p className="timeline-company">{role.company}</p>
            <p className="timeline-summary">{role.summary}</p>
            <p className="timeline-impact">{role.impact}</p>
            <ul className="feature-list compact">
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
