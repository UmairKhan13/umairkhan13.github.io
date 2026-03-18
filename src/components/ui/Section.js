import React from "react";

function Section({ id, eyebrow, title, description, children, className = "" }) {
  return (
    <section id={id} className={`content-section ${className}`.trim()} data-reveal>
      <div className="container">
        <div className="section-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {description ? <p className="section-description">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export default Section;
