import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginThunk } from "redux/authReduser";


function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginThunk(data));
    console.log('Login successful');
    reset();
  }

  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2 className="loginForm__title">Email</h2>
        <input className="loginForm__inputField" placeholder="Write your email" {...register("email")} required />
      </div>

      <div>
        <h2 className="loginForm__title">Password</h2>
        <input
          className="loginForm__inputField"
          placeholder="Write your password"
          {...register("password", { required: true, minLength: 6 })}
          type="password"
          required
        />
        {errors.password && <span className="loginForm__errorText">Password must be at least 6 characters long</span>}
      </div>

      <input className="loginForm__submitButton" type="submit" value="Submit" />
    </form>
  );
}

export default LoginPage;
