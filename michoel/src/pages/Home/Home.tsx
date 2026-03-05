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
              counselling and addiction psychotherapy for children, young
              people, and young adults in Hertfordshire, North-West London and
              online.
            </p>
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className="home__hero-cta">
              <Button text="Get in Touch" to="/next-steps" />
              <Button
                text="Schedule Free Consultation"
                variant="outline"
                href="https://secure.counselling-directory.org.uk/introductory-call/96034/select-slot"
              />
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3>Psychotherapy</h3>
                <p>
                  At Michael Mayerfeld Psychotherapy, I offer gentle,
                  compassionate psychotherapy for adults and young people facing
                  a range of emotional and mental health challenges. You may be
                  struggling with anxiety, depression, low self-esteem, trauma,
                  grief, relationship difficulties, identity questions, or
                  simply feeling overwhelmed. Whatever brings you to therapy, I
                  provide a calm, non-judgemental space where you can speak
                  openly and feel truly heard. My approach is collaborative and
                  tailored to you. We move at a pace that feels safe, exploring
                  patterns and experiences with care and curiosity. Drawing on
                  evidence-based approaches including CBT, psychodynamic
                  understanding, and emotional regulation strategies, I adapt
                  therapy to your individual needs. Above all, I aim to support
                  you in building insight, resilience, and self-understanding,
                  helping you move toward meaningful and lasting change with
                  warmth, respect, and kindness.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="home__feature-card">
                <div className="home__feature-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3>Therapy for Adolescence</h3>
                <p>
                  Adolescence can feel overwhelming—for teens and for parents.
                  As a licensed therapist specializing in adolescent therapy, I
                  provide a supportive, nonjudgmental space where teens can talk
                  openly about anxiety, depression, friendships, identity,
                  school stress, family conflict, and life transitions. My
                  approach is warm, collaborative, and tailored to each young
                  person's needs. I blend evidence-based techniques like
                  cognitive behavioral therapy (CBT), emotional regulation
                  skills, and mindfulness with genuine connection and humor to
                  help teens feel understood and empowered. Together, we build
                  coping tools, strengthen communication, and develop resilience
                  that extends beyond the therapy room. I also partner with
                  parents when appropriate, offering guidance and feedback to
                  support progress at home. My goal is to help adolescents grow
                  in confidence, self-awareness, and emotional strength so they
                  can navigate challenges and move forward with clarity,
                  balance, and hope.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="home__feature-card">
                <div className="home__feature-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>Addiction</h3>
                <p>
                  At Michael Mayerfeld Psychotherapy, I provide specialist
                  addiction psychotherapy for a wide range of behavioural and
                  substance-related difficulties. Addiction can take many
                  forms—alcohol or drug misuse, gambling, gaming, pornography,
                  sex, shopping, social media, or compulsive relationship
                  patterns—and often develops as a way of coping with distress,
                  trauma, anxiety, or low self-worth. Together, we explore not
                  just the behaviour itself, but the underlying emotional
                  drivers that keep the cycle going. With an MSc in Addiction
                  Psychology & Counselling and membership with Addiction
                  Professionals (ADAP), I use evidence-based approaches
                  including CBT, motivational interviewing, relapse prevention,
                  and emotional regulation strategies. Therapy is collaborative,
                  compassionate, and paced to suit you. My aim is to help you
                  regain control, strengthen resilience, and build healthier
                  ways of meeting your needs for the long term.
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
            <Button text="Next Steps" variant="primary" to="/next-steps" />
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};
