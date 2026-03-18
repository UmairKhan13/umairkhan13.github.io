import React from "react";
import Hero from "../elements/Hero";
import NavBar from "../elements/NavBar";

function Header() {
  return (
    <header className="site-header" id="top">
      <NavBar />
      <Hero />
    </header>
  );
}

export default Header;
