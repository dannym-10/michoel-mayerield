import React from "react";
import { Accordion } from "../../components/Accordion";
import { Button } from "../../components/Button";
import { FadeInSection } from "../../components/FadeInSection";
import "./home.scss";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-inner">
          <FadeInSection>
            <h1 className="home__hero-title">
              Supporting Young People Through Life's Challenges
            </h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p className="home__hero-subtitle">
              If your child is overwhelmed, misunderstood, or struggling, you
              don't have to wait months for CAMHS. I offer professional
              counselling and addiction psychotherapy for children, young people,
              and young adults in Hertfordshire, North-West London and online.
            </p>
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className="home__hero-cta">
              <Button text="Get in Touch" to="/work-with-me" />
              <Button text="Learn More" variant="outline" to="/about-me" />
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="home__features">
        <div className="home__features-inner">
          <FadeInSection>
            <h2 className="home__section-title">How I Can Help</h2>
          </FadeInSection>
          <div className="home__features-grid">
            <FadeInSection delay={100}>
              <div className="home__feature-card">
                <div className="home__feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3>Young People</h3>
                <p>
                  If school feels overwhelming or life feels harder than it
                  should, I can help ease the pressure, improve focus, build
                  genuine friendships, and strengthen confidence.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="home__feature-card">
                <div className="home__feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3>Mental Health</h3>
                <p>
                  Support for anxiety, depression, self-harm, exam stress, and
                  other emotional challenges young people face in today's world.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="home__feature-card">
                <div className="home__feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>Addiction</h3>
                <p>
                  Whether it's substances, gaming, gambling, or other compulsive
                  behaviours, I offer a kind and caring space to talk and find a
                  way forward.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={400}>
              <div className="home__feature-card">
                <div className="home__feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Family Support</h3>
                <p>
                  Helping parents and families find calmer family life, fewer
                  crises, clearer steps to support your child, and renewed hope
                  for the future.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="home__faq">
        <div className="home__faq-inner">
          <FadeInSection>
            <h2 className="home__section-title">Common Questions</h2>
          </FadeInSection>
          <FadeInSection delay={150}>
            <Accordion />
          </FadeInSection>
        </div>
      </section>

      <section className="home__cta">
        <div className="home__cta-inner">
          <FadeInSection>
            <h2 className="home__cta-title">Ready to Take the First Step?</h2>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p className="home__cta-text">
              Reaching out is the hardest part. Book a free 15-minute phone or
              WhatsApp video chat — a quick, no-pressure conversation to see if
              we're a good fit.
            </p>
          </FadeInSection>
          <FadeInSection delay={300}>
            <Button text="Work With Me" variant="primary" to="/work-with-me" />
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};
