import React, { useEffect } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import "./contact-form.scss";
import { Button } from "../Button";

interface ContactFormProps {}

interface FormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone: number;
  interests: string; // update to a dropdown of values
  methodOfContact: string; // best method to get in contact phone, text, email?
}

export const ContactForm: React.FC<ContactFormProps> = () => {
  const form = useForm<FormData>();
  const { formState, control, register, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: FormData) => {
    console.log("submitting", data);
  };

  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful]);

  return (
    <div className="contact-form-wrapper">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="contact-form-wrapper__form"
      >
        <div className="contact-form-wrapper__form__inputs">
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              {...register("firstName", {
                required: "First name is required",
              })}
            />
            <p>{errors.firstName?.message}</p>
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" {...register("lastName")} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="input-wrapper">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="number"
              {...register("phone", {
                required: "Phone number is required",
              })}
            />
            <p>{errors.phone?.message}</p>
          </div>
        </div>
        {/* <div>
          <button type="submit">Submit</button>
        </div> */}
        <Button text="hello" />
      </form>
      <DevTool control={control} />
    </div>
  );
};
