import React from 'react'
import logo from '../../assets/logo.svg';

export const Editor = () => {
  return (
    <div className="editor-container">
      <div className="logo-container text-center ">
        <img src={logo} alt="Logo" width="80px" height="58px"/>
      </div>
      <h1 className="heading">Create New Editor Account</h1>
      <div className="input-container text-center">
        <input type="text" placeholder="Username" />
        <input type="date" placeholder="Birthday" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
      </div>
      <footer className='account-footer'>
        <label className="terms-checkbox">
          <input type="checkbox" /> 
          I’ve read and accept app Terms and Conditions
        </label>
        <button className='primary-button'>Create Account</button>
      </footer>
    </div>
  )
}
