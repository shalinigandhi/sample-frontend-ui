import React from 'react';
import brand from '../../assets/brand.svg'; 
import editor from '../../assets/editor.svg'; 
import './accountType.scss';

export const AccountType = () => {
  return (
    <div className="page-container account-type-container">
        <h1 className='heading'>Account Type</h1>
        <div className="account-type-wrapper">
            <label className="label-wrapper">
                <input type="radio" name="account"/>
                <span className="checkmark"></span>
                <div className="highlight-box"></div>
                <div className="type">
                    <span className="type-img">
                        <img src={ editor } alt="Editor"/>
                    </span>  
                    <span className="type-name">Editor</span>  
                </div>
              </label>
              <label className="label-wrapper">
                <input type="radio" name="account"/>
                <span className="checkmark"></span>
                <div className="highlight-box"></div>
                <div className="type">
                    <span className="type-img">
                        <img src={ brand } alt="Brand"/>
                    </span>  
                    <span className="type-name">Brand</span>  
                </div>
            </label>
        </div>
        <a className='primary-button'>Continue</a>
    </div>
  )
}
