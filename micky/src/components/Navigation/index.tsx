import React, { useEffect } from "react";
import {
  animated,
  useSpring,
  useSpringRef,
  useTransition,
} from "@react-spring/web";
import { navigationData } from "../../constants/Navigation";
import { NavigationItem } from "../NavigationItem";
import "./Navigation.scss";
// import { useViewport } from "../../hooks/useViewport";

interface NavigationProps {
  isOpen: boolean;
}

// const width = useViewport();
export const Navigation: React.FC<NavigationProps> = ({ isOpen }) => {
  const animatedStyles = useSpring({
    from: { opacity: isOpen ? 0 : 1 },
    to: { opacity: isOpen ? 1 : 0 },
  });
  return (
    // <animated.div className="navigation-wrapper">
    <animated.div className="navigation-wrapper" style={animatedStyles}>
      <div className="navigation-wrapper__items">
        {navigationData.slice(0, -1).map((item) => (
          <NavigationItem name={item.name} link={item.link} key={item.link} />
        ))}
      </div>
    </animated.div>
  );
};
