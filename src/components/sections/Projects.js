import React from "react";
import Resume from "../../resume.json";
import Section from "../ui/Section";

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Representative initiatives with real delivery impact."
      description="These cards frame the kind of work I am known for: architecture-first automation, dependable delivery pipelines, and quality systems built to last."
    >
      <div className="projects-grid">
        {Resume.projects.map((project) => (
          <article key={project.title} className="surface-card project-card">
            <div className="project-topline">
              <p className="project-label">Case study</p>
              <h3>{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <p className="project-outcome">{project.outcome}</p>
            <div className="badge-row">
              {project.stack.map((item) => (
                <span key={item} className="skill-badge">
                  {item}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live context
              </a>
              <a href={project.codeUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
