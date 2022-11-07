import React from 'react';
import style from './Login.module.css';

export const Login = () => {
  return (
    <div className={style.containerPrincipal}>
      <div className={style.box}>
        <div className={style.form}>
          <h1>Sign in</h1>
          <div className={style.inputBox}>
            <input type="text" required />
            <span>Username</span>
            <i></i>
          </div>
          <div className={style.inputBox}>
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </div>
          <div className={style.links}>
            <a href="#">Forgot Password</a>
            <a href="#">Signup</a>
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};
