import React from 'react';
import './PVPEvent.css';

const PVPEvent = () => {
    return (
        <div className="pvp-page-container">
            <div className='fake-nav'></div>            

            <div className="pvp-header"></div>

            <div className="register-team-container">
                <h1>Register your team below</h1>
                <div className="register-team-form">
                    <input type="text" />
                    <input type="text" />
                    <button>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default PVPEvent
