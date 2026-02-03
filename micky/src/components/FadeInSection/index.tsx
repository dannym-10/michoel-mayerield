import React, { useRef, useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import "./fade-in-section.scss";

interface FadeInSectionProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  direction = "up",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "left":
        return isVisible ? "translateX(0px)" : "translateX(-40px)";
      case "right":
        return isVisible ? "translateX(0px)" : "translateX(40px)";
      default:
        return isVisible ? "translateY(0px)" : "translateY(30px)";
    }
  };

  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    delay,
    config: { tension: 180, friction: 24 },
  });

  return (
    <animated.div ref={ref} style={spring} className="fade-in-section">
      {children}
    </animated.div>
  );
};
