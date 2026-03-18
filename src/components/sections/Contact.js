import React from "react";
import Resume from "../../resume.json";
import Section from "../ui/Section";

function Contact() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    Resume.basics.email
  )}`;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to meaningful conversations around quality leadership."
      description="Whether the conversation is about architecture, consulting, or building a stronger automation practice, this site is designed to make that next step easy."
    >
      <div className="contact-card surface-card">
        <div>
          <p className="contact-lead">
            Best reached by email for direct conversations, or through LinkedIn
            and GitHub for professional context.
          </p>
          <p className="contact-subtle">
            Based in Karachi, collaborating comfortably with distributed teams.
          </p>
          <a
            className="contact-email"
            href={gmailComposeUrl}
            target="_blank"
            rel="noreferrer"
          >
            {Resume.basics.email}
          </a>
        </div>
        <div className="contact-actions">
          <a
            className="button button-primary"
            href={gmailComposeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Email me
          </a>
          {Resume.basics.profiles.map((profile) => (
            <a
              key={profile.network}
              className="button button-secondary"
              href={profile.url}
              target="_blank"
              rel="noreferrer"
            >
              {profile.network}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Contact;
