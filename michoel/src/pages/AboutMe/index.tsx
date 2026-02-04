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
            <p>Counsellor and Addiction Psychotherapist for young people and families.</p>
          </FadeInSection>
        </div>
      </section>

      <section className="about__bio">
        <div className="about__bio-inner">
          <FadeInSection direction="left">
            <div className="about__image-wrapper">
              <img
                src={mickyPortrait}
                alt="Michael Mayerfeld - Counsellor and Psychotherapist"
                className="about__image"
              />
            </div>
          </FadeInSection>
          <FadeInSection direction="right">
            <div className="about__text">
              <h2>My Story</h2>
              <p>
                I'm an expert in adolescent stress and addiction recovery with an
                MSc in Addiction Psychology and Counselling, a decade of
                experience as a youth worker, and clinical roles in schools and
                an adolescent therapy charity. I can help with anxiety, low
                self-esteem, exam stress, substance use, behavioural addictions,
                or simply when life feels a little bit off.
              </p>
              <p>
                I have specialist training in supporting young people in the
                field of addiction. I can help with drug and alcohol use, whether
                you are experimenting or if it feels more complex. I also help
                young people affected by other people's addiction, and I
                recognise the bravery of parents reaching out when they think
                their use may be impacting their children.
              </p>
              <p>
                I offer face-to-face counselling in Hertfordshire (Borehamwood)
                and North-West London (Maida Vale), as well as sessions via
                Zoom.
              </p>
              <p>
                I always have a warm and non-judgemental approach. My scope
                extends to neurodivergent young people, and I am dedicated to
                providing a safe and inclusive counselling space for LGBTQ+
                clients.
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
                MSc in Addiction Psychology and Counselling
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
              Book a free 15-minute phone or WhatsApp video chat — a quick,
              no-pressure conversation to see if we're a good fit.
            </p>
            <Button text="Get in Touch" to="/work-with-me" />
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};
