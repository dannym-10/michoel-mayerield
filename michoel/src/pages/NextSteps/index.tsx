import React from "react";
import { FadeInSection } from "../../components/FadeInSection";
import { ContactForm } from "../../components/ContactForm";
import "./next-steps.scss";

export const NextSteps: React.FC = () => {
  return (
    <div className="next-steps">
      <section className="next-steps__header">
        <div className="next-steps__header-inner">
          <FadeInSection>
            <h1>Next steps</h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>
              The first step is often the hardest. Let's have a conversation.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="next-steps__content">
        <div className="next-steps__content-inner">
          <FadeInSection direction="left">
            <div className="next-steps__info">
              <h2>Get in Touch</h2>
              <p>
                If you decide you would like to go ahead with counselling then
                please feel free to get in touch. You can contact me by email,
                telephone, text or simply fill in the form on this page.
              </p>
              <p>
                Please be assured that all contact between us is strictly
                confidential.
              </p>
              <p>
                Once you have left me a message, I will try to get back in touch
                within 24 hours to arrange a suitable time for a free,
                confidential 20-minute telephone consultation. This consultation
                helps us understand each other better and may help you decide
                whether you would like to continue with me.
              </p>
              <p>
                The first important decision you will make is to choose the
                right counsellor, so please feel free to ask any questions.
                There is no obligation to continue.
              </p>

              <div className="next-steps__contact-box">
                <h3>Schedule Free Consultation</h3>
                <a
                  href="https://secure.counselling-directory.org.uk/introductory-call/96034/select-slot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="next-steps__booking-card"
                >
                  <div className="next-steps__booking-card-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className="next-steps__booking-card-text">
                    <span className="next-steps__booking-card-title">Book a free intro call</span>
                    <span className="next-steps__booking-card-sub">Choose a time that suits you via the Counselling Directory</span>
                  </div>
                  <svg
                    className="next-steps__booking-card-arrow"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <ContactForm />
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};
