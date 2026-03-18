import React from "react";
import Resume from "../../resume.json";
import CredlyBadge from "../elements/CredlyBadge";
import Section from "../ui/Section";

function Certifications() {
  return (
    <Section
      id="credentials"
      eyebrow="Credentials"
      title="Certifications that reinforce the foundation."
      description="Formal credentials complement hands-on delivery, especially in structured testing, agile practice, and cloud-oriented environments."
    >
      <div className="credentials-grid">
        {Resume.certificates.map((certificate) => (
          <article key={certificate.name} className="surface-card credential-card">
            <CredlyBadge
              width="160"
              height="160"
              imageId={certificate.imageId}
              imageName={certificate.imageName}
              badgeName={certificate.name}
              url={certificate.url}
            />
            <h3>{certificate.name}</h3>
            <p>{certificate.issuer}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Certifications;
