import React, { useState } from "react";
import { homeAccordionData } from "../../constants/HomeAccordion";
import "./accordion.scss";
import { AccordionItem } from "../AccordionItem";

interface AccordionProps {}

export const Accordion: React.FC<AccordionProps> = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleClick = (itemIndex: number) => {
    if (itemIndex === openItem) {
      setOpenItem(null);
    }
    setOpenItem(itemIndex);
  };

  return (
    <ul className="accordion-wrapper">
      {homeAccordionData.map((item, index) => (
        <AccordionItem
          item={item}
          isVisible={openItem === index}
          setIsVisible={() => handleClick(index)}
          index={index}
          key={index}
        />
      ))}
    </ul>
  );
};
