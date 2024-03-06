import React from "react";
// import "./accordion.scss";
import { AccordionData } from "../../types/Navigation";

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
  return (
    <li className="accordion-item">
      <a
        onClick={() => setIsVisible(index)}
        className="accordion-item__container"
      >
        <h2 className="accordion-item__container__title">{item.title}</h2>
        <div className="accordion-item__container__status">
          <p>{isVisible ? "-" : "+"}</p>
        </div>
      </a>
      {isVisible ? <p>{item.description}</p> : null}
    </li>
  );
};
