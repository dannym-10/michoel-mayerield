import React from "react";
import "./Footer.scss";
import { Spring } from "../Spring";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Spring>
      <div className="footer-wrapper">
        <h3>Michoel Mayerfeld</h3>
        <p>Offering some therapy stuff you you</p>
        <p>Based in London</p>
      </div>
    </Spring>
  );
};
