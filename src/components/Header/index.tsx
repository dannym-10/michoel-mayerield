import React, { useState } from "react";
import { Navigation } from "../Navigation";
import "./Header.scss";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  return (
    <div className="header-wrapper">
      <div
        className="header-wrapper__burger"
        onClick={() =>
          setShowNavigation((prevShowNavigation) => !prevShowNavigation)
        }
      >
        <span className="header-wrapper__burger__line" />
        <span className="header-wrapper__burger__line" />
        <span className="header-wrapper__burger__line" />
      </div>
      {showNavigation && <Navigation />}
    </div>
  );
};
