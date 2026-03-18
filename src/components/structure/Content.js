import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import Articles from "../sections/Articles";
import Contact from "../sections/Contact";

function Content() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Articles />
      <Contact />
    </main>
  );
}

export default Content;
