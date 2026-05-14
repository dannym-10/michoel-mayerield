import React from "react";
import { Link } from "react-router-dom";
import apLogo from "../../assets/images/ap-logo.png";
import bacpLogo from "../../assets/images/bacp-logo.png";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__col">
            <h4 className="footer__col-title">Michael Mayerfeld</h4>
            <p className="footer__tagline">
              Counsellor & Addiction Psychotherapist
            </p>
            <p className="footer__location">
              London (Maida Vale), Borehamwood and Online
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
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
            <Link to="/your-therapist" className="footer__link">
              Your Therapist
            </Link>
            <Link to="/where-we-can-meet" className="footer__link">
              Where We Can Meet
            </Link>
            <Link to="/next-steps" className="footer__link">
              Next Steps
            </Link>
            <Link to="/privacy-policy" className="footer__link">
              Privacy Policy
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
          &copy; {new Date().getFullYear()} Michael Mayerfeld • Website by&nbsp;<a
            href="https://dannymoss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            DannyMoss.com
          </a>
        </p>
      </div>
    </footer>
  );
};
