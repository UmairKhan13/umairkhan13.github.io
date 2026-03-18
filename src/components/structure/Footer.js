import React from "react";
import Resume from "../../resume.json";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-title">{Resume.basics.name}</p>
          <p className="footer-copy">
            Building quality systems that scale with ambitious product teams.
          </p>
        </div>
        <div className="footer-meta">
          <p>
            {new Date().getFullYear()} {Resume.basics.name}. Crafted with React.
          </p>
          <div className="footer-links" aria-label="Social links">
            {Resume.basics.profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
              >
                {profile.network}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
