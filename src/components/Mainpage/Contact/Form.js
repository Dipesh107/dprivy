import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classes from "./Form.module.css"

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("email")} placeholder="Email Address" />
      <textarea {...register("message")} placeholder="Enter Your Message" className={classes.message} />
      {/* <textarea {...register("message")} placeholder="Enter Your Message" rows="5"></textarea> */}
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
};

export default Form;