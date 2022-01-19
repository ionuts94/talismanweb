import React from 'react';
import FormInput from '../../components/FormInput/FormInput';
import './PVPEvent.css';

const PVPEvent = () => {
    return (
        <div className="pvp-page-container">
            <div className='fake-nav'></div>            

            <div className="pvp-header"></div>

            <div className="register-team-container">
                <h1>Register your team below</h1>
                <div className="register-team-form">
                    <FormInput 
                        type="text"
                        id="p-one-label"
                        lable="PLAYER ONE"
                    />
                    <FormInput 
                        type="text"
                        id="p-two-label"
                        lable="PLAYER TWO"
                    />
                    <button>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default PVPEvent
