import React from "react";
import { servicesData } from "../../constants/Services";
import { Button } from "../../components/Button";
import { FadeInSection } from "../../components/FadeInSection";
import "./services.scss";

const ICON_COLORS = ["#5B7B5E", "#C2A97E", "#A68B5B", "#8FA98F", "#3D5A40"];

export const Services: React.FC = () => {
  return (
    <div className="services">
      <section className="services__header">
        <div className="services__header-inner">
          <FadeInSection>
            <h1>Services</h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>
              I offer specialist support across a wide range of areas, tailored
              to the unique needs of each individual.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="services__grid-section">
        <div className="services__grid-inner">
          <div className="services__grid">
            {servicesData.map((service, index) => (
              <FadeInSection key={service.title} delay={index * 80}>
                <div className="services__card">
                  <div
                    className="services__card-icon"
                    style={{ backgroundColor: `${ICON_COLORS[index % ICON_COLORS.length]}18` }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={ICON_COLORS[index % ICON_COLORS.length]}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                  </div>
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-desc">{service.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="services__approach">
        <div className="services__approach-inner">
          <FadeInSection>
            <h2>My Approach</h2>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>
              I work integratively, drawing on CBT, DBT, motivational
              interviewing, person-centred therapy, psychodynamic therapy, schema
              therapy, and systemic therapy to meet each individual's needs. My
              practice is built on creating a safe, non-judgemental space where
              young people can explore their feelings and develop healthier ways
              of coping.
            </p>
            <p>
              Whether working with substance misuse, behavioural addictions, or
              wider mental health challenges, I believe in addressing the root
              causes rather than just the symptoms. Every person's journey is
              different, and therapy should reflect that.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="services__cta">
        <div className="services__cta-inner">
          <FadeInSection>
            <h2>Ready to Get Started?</h2>
            <p>
              Book a free 15-minute phone or WhatsApp video chat — a quick,
              no-pressure conversation to see if we're a good fit.
            </p>
            <Button text="Work With Me" to="/work-with-me" />
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};
