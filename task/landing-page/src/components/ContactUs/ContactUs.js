import React from 'react';
import { useForm } from "react-hook-form";
import { StyledContactUs } from './Contact.styled';

export default function ContactUs() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <StyledContactUs>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        FirstName:
        <input {...register("firstName", { required: true, maxLength: 20 })} />
      </label>
      <label>
        LastName:
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      </label>
      <label>
        Email:
        <input type="email" {...register("email", { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
      </label>
     <label>
      Message:
      <input type="message" {...register("firstName", { required: true, maxLength: 20 })} />
     </label>
      <input type="submit" />
    </form>
    </StyledContactUs>
    
  );
}
