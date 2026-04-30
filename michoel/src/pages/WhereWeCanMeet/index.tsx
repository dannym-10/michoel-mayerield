import React, { useState } from "react";
import { whereWeCanMeetData } from "../../constants/WhereWeCanMeet";
import { Button } from "../../components/Button";
import { FadeInSection } from "../../components/FadeInSection";
import { BigBenIcon } from "../../assets/SVGs/BigBenIcon";
import { TrainIcon } from "../../assets/SVGs/TrainIcon";
import { LaptopIcon } from "../../assets/SVGs/LaptopIcon";
import maidaValeImg from "../../assets/Images/maida-vale.jpg";
import borehamwoodImg from "../../assets/Images/borehamwood.jpg";
import onlineImg from "../../assets/Images/online.jpg";
import "./where-we-can-meet.scss";

const COLOR_PRIMARY = "#5B7B5E";

const ICON_MAP = {
  bigben: BigBenIcon,
  train: TrainIcon,
  laptop: LaptopIcon,
} as const;

const IMAGE_MAP = {
  "maida-vale": maidaValeImg,
  borehamwood: borehamwoodImg,
  online: onlineImg,
} as const;

export const WhereWeCanMeet: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

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
                  <div className="where-we-can-meet__card-icon">
                    {(() => {
                      const IconComponent = ICON_MAP[item.icon];
                      return (
                        <IconComponent
                          width={50}
                          height={50}
                          color={COLOR_PRIMARY}
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
                  <button
                    className="where-we-can-meet__card-img-btn"
                    onClick={() =>
                      setActiveImage({
                        src: IMAGE_MAP[item.imageKey],
                        title: item.title,
                      })
                    }
                    aria-label={`View photo of ${item.title}`}
                  >
                    <img
                      src={IMAGE_MAP[item.imageKey]}
                      alt={item.title}
                      className="where-we-can-meet__card-img"
                    />
                  </button>
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

      {activeImage && (
        <div
          className="where-we-can-meet__modal-backdrop"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="where-we-can-meet__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="where-we-can-meet__modal-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.title}
              className="where-we-can-meet__modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};
