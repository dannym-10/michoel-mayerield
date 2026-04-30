import React from "react";
import mickyPortrait from "../../assets/Images/michael-mayerfeld-portrait-image.jpg";
import { Button } from "../../components/Button";
import { FadeInSection } from "../../components/FadeInSection";
import "./about-me.scss";

export const AboutMe: React.FC = () => {
  return (
    <div className="about">
      <section className="about__header">
        <div className="about__header-inner">
          <FadeInSection>
            <h1>Your Therapist</h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>Counsellor and Psychotherapist</p>
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
              <h2>My Approach</h2>
              <p>
                When you come to a session, you can expect a sensitive, gentle
                and thoughtful therapist. Authenticity underpins everything I
                do, and I use my genuine, caring self to give you my full
                attention so we can think together and explore your feelings
                together.
              </p>
              <p>
                With the rise in awareness of different therapy approaches, it
                is natural to feel drawn to specific modalities, such as CBT for
                anxiety. I work integratively, which means the support you
                receive is shaped using person centred therapy, CBT, DBT
                techniques, motivational interviewing, and a psychodynamic lens.
                This allows me to meet your individual needs and respond to the
                particular areas you may be struggling with.
              </p>
              <p>
                I am dedicated to providing a warm, non judgemental and
                affirming space for my queer clients. My intercultural training
                also supports me in working with clients from the global
                majority, where we can reflect openly on culture together. It is
                crucial to me that I understand and celebrate the subtleties and
                nuances of your identity.
              </p>
              <p>
                In the first couple of sessions, I may gently guide the process
                by asking some leading questions or offering some structure as
                you begin to feel more comfortable. As therapy progresses, the
                space becomes more yours, and you are free to choose the
                direction of the work. At the beginning of a first session with
                a young person, I am also happy for a parent to join if that
                works for you all.
              </p>
              <p>
                You can expect me to keep in mind all of what you bring and to
                offer my full, undivided attention. We spend the ending few
                minutes of each session reflecting and grounding, so that you
                can leave the session feeling as settled and supported as
                possible.
              </p>

              <h2>My Story</h2>
              <p>
                I am an expert in adolescent stress and addiction recovery, with
                an MSc in Addiction Psychology and Counselling and over a decade
                of clinical experience across schools, addiction services, and
                adolescent therapy charities.
              </p>
              <p>
                Following my Youth Work training, I specialised in drug and
                alcohol support before moving into psychotherapy, which has
                become my core professional focus. It is within this space that
                I am able to offer something more comprehensive, containing and
                transformative, where people can feel safe, understood, and
                begin to make sense of their inner world.
              </p>
              <p>
                Fully supported by industry specific, elite supervisors allows
                me to constantly reflect and adapt to the ever changing digital
                and interpersonal environments young people are navigating. The
                work I do is central to me and is rooted in my sense of justice
                and equal opportunity.
              </p>
              <p>
                I can support with anxiety, low self esteem, exam stress, family
                conflict, or when life simply feels off. My wider specialist
                experience is reflected in the training and qualifications
                listed below.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
      <section className="about__qualifications">
        <div className="about__qualifications-inner">
          <FadeInSection>
            <h2>Qualifications, Memberships and Professional Standards</h2>
          </FadeInSection>
          <FadeInSection delay={150}>
            <ul className="about__qual-list">
              <li>
                Counsellor and Psychotherapist, Registered Member of the BACP
              </li>
              <li>MSc in Addiction Psychology and Counselling</li>
              <li>
                Advanced Practitioner and Accredited Member of Addiction
                Professionals
              </li>
              <li>Registered with the ICO</li>
              <li>
                Fully insured with professional indemnity and public liability
                insurance
              </li>
              <li>Enhanced DBS on the Update Service</li>
              <li>Level 3 Safeguarding Children and Young People</li>
            </ul>
          </FadeInSection>
          <FadeInSection>
            <h2>Ongoing Training</h2>
          </FadeInSection>
          <FadeInSection delay={150}>
            <ul className="about__qual-list">
              <li>Eating disorder (NHS CNWL, Stride)</li>
              <li>
                How to work with people with pornography addiction (Laurel
                Centre)
              </li>
              <li>
                Understanding and working with Eating Disorders in Children and
                Young People (Brent Centre for Young People)
              </li>
              <li>
                Intercultural Psychotherapy - Equality, diversity and inclusion
                training (Nasfiyat)
              </li>
              <li>
                Complex Trauma and Trauma Informed Care (Change Grow Live)
              </li>
              <li>
                Working with autistic Young People (Brent Centre for Young
                People)
              </li>
              <li>Women, Young people and Problem gambling (Gamcare)</li>
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
            <Button text="Get in Touch" to="/next-steps" />
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};
