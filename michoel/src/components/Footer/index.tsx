import React from "react";
import { Link } from "react-router-dom";
import apLogo from "../../assets/ap-logo.png";
import bacpLogo from "../../assets/bacp-logo.png";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__col">
            <h3 className="footer__brand">Michael Mayerfeld</h3>
            <p className="footer__tagline">
              Counsellor & Addiction Psychotherapist
            </p>
            <p className="footer__location">
              Hertfordshire & North West London
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <a href="tel:07851958142" className="footer__link">
              07851 958 142
            </a>
            <a
              href="mailto:Michaelmayerfeld@gmail.com"
              className="footer__link"
            >
              Michaelmayerfeld@gmail.com
            </a>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <Link to="/" className="footer__link">
              Home
            </Link>
            <Link to="/about-me" className="footer__link">
              About Me
            </Link>
            <Link to="/services" className="footer__link">
              Services
            </Link>
            <Link to="/work-with-me" className="footer__link">
              Work With Me
            </Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Accreditations</h4>
            <div className="footer__logos">
              <a
                className="footer__logo"
                href="https://www.bacp.co.uk/therapists/403028/michael-mayerfeld/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={bacpLogo} alt="BACP logo" />
              </a>
              <a
                className="footer__logo"
                href="https://addictionprofessionals.org.uk/directory/practitioner-directory/2468"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={apLogo}
                  alt="Addiction Professionals logo"
                  className="footer__logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <p>
          &copy; {new Date().getFullYear()} Michael Mayerfeld. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
