import React from "react";
import mickyPortrait from "../../assets/michael-mayerfeld-portrait-image.jpg";
import "./about-me.scss";

interface AboutMeProps {}

export const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className="about-me-wrapper">
      <div className="about-me-wrapper__image">
        <div className="about-me-wrapper__image-container">
          <img src={mickyPortrait} alt="micky-portrait-photo" />
        </div>
      </div>
      <div className="about-me-wrapper__info">
        <p className="text">
          As a Counsellor and Addiction Psychotherapist, I support children,
          young people and young adults with addictive behaviours and other
          mental health issues (e.g. anxiety, depression, exam stress,
          loneliness). If this is for you or for your loved one, feel free to
          get in touch and we can set up our first appointment.
          <br />
          <br />I am an Advanced Practitioner and Accredited Member of the
          professional body, Addiction Professionals. I hold a Post Graduate
          Diploma in Addiction Psychology and Counselling and I am a qualified
          Youth Worker. I am a registered member of the bacp and the
          Registration, body and network for addiction professionals.
          <br />
          <br />I offer face to face counselling in my private practice
          (Hertfordshire and North West London) as well as Zoom calls.
        </p>
      </div>
    </div>
  );
};
