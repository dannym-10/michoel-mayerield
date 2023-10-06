import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
interface WorkWithMeProps { }

interface FormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone: number;
  interests: string; // update to a dropdown of values
  methodOfContact: string; // best method to get in contact phone, text, email?
}


export const WorkWithMe: React.FC<WorkWithMeProps> = () => {
  const form = useForm<FormData>();
  const { formState, control, register, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: FormData) => {
    console.log('submitting', data);
  }

  useEffect(() => {
    isSubmitSuccessful && reset()
  }, [isSubmitSuccessful])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <input id='firstName' placeholder='First Name' {...register("firstName", {
            required: 'First name is required'
          })} />
          <p>{errors.firstName?.message}</p>
        </div>
        <div>
          <input id='lastName' placeholder='Last Name' {...register("lastName")} />
        </div>
        <div>
          <input id='email' type='email' placeholder='Email Address' {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Please enter a valid email address'
            }
          })} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input id='phone' type='number' placeholder='Phone Number' {...register("phone", {
            required: 'Phone number is required'
          })} />
          <p>{errors.phone?.message}</p>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};
