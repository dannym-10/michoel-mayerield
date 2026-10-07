import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./contact-form.scss";
import { Button } from "../Button";
import { useSendEmail } from "../../hooks/useSendEmail";
import { useTurnstile } from "../../hooks/useTurnstile";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const form = useForm<FormData>();
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;
  const { send, loading, error: submitError } = useSendEmail();
  const {
    containerRef: turnstileRef,
    token: turnstileToken,
    loadError: turnstileLoadError,
    reset: resetTurnstile,
  } = useTurnstile();

  useEffect(() => {
    if (turnstileToken) setTurnstileError(null);
  }, [turnstileToken]);

  const onSubmit = async (data: FormData) => {
    if (!turnstileToken) {
      setTurnstileError("Please complete the verification check.");
      return;
    }
    setTurnstileError(null);

    const ok = await send({ ...data, cfTurnstileToken: turnstileToken });
    if (ok) {
      setSubmitted(true);
    } else {
      resetTurnstile();
    }
  };

  if (submitted) {
    return (
      <div className="contact-form contact-form--success">
        <div className="contact-form__success">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h3>Thank You</h3>
          <p>
            Your message has been sent successfully. I'll get back to you within
            24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="contact-form__form"
      >
        <div className="contact-form__field">
          <label htmlFor="name">
            Name <span className="contact-form__required">*</span>
          </label>
          <input
            id="name"
            placeholder="Your name"
            className={errors.name ? "contact-form__input--error" : ""}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="contact-form__error">{errors.name.message}</span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">
            Email Address <span className="contact-form__required">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className={errors.email ? "contact-form__input--error" : ""}
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <span className="contact-form__error">{errors.email.message}</span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="phone">Phone Number <span className="contact-form__optional">(optional)</span></label>
          <input
            id="phone"
            type="tel"
            placeholder="Your phone number"
            {...register("phone")}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell me a little about what you're looking for..."
            {...register("message")}
          />
        </div>

        <div className="contact-form__field">
          {turnstileLoadError ? (
            <span className="contact-form__error">
              Verification failed to load. Please refresh the page or email
              me directly.
            </span>
          ) : (
            <div ref={turnstileRef} />
          )}
          {turnstileError && (
            <span className="contact-form__error">{turnstileError}</span>
          )}
        </div>

        {submitError && (
          <span className="contact-form__error">{submitError}</span>
        )}

        <div className="contact-form__submit">
          <Button
            text={loading ? "Sending…" : "Send Message"}
            type="submit"
            variant="secondary"
            disabled={loading || turnstileLoadError}
          />
        </div>
      </form>
    </div>
  );
};
