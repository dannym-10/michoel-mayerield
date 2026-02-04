import React from "react";
import { Button } from "../../components/Button";
import { FadeInSection } from "../../components/FadeInSection";
import "./resources.scss";

const therapies = [
  "Behavioural therapy",
  "CBT",
  "DBT",
  "Motivational Interviewing",
  "Person-centred therapy",
  "Psychodynamic therapy",
  "Schema therapy",
  "Systemic therapy",
  "Child counselling",
];

export const Resources: React.FC = () => {
  return (
    <div className="resources">
      <section className="resources__header">
        <div className="resources__header-inner">
          <FadeInSection>
            <h1>Practical Information</h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>
              Everything you need to know about sessions, fees, and what to
              expect.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="resources__section">
        <div className="resources__section-inner">
          <FadeInSection>
            <h2>Fees & Concessions</h2>
          </FadeInSection>
          <div className="resources__grid">
            <FadeInSection delay={100}>
              <div className="resources__card">
                <h3>Session Fees</h3>
                <p>Sessions from £75 – £80.</p>
                <p>
                  I also offer a complimentary introductory phone call so we can
                  see if we're a good fit before committing to anything.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="resources__card">
                <h3>Concessions</h3>
                <p>Concessionary rates are available for:</p>
                <div className="resources__tag-list">
                  <span className="resources__tag">Low income</span>
                  <span className="resources__tag">Keyworkers</span>
                  <span className="resources__tag">Students</span>
                  <span className="resources__tag">Refugees</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="resources__section resources__section--alt">
        <div className="resources__section-inner">
          <FadeInSection>
            <h2>Session Types & Availability</h2>
          </FadeInSection>
          <div className="resources__grid">
            <FadeInSection delay={100}>
              <div className="resources__card">
                <h3>Where I See Clients</h3>
                <p>
                  I am currently accepting new enquiries. I see clients in
                  Hertfordshire (Borehamwood), North-West London (Maida Vale), as
                  well as on Zoom.
                </p>
                <p>Flexible hours are available.</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="resources__card">
                <h3>Who I Work With</h3>
                <p>I work with:</p>
                <div className="resources__tag-list">
                  <span className="resources__tag">Young people (13–17)</span>
                  <span className="resources__tag">Young adults (18–24)</span>
                  <span className="resources__tag">Adults (25–64)</span>
                </div>
                <p style={{ marginTop: "12px" }}>
                  Sessions available in person, online, and by telephone.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="resources__section">
        <div className="resources__section-inner">
          <FadeInSection>
            <h2>What to Expect</h2>
          </FadeInSection>
          <FadeInSection delay={150}>
            <ul className="resources__info-list">
              <li>
                Once you reach out, I will respond within 24 hours. Please check
                your spam folder if you have not heard from me within this time
                frame.
              </li>
              <li>
                We will then agree on a time and place for our first
                appointment. I find weekly appointments are normally most
                appropriate, and generally we keep to the same time and place
                each week.
              </li>
              <li>
                Parents and carers are welcome to join the first session if this
                would be helpful.
              </li>
              <li>
                I offer both short-term and longer-term therapy, tailored to
                your needs.
              </li>
            </ul>
          </FadeInSection>
        </div>
      </section>

      <section className="resources__section resources__section--alt">
        <div className="resources__section-inner">
          <FadeInSection>
            <h2>Therapies Offered</h2>
          </FadeInSection>
          <FadeInSection delay={150}>
            <div className="resources__tag-list">
              {therapies.map((therapy) => (
                <span key={therapy} className="resources__tag">
                  {therapy}
                </span>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="resources__cta">
        <div className="resources__cta-inner">
          <FadeInSection>
            <h2>Ready to Get in Touch?</h2>
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
