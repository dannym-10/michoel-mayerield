import React from "react";
import { whereWeCanMeetData } from "../../constants/WhereWeCanMeet";
import { Button } from "../../components/Button";
import { FadeInSection } from "../../components/FadeInSection";
import "./where-we-can-meet.scss";

const ICON_COLORS = ["#5B7B5E", "#C2A97E", "#A68B5B", "#8FA98F", "#3D5A40"];

export const WhereWeCanMeet: React.FC = () => {
  return (
    <div className="where-we-can-meet">
      <section className="where-we-can-meet__header">
        <div className="where-we-can-meet__header-inner">
          <FadeInSection>
            <h1>Where we can meet</h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>
              I offer specialist support across a wide range of areas, tailored
              to the unique needs of each individual.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="where-we-can-meet__grid-section">
        <div className="where-we-can-meet__grid-inner">
          <div className="where-we-can-meet__grid">
            {whereWeCanMeetData.map((item, index) => (
              <FadeInSection key={item.title} delay={index * 80}>
                <div className="where-we-can-meet__card">
                  <div
                    className="where-we-can-meet__card-icon"
                    style={{
                      backgroundColor: `${ICON_COLORS[index % ICON_COLORS.length]}18`,
                    }}
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
                  <h3 className="where-we-can-meet__card-title">{item.title}</h3>
                  <p className="where-we-can-meet__card-desc">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="where-we-can-meet__approach">
        <div className="where-we-can-meet__approach-inner">
          <FadeInSection>
            <h2>My Approach</h2>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>
              I work integratively, drawing on CBT, DBT, motivational
              interviewing, person-centred therapy, psychodynamic therapy,
              schema therapy, and systemic therapy to meet each individual's
              needs. My practice is built on creating a safe, non-judgemental
              space where young people can explore their feelings and develop
              healthier ways of coping.
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

      <section className="where-we-can-meet__cta">
        <div className="where-we-can-meet__cta-inner">
          <FadeInSection>
            <h2>Ready to Get Started?</h2>
            <p>
              Book a free 15-minute phone or WhatsApp video chat — a quick,
              no-pressure conversation to see if we're a good fit.
            </p>
            <Button text="Next Steps" to="/next-steps" />
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};
