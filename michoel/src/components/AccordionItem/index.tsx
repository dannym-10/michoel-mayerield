import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { AccordionData } from "../../types/Navigation";
import "./accordion-item.scss";

interface AccordionItemProps {
  item: AccordionData;
  isVisible: boolean;
  setIsVisible: (position: number) => void;
  index: number;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isVisible,
  setIsVisible,
  index,
}) => {
  const contentSpring = useSpring({
    gridTemplateRows: isVisible ? "1fr" : "0fr",
    opacity: isVisible ? 1 : 0,
    config: { tension: 250, friction: 28 },
  });

  return (
    <li className={`accordion-item ${isVisible ? "accordion-item--open" : ""}`}>
      <button
        onClick={() => setIsVisible(index)}
        className="accordion-item__header"
        aria-expanded={isVisible}
      >
        <span className="accordion-item__title">{item.title}</span>
        <svg
          className={`accordion-item__chevron ${isVisible ? "accordion-item__chevron--open" : ""}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <animated.div style={contentSpring} className="accordion-item__content">
        <div className={`accordion-item__content-inner ${isVisible ? "accordion-item__content-inner--open" : ""}`}>
          <p>{item.description}</p>
        </div>
      </animated.div>
    </li>
  );
};
