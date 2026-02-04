import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItem.scss";

interface NavigationItemProps {
  name: string;
  link: string;
  variant: "desktop" | "mobile";
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  name,
  link,
}) => {
  return (
    <NavLink
      to={link === "/" ? "/" : `/${link}`}
      className={({ isActive }) =>
        `nav-item ${isActive ? "nav-item--active" : ""}`
      }
    >
      {name}
    </NavLink>
  );
};
