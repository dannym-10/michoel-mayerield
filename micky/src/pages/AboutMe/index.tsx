import React from "react";
import mickyPortrait from "../../assets/michael-mayerfeld-portrait-image.jpg";
import { Button } from "../../components/Button";
import { FadeInSection } from "../../components/FadeInSection";
import "./about-me.scss";

export const AboutMe: React.FC = () => {
  return (
    <div className="about">
      <section className="about__header">
        <div className="about__header-inner">
          <FadeInSection>
            <h1>About Me</h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>Get to know a little more about who I am and how I work.</p>
          </FadeInSection>
        </div>
      </section>

      <section className="about__bio">
        <div className="about__bio-inner">
          <FadeInSection direction="left">
            <div className="about__image-wrapper">
              <img
                src={mickyPortrait}
                alt="Michoel Mayerfeld - Counsellor and Psychotherapist"
                className="about__image"
              />
            </div>
          </FadeInSection>
          <FadeInSection direction="right">
            <div className="about__text">
              <h2>My Story</h2>
              <p>
                As a Counsellor and Addiction Psychotherapist, I support children,
                young people and young adults with addictive behaviours and other
                mental health issues including anxiety, depression, exam stress,
                and loneliness.
              </p>
              <p>
                If this is for you or for your loved one, feel free to get in
                touch and we can set up our first appointment.
              </p>
              <p>
                I offer face to face counselling in my private practice
                (Hertfordshire and North West London) as well as sessions via Zoom.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="about__qualifications">
        <div className="about__qualifications-inner">
          <FadeInSection>
            <h2>Qualifications & Accreditations</h2>
          </FadeInSection>
          <FadeInSection delay={150}>
            <ul className="about__qual-list">
              <li>
                Advanced Practitioner and Accredited Member of Addiction
                Professionals
              </li>
              <li>
                Post Graduate Diploma in Addiction Psychology and Counselling
              </li>
              <li>Qualified Youth Worker</li>
              <li>
                Registered member of the BACP (British Association for Counselling
                and Psychotherapy)
              </li>
              <li>
                Member of the Registration, body and network for Addiction
                Professionals
              </li>
            </ul>
          </FadeInSection>
        </div>
      </section>

      <section className="about__cta">
        <div className="about__cta-inner">
          <FadeInSection>
            <h2>Interested in Working Together?</h2>
            <p>
              I offer a free 20-minute telephone consultation to help us understand
              each other before committing to anything.
            </p>
            <Button text="Get in Touch" to="/work-with-me" />
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};
