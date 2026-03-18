import React from "react";
import Resume from "../../resume.json";
import Section from "../ui/Section";

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="A balanced stack across architecture, tooling, and delivery."
      description="The focus is not just on tools, but on how they fit into maintainable systems that teams can trust."
    >
      <div className="skills-grid">
        {Resume.skills.map((group) => (
          <article key={group.category} className="surface-card skill-group">
            <h3>{group.category}</h3>
            <div className="badge-row">
              {group.items.map((item) => (
                <span key={item} className="skill-badge">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
