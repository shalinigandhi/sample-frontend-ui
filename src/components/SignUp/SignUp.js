import React from 'react';
import logo from '../../assets/logo.svg';
import google from '../../assets/google.svg';
import './signUp.scss';

export const SignUp = () => {
  return (
    <div className="page-container sign-up-container">
        <div className="logo-container text-center ">
          <img src={logo} alt="Logo" width="80px" height="58px"/>
        </div>
        <h1 className="heading">Create New Account</h1>
        <div className="input-container text-center">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
        </div>
        <a href="" className="primary-button continue-button">Continue</a>
        <div className="separator"></div>
        <div className="buttons-container">
        <a href="" className="secondary-button">
          <span><img src={google} width={20} height={20} alt="Google"/></span>
          <span>Continue with Google</span>
        </a>
        </div>
    </div>
  )
}
