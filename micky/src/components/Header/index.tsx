import React, { useEffect, useState } from "react";
import { Navigation } from "../Navigation";
import { Squash as Hamburger } from "hamburger-react";
import "./Header.scss";
import { useLocation } from "react-router-dom";
import { Spring } from "../Spring";
import { Day } from "date-fns";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname && setShowNavigation(false);
  }, [location.pathname]);

  return (
    <div className="header-wrapper">
      {/* <Spring> */}
      <>
        <div
          className="header-wrapper__burger"
          onClick={() =>
            setShowNavigation((prevShowNavigation) => !prevShowNavigation)
          }
        >
          {}
          <Hamburger />
        </div>
        <div className="header-wrapper__logo">
          <img src="" alt="Michael Mayerfeld Logo" />
        </div>
      </>
      {/* </Spring> */}
      {showNavigation && <Navigation />}
    </div>
  );
};
