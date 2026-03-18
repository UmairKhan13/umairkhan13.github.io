import React from "react";

function Logo({ compact = false }) {
  return (
    <img
      className={`brand-logo${compact ? " is-compact" : ""}`}
      src={`${process.env.PUBLIC_URL}/images/MUK.jpeg`}
      alt="Muhammad Umair Khan logo"
    />
  );
}

export default Logo;
