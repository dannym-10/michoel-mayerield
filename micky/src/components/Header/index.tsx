import React, { useEffect, useState } from "react";
import { Navigation } from "../Navigation";
import { Squash as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

export const Header: React.FC = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setShowNavigation(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showNavigation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showNavigation]);

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <span className="header__logo-name">Michael Mayerfeld</span>
            <span className="header__logo-subtitle">Counsellor & Psychotherapist</span>
          </Link>
          <nav className="header__nav-desktop">
            <Navigation variant="desktop" />
          </nav>
          <div className="header__burger">
            <Hamburger
              toggled={showNavigation}
              toggle={setShowNavigation}
              size={24}
              color={scrolled ? "#3A3530" : "#3A3530"}
              rounded
            />
          </div>
        </div>
      </header>
      {showNavigation && (
        <Navigation variant="mobile" isOpen={showNavigation} />
      )}
    </>
  );
};
