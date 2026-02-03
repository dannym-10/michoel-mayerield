import React from "react";
import { animated, useSpring, useTrail } from "@react-spring/web";
import { navigationData } from "../../constants/Navigation";
import { NavigationItem } from "../NavigationItem";
import "./Navigation.scss";

interface NavigationProps {
  variant: "desktop" | "mobile";
  isOpen?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  variant,
  isOpen = false,
}) => {
  const navItems = navigationData.filter((item) => item.link !== "*");

  const overlaySpring = useSpring({
    opacity: isOpen ? 1 : 0,
    config: { tension: 220, friction: 24 },
  });

  const trail = useTrail(navItems.length, {
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 200, friction: 20 },
  });

  if (variant === "desktop") {
    return (
      <div className="nav-desktop">
        {navItems.map((item) => (
          <NavigationItem
            name={item.name}
            link={item.link}
            variant="desktop"
            key={item.link}
          />
        ))}
      </div>
    );
  }

  return (
    <animated.div className="nav-mobile" style={overlaySpring}>
      <div className="nav-mobile__items">
        {trail.map((style, index) => (
          <animated.div key={navItems[index].link} style={style}>
            <NavigationItem
              name={navItems[index].name}
              link={navItems[index].link}
              variant="mobile"
            />
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
};
