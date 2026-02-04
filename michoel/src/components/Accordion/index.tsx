import React, { useState } from "react";
import { homeAccordionData } from "../../constants/HomeAccordion";
import "./accordion.scss";
import { AccordionItem } from "../AccordionItem";

export const Accordion: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleClick = (itemIndex: number) => {
    setOpenItem(itemIndex === openItem ? null : itemIndex);
  };

  return (
    <ul className="accordion">
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
