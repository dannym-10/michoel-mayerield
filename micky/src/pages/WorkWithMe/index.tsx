import React from "react";
import { FadeInSection } from "../../components/FadeInSection";
import { ContactForm } from "../../components/ContactForm";
import "./work-with-me.scss";

export const WorkWithMe: React.FC = () => {
  return (
    <div className="work-with-me">
      <section className="work-with-me__header">
        <div className="work-with-me__header-inner">
          <FadeInSection>
            <h1>Work With Me</h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>
              The first step is often the hardest. Let's have a conversation.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="work-with-me__content">
        <div className="work-with-me__content-inner">
          <FadeInSection direction="left">
            <div className="work-with-me__info">
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
                The first important decision you will make is to choose the right
                counsellor, so please feel free to ask any questions. There is no
                obligation to continue.
              </p>

              <div className="work-with-me__contact-box">
                <h3>Direct Contact</h3>
                <div className="work-with-me__contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:07851958142">07851 958 142</a>
                </div>
                <div className="work-with-me__contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:Michaelmayerfeld@gmail.com">
                    Michaelmayerfeld@gmail.com
                  </a>
                </div>
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
