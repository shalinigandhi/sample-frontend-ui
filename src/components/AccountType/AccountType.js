import React, {useState} from 'react';
import { AccountSelection } from './AccountSelection';
import { Editor } from './Editor';
import { Brand } from './Brand';
import './accountType.scss';

export const AccountType = () => {
    const [accountType, setAccountType] = useState('Editor');
    const [selectedAccountType, setSelectedAccountType] = useState('');

    const onChangeAccountType = (event, type) => {
        if (event.target.checked) {
            setAccountType(type);
        }
    }

    const onContinue = (type) => {
        setSelectedAccountType(type);
    }
    return (
        <div className={"page-container " + (!selectedAccountType && 'account-type-container')}>
            {!selectedAccountType && <AccountSelection
                accountType={accountType}
                onChangeAccountType={onChangeAccountType}
                onContinue={onContinue}
            />}
            {selectedAccountType === "Editor" && <Editor />}
            {selectedAccountType==="Brand" && <Brand/>}
        </div>
    )
}
