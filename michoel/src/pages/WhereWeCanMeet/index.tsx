import React from "react";
import { whereWeCanMeetData } from "../../constants/WhereWeCanMeet";
import { Button } from "../../components/Button";
import { FadeInSection } from "../../components/FadeInSection";
import { BigBenIcon } from "../../assets/SVGs/BigBenIcon";
import { TrainIcon } from "../../assets/SVGs/TrainIcon";
import { LaptopIcon } from "../../assets/SVGs/LaptopIcon";
import "./where-we-can-meet.scss";

const ICON_COLORS = ["#5B7B5E", "#C2A97E", "#A68B5B", "#8FA98F", "#3D5A40"];

const ICON_MAP = {
  bigben: BigBenIcon,
  train: TrainIcon,
  laptop: LaptopIcon,
} as const;

export const WhereWeCanMeet: React.FC = () => {
  return (
    <div className="where-we-can-meet">
      <section className="where-we-can-meet__header">
        <div className="where-we-can-meet__header-inner">
          <FadeInSection>
            <h1>Where we can meet</h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>Sessions are available in London, Borehamwood, or online</p>
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
                    {(() => {
                      const IconComponent = ICON_MAP[item.icon];
                      return (
                        <IconComponent
                          width={40}
                          height={40}
                          color={ICON_COLORS[index % ICON_COLORS.length]}
                        />
                      );
                    })()}
                  </div>
                  <h3 className="where-we-can-meet__card-title">
                    {item.title}
                  </h3>
                  <p className="where-we-can-meet__card-desc">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
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
