import React, { useEffect } from "react";
import { navigationData } from "../../constants/Navigation";
import { NavigationItem } from "../NavigationItem";
import "./Navigation.scss";
// import { useViewport } from "../../hooks/useViewport";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  // const width = useViewport();

  const renderNavigation = () => {
    return navigationData
      .slice(0, -1)
      .map((item) => (
        <NavigationItem name={item.name} link={item.link} key={item.link} />
      ));
  };

  return (
    <div className="navigation-wrapper">
      <div className="navigation-wrapper__items">{renderNavigation()}</div>
    </div>
  );
};
