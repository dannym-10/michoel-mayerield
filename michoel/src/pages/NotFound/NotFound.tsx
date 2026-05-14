import React from "react";
import { Link } from "react-router-dom";
import { FadeInSection } from "../../components/FadeInSection";
import "./not-found.scss";

export const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <section className="not-found__header">
        <div className="not-found__header-inner">
          <FadeInSection>
            <h1>404</h1>
          </FadeInSection>
          <FadeInSection delay={150}>
            <p>Page Not Found</p>
          </FadeInSection>
        </div>
      </section>

      <section className="not-found__content">
        <div className="not-found__content-inner">
          <FadeInSection>
            <p className="not-found__message">
              The page you're looking for doesn't exist or may have been moved.
              Please use the links below to find your way back.
            </p>
          </FadeInSection>
          <FadeInSection delay={150}>
            <div className="not-found__actions">
              <Link to="/" className="not-found__btn-primary">
                Back to Home
              </Link>
              <Link to="/next-steps" className="not-found__btn-secondary">
                Get in Touch
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};
