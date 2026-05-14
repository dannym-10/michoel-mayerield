import React from "react";
import { FadeInSection } from "../../components/FadeInSection";
import "./privacy-policy.scss";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy">
      <section className="privacy-policy__header">
        <div className="privacy-policy__header-inner">
          <FadeInSection>
            <h1>Privacy Policy</h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>How I collect, use, and protect your personal information.</p>
          </FadeInSection>
        </div>
      </section>

      <section className="privacy-policy__content">
        <div className="privacy-policy__content-inner">
          <FadeInSection>
            <p className="privacy-policy__updated">Last updated: May 2026</p>
          </FadeInSection>

          <FadeInSection>
            <div className="privacy-policy__block">
              <h2>1. Who I Am</h2>
              <p>
                I am Michael Mayerfeld, a qualified Counsellor and Addiction
                Psychotherapist practising in London (Maida Vale), Borehamwood,
                and online. I am the data controller for the personal
                information collected through this website and through my
                therapeutic practice.
              </p>
              <p>
                <strong>Contact:</strong>{" "}
                <a href="mailto:Michaelmayerfeld@gmail.com">
                  Michaelmayerfeld@gmail.com
                </a>
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="privacy-policy__block">
              <h2>2. Information I Collect</h2>
              <p>
                I may collect the following personal information when you
                contact me through this website or engage in counselling:
              </p>
              <ul>
                <li>
                  <strong>Contact enquiries:</strong> Your name, email address,
                  phone number, and the content of your message when you
                  complete the contact form.
                </li>
                <li>
                  <strong>Therapy clients:</strong> Information relevant to your
                  counselling, including personal and health-related details you
                  share during sessions, session notes, and any correspondence
                  between us.
                </li>
              </ul>
              <p>
                I do not collect sensitive personal data through this website
                beyond what you choose to share in your message.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="privacy-policy__block">
              <h2>3. How I Use Your Information</h2>
              <p>I use your personal information to:</p>
              <ul>
                <li>Respond to your enquiries and arrange consultations.</li>
                <li>
                  Provide and manage the counselling services you have engaged
                  me for.
                </li>
                <li>
                  Maintain records required by my professional body (BACP) and
                  applicable law.
                </li>
                <li>
                  Contact you regarding appointments, cancellations, or other
                  service-related matters.
                </li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="privacy-policy__block">
              <h2>4. Lawful Basis for Processing</h2>
              <p>
                I process your personal data on the following lawful bases under
                UK GDPR:
              </p>
              <ul>
                <li>
                  <strong>Consent</strong> — when you submit the contact form or
                  provide information voluntarily.
                </li>
                <li>
                  <strong>Contract</strong> — when processing is necessary to
                  deliver the counselling services you have agreed to receive.
                </li>
                <li>
                  <strong>Legitimate interests</strong> — to manage my practice,
                  respond to enquiries, and maintain appropriate clinical
                  records.
                </li>
                <li>
                  <strong>Legal obligation</strong> — where I am required to
                  process data to comply with a legal or safeguarding duty.
                </li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="privacy-policy__block">
              <h2>5. Confidentiality</h2>
              <p>
                Everything you share with me in the context of counselling is
                treated as strictly confidential. I will not disclose your
                information to any third party without your consent, except in
                the following limited circumstances:
              </p>
              <ul>
                <li>
                  Where I am required by law (for example, a court order or
                  statutory duty to report).
                </li>
                <li>
                  Where there is a serious risk of harm to you or another person
                  and disclosure is necessary to prevent that harm.
                </li>
                <li>
                  In anonymised form, for clinical supervision as required by
                  the BACP ethical framework — no identifying details are
                  shared.
                </li>
              </ul>
              <p>
                Any such breach of confidentiality would be discussed with you
                first wherever possible.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="privacy-policy__block">
              <h2>6. How Long I Keep Your Data</h2>
              <p>
                In accordance with BACP guidance, I retain therapy records for a
                minimum of seven years following the end of our work together.
                After that period, records are securely destroyed.
              </p>
              <p>
                Enquiries that do not progress to therapy are retained for no
                longer than 12 months, then deleted.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="privacy-policy__block">
              <h2>7. Data Security</h2>
              <p>
                I take reasonable precautions to keep your personal information
                secure. Client records are stored securely and access is
                restricted to me alone. Electronic communications are conducted
                via password-protected devices.
              </p>
              <p>
                Please be aware that communication by email carries inherent
                security risks. If you have concerns about this, please raise
                them with me before sending sensitive information.
              </p>
              <p>
                <strong>Please note:</strong> This website and email
                communication are not monitored continuously and should not be
                used for urgent mental health support or emergencies. If you
                are in crisis, please contact your GP, call{" "}
                <strong>999</strong>, or reach the Samaritans on{" "}
                <strong>116 123</strong> (free, 24/7).
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="privacy-policy__block">
              <h2>8. Your Rights</h2>
              <p>
                Under UK GDPR you have the following rights regarding your
                personal data:
              </p>
              <ul>
                <li>
                  <strong>Right of access</strong> — to request a copy of the
                  information I hold about you.
                </li>
                <li>
                  <strong>Right to rectification</strong> — to ask me to correct
                  inaccurate or incomplete data.
                </li>
                <li>
                  <strong>Right to erasure</strong> — to request deletion of
                  your data, where no overriding legal or professional
                  obligation exists.
                </li>
                <li>
                  <strong>Right to restrict processing</strong> — to ask me to
                  limit how I use your data in certain circumstances.
                </li>
                <li>
                  <strong>Right to object</strong> — to object to processing
                  based on legitimate interests.
                </li>
                <li>
                  <strong>Right to data portability</strong> — to receive your
                  data in a structured, commonly used format where applicable.
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact me at{" "}
                <a href="mailto:Michaelmayerfeld@gmail.com">
                  Michaelmayerfeld@gmail.com
                </a>
                . I will respond within one month.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="privacy-policy__block">
              <h2>9. Cookies</h2>
              <p>
                This website does not use tracking cookies or analytics software
                that collects personal data. Any cookies in use are strictly
                necessary for the website to function.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="privacy-policy__block">
              <h2>10. Complaints</h2>
              <p>
                If you have a concern about how I handle your personal data,
                please contact me in the first instance. If you remain
                dissatisfied, you have the right to lodge a complaint with the
                Information Commissioner's Office (ICO):
              </p>
              <p>
                <a
                  href="https://ico.org.uk/make-a-complaint"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ico.org.uk/make-a-complaint
                </a>
                <br />
                Tel: 0303 123 1113
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="privacy-policy__block">
              <h2>11. Changes to This Policy</h2>
              <p>
                I may update this privacy policy from time to time. Any changes
                will be posted on this page with a revised date. I encourage you
                to review this policy periodically.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};
