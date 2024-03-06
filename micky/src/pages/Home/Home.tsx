import React, { useState } from "react";
import { Spring } from "../../components/Spring";
import { Accordion } from "../../components/Accordion";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Spring>
      <Accordion />
    </Spring>
  );
};
