import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
          Built at <i className="fas fa-moon"></i> by{" "}
          <a href="https://www.linkedin.com/in/mumairkhan13/" className="has-text-white">
            <strong>Muhammad Umair Khan</strong>
          </a>
        </p>
        <p>
          <img
            width="512"
            height="96"
            src="https://bulma.io/assets/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt="Made with Bulma"
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
