import React from "react";
import "./Footer.scss";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer-wrapper">
      <h3>Michoel Mayerfeld</h3>
      <p>Offering some therapy stuff you you</p>
      <p>Based in London</p>
    </div>
  );
};
