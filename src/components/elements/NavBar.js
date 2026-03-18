import React, { useEffect, useState } from "react";
import Resume from "../../resume.json";
import Logo from "../ui/Logo";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" }
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", ...navItems.map((item) => item.href.replace("#", ""))];
      let current = "top";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && window.scrollY >= section.offsetTop - 140) {
          current = sectionId;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 900) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);

    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="container navbar-inner">
        <a className="navbar-brand" href="#top" aria-label="Go to top">
          <Logo compact />
          <span className="navbar-name">{Resume.basics.name}</span>
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-menu${isOpen ? " is-open" : ""}`}>
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");

            return (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === sectionId ? "is-active" : ""}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
