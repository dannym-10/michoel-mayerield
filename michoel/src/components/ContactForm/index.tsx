import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./contact-form.scss";
import { Button } from "../Button";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormData>();
  const { formState, register, handleSubmit, setError } = form;
  const { errors } = formState;

  const onSubmit = (data: FormData) => {
    if (!data.email && !data.phone) {
      setError("email", {
        type: "manual",
        message: "Please provide either an email or phone number",
      });
      setError("phone", {
        type: "manual",
        message: "Please provide either an email or phone number",
      });
      return;
    }
    console.log("submitting", data);
    setSubmitted(true);
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
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="firstName">
              First Name <span className="contact-form__required">*</span>
            </label>
            <input
              id="firstName"
              placeholder="Your first name"
              className={errors.firstName ? "contact-form__input--error" : ""}
              {...register("firstName", {
                required: "First name is required",
              })}
            />
            {errors.firstName && (
              <span className="contact-form__error">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="contact-form__field">
            <label htmlFor="lastName">
              Last Name <span className="contact-form__required">*</span>
            </label>
            <input
              id="lastName"
              placeholder="Your last name"
              className={errors.lastName ? "contact-form__input--error" : ""}
              {...register("lastName", {
                required: "Last name is required",
              })}
            />
            {errors.lastName && (
              <span className="contact-form__error">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className={errors.email ? "contact-form__input--error" : ""}
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="contact-form__error">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="contact-form__field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              className={errors.phone ? "contact-form__input--error" : ""}
              {...register("phone")}
            />
            {errors.phone && (
              <span className="contact-form__error">
                {errors.phone.message}
              </span>
            )}
          </div>
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

        <div className="contact-form__submit">
          <Button text="Send Message" type="submit" variant="secondary" />
        </div>
      </form>
    </div>
  );
};
