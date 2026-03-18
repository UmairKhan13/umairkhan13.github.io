import React from "react";

function Skill({ text, description }) {
  return (
    <article className="surface-card">
      <h3>{text}</h3>
      <p>{description}</p>
    </article>
  );
}

export default Skill;
