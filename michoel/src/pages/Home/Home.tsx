import React from "react";
import { Accordion } from "../../components/Accordion";
import { Button } from "../../components/Button";
import { FadeInSection } from "../../components/FadeInSection";
import "./home.scss";
import { Cognition } from "../../assets/SVGs/Cognition";
import { Rollercoaster } from "../../assets/SVGs/Rollercoaster";
import { SadSitting } from "../../assets/SVGs/SadSitting";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-inner">
          <FadeInSection>
            <h1 className="home__hero-title">
              Helping people find their way forward
            </h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p className="home__hero-subtitle">
              Specialist therapy for young people and young adults in
              Hertfordshire and North-West London.
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
                  <SadSitting height={50} width={50} />
                </div>
                <h3>Therapy for Adolescents</h3>
                <p>
                  If your child is overwhelmed, misunderstood, refusing school,
                  self harming, or you are worried about them in any way, you do
                  not have to wait months or years for CAMHS support. There does
                  not have to be something deeply wrong, it could just feel like
                  things simply are a little off, perhaps exam stress,
                  friendship difficulties or loneliness. Having the right space
                  to talk can make a real difference and working with teenage
                  young people is my specific area of experience. Sessions
                  respect a child's confidentiality, but safeguarding remains
                  central, so I will communicate with parents if any safety
                  concerns arise. Therapy often results in calmer family life,
                  fewer crises, clearer steps to support your child, and renewed
                  hope for the future.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="home__feature-card">
                <div className="home__feature-icon">
                  <Cognition height={50} width={50} />
                </div>
                <h3>Neurodiversity</h3>
                <p>
                  Specialist neuroaffirming therapy supports neurodivergent
                  young people in a space where they do not have to mask or
                  explain themselves to be understood. Alongside my private
                  practice, I work for a well established charity in London
                  specifically supporting ADHD and autistic young people, which
                  informs my work. I recognise that some young people experience
                  alexithymia, making it difficult to identify or name emotions,
                  so therapy does not rely on open questions or expect immediate
                  answers about feelings. Sessions are structured and
                  predictable, offering a routine that helps reduce anxiety when
                  the world feels overwhelming. I adapt how I communicate,
                  remain mindful of sensory needs, and move at each young
                  person's pace so they can engage in ways that feel comfortable
                  and safe.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="home__feature-card">
                <div className="home__feature-icon">
                  <Rollercoaster height={50} width={50} />
                </div>
                <h3>Addiction</h3>
                <p>
                  If you are struggling to keep up with your friends and using
                  substances more than you would like, therapy can offer a
                  supportive space to make sense of what is happening. I offer
                  young people and young adults personalised therapy that helps
                  when gaming, gambling, or pornography is becoming difficult to
                  regulate. Using the best evidence-informed outcomes for
                  addiction related challenges, you can explore compulsive
                  behaviours in a way that feels understanding and modern.
                  Whether these patterns are just starting to appear, have been
                  affecting your life for some time, or someone else's addictive
                  behaviours are impacting you, support can help you regain
                  control. Because addiction still carries so much stigma,
                  therapy provides a confidential, compassionate, and
                  non-judgemental space to talk openly.
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
