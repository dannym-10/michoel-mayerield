import React from "react";
import apLogo from "../../assets/ap-logo.png";
import bacpLogo from "../../assets/bacp-logo.png";
import "./Footer.scss";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer-wrapper">
      <h3>Michoel Mayerfeld</h3>
      <p>Hertfordshire and North West London (Hendon, Queens Park, Radlett)</p>
      <p>Call/Text: 07851958142</p>
      <p>Email: Michaelmayerfeld@gmail.com</p>
      <div>
        <img className="footer-image" src={apLogo} />
        <img className="footer-image" src={bacpLogo} />
      </div>
    </div>
  );
};
