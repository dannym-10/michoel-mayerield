import React, { useEffect } from "react";
import "./work-with-me.scss";
import { ContactForm } from "../../components/ContactForm";

interface WorkWithMeProps {}

export const WorkWithMe: React.FC<WorkWithMeProps> = () => {
  return (
    <div className="work-with-me-wrapper">
      <div className="work-with-me-wrapper__main"></div>
      <h3 className="work-with-me-wrapper__main__title">
        Interested in working with me?
      </h3>
      <h4 className="work-with-me-wrapper__main__services-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo
        convallis, lobortis turpis in, ornare nunc. Phasellus egestas porttitor
        fringilla. Nunc venenatis tincidunt dolor eu hendrerit. Vestibulum
        vestibulum sem vitae pharetra vehicula.
      </h4>
      <ContactForm />
    </div>
  );
};
