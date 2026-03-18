import React, { useEffect } from "react";
import Header from "./components/structure/Header";
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";
import Resume from "./resume.json";
import "./styles.css";

function App() {
  useEffect(() => {
    document.title = [
      Resume.basics.name,
      Resume.basics.label,
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");

    const description = document.querySelector('meta[name="description"]');

    if (description) {
      description.setAttribute("content", Resume.basics.summary);
    }
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
