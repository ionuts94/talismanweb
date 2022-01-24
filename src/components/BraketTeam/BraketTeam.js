import React from 'react';
import './BraketTeam.css';

const BraketTeam = ({t1OneName, t1TwoName, t2OneName, t2TwoName}) => {
    return (
        <div className="braket-team-container">
            <h1>{t1OneName} & {t1TwoName}</h1>
            <h2>vs</h2>
            <h1>{t2OneName} & {t2TwoName}</h1>
        </div>
    );
};

export default BraketTeam;
