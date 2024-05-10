import React from 'react'
import logo from '../../assets/logo.svg';

export const Home = () => {
  return (
    <div className="no-access-container">
      <div className="logo-container text-center ">
        <img src={logo} alt="Logo" width="132px" height="95px"/>
      </div>
      <div className="buttons-container">
          <a className="button secondary-button" href="/login">Sign In</a>
          <a className="button secondary-button" href="/sign-up">Create Account</a>
          <a className="button secondary-button" href="/">Continue As Guest</a>
      </div>
    </div>
  )
}

