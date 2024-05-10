import React from 'react';
import logo from '../../assets/logo.svg';
import './resetPassword.scss';

export const ResetPassword = () => {
  return (
    <div className="page-container reset-password-container">
        <div className="logo-container text-center ">
          <img src={logo} alt="Logo" width="80px" height="58px"/>
        </div>
        <h1 className="heading">Reset Password</h1>
        <div className="input-container text-center">
            <input type="email" placeholder="Email Address" />
        </div>
        <button className="primary-button">Send Link to Email Address</button>
    </div>
  )
}
