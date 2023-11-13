
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { registerThunk } from 'redux/authReduser';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registerThunk(data));
      console.log('Registration successful');
    reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Name</h2>
        <input className="input" placeholder="Write your name" {...register('name', { required: true })} />
      </div>
      <div>
        <h2>Email</h2>
        <input className="input" placeholder="Write your email" {...register('email', { required: true })} />
      </div>
      <div>
        <h2>Password</h2>
        <input
          className="input"
          placeholder="Write your password"
          {...register('password', { required: true, minLength: 7 })}
          type="password"
        />
        {errors.password && errors.password.type === 'required' && <span className="error">Password is required</span>}
        {errors.password && errors.password.type === 'minLength' && (
          <span className="error">Password must be at least 7 characters long</span>
        )}
      </div>
      <input className="submitButton" type="submit" value="Submit" />
    </form>
  );
}

export default RegisterPage;