import React from "react";
import Resume from "../../resume.json";
import Section from "../ui/Section";

function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation in computer science."
      description="A concise view of the formal academic background behind my technical and leadership journey."
    >
      <div className="education-grid">
        {Resume.education.map((item) => (
          <article
            key={`${item.institution}-${item.startDate}`}
            className="surface-card education-card"
          >
            <p className="education-degree">{item.studyType}</p>
            <h3>{item.institution}</h3>
            <p className="education-field">{item.area}</p>
            <div className="education-details">
              <p className="education-details-label">{item.detailsLabel}</p>
              <div className="education-detail-list">
                {item.details.map((detail) => (
                  <span key={detail} className="education-detail-chip">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Education;
