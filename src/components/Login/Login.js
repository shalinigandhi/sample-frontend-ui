import React from 'react';
import logo from '../../assets/logo.svg';
import './login.scss';

export const Login = () => {
  return (
    <div className="page-container login-container">
        <div className="logo-container text-center ">
          <img src={logo} alt="Logo" width="80px" height="58px"/>
        </div>
        <h1 className="heading">Sign In - Welcome Back!</h1>
        <div className="input-container text-center">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
        </div>
        <a className="forgot-text text-center" href="/reset-password">Forgotten your username or password?</a>
        <a href="" className="primary-button sign-in-button">Sign In</a>
        <div className="separator"></div>
        <div className="buttons-container">
            <a href="/sign-up" className="secondary-button">Create Account</a>
            <a href="" className="secondary-button">Continue As Guest</a>
        </div>
    </div>
  )
}
