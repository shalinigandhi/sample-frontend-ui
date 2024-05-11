import React from 'react'
import brand from '../../assets/brand.svg'; 
import editor from '../../assets/editor.svg'; 

export const AccountSelection = ({accountType, onChangeAccountType, onContinue}) => {
  return (
    <div className="account-selection-container">
        <h1 className='heading'>Account Type</h1>
        <div className="account-type-wrapper">
            <label className={"label-wrapper " + (accountType==='Editor' && 'label-checked')}>
                <input
                    type="radio"
                    name="account"
                    checked={accountType === 'Editor'}
                    onChange={(event) => onChangeAccountType(event, 'Editor')}
                />
                <span className="checkmark"></span>
                <div className="type">
                    <span className="type-img">
                        <img src={ editor } alt="Editor"/>
                    </span>  
                    <span className="type-name">Editor</span>  
                </div>
            </label>
            <label className={"label-wrapper " + (accountType==='Brand' && 'label-checked')}>
                <input
                    type="radio"
                    name="account"
                    checked={accountType === 'Brand'}
                    onChange={(event) => onChangeAccountType(event, 'Brand')}
                />
                <span className="checkmark"></span>
                <div className="type">
                    <span className="type-img">
                        <img src={ brand } alt="Brand"/>
                    </span>  
                    <span className="type-name">Brand</span>  
                </div>
            </label>
        </div>
        <button
            className='primary-button'
            onClick={() => onContinue(accountType)}
        >
            Continue
        </button>
    </div>
  )
}
