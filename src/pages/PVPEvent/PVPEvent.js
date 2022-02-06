import React, { useEffect, useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { insertTeam, getRegisteredTeams } from '../../actions/pvp';
import './PVPEvent.css';
import BraketTeam from '../../components/BraketTeam/BraketTeam';

const PVPEvent = () => {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [insertStatus, setInsertStatus] = useState({});
    const [registeredTeams, setRegisteredTeams] = useState();
    const [rerender, setRerender] = useState(false);
    const [loading, setLoading] = useState(false);

    const submit = async () => {
        setLoading(true);
        if (!playerOne || !playerTwo) {
            alert('Please fill in all fields');
        } else {
            const response = await insertTeam(playerOne, playerTwo);
            setInsertStatus(response);
            setRerender(rerender => !rerender);
            setPlayerOne('');
            setPlayerTwo('');
            setLoading(false);
        }
    }

    useEffect(() => {
        getRegisteredTeams().then(res => setRegisteredTeams(res.data))
    }, [rerender])

    return (
        <div className="pvp-page-container">
            <div className='fake-nav'></div>            

            <div className="pvp-header"></div>

            <div className="info-container">
                <h1 className="winners-announcement">Last winners: <span>PrettyArrowS</span> & <span>Heal</span></h1>
                <h1 style={{margin: "0.5rem 0"}}>Next event: Sunday 30 January 2022 at 20:00</h1>
                <h1>How it works:</h1>
                <ul>
                    <li>admin will teleport both teams in junior pk arena</li>
                    <li>players will then start seeking for the oponents</li>
                    <li>there is going to be just one round so you better play it well</li>
                </ul>
                <h1>Rules</h1>
                <ul>
                    <li>you can use every buff you can get</li>
                    <li>you can use every item you can get</li>
                    <li>you are not allowed to use pet bug</li>
                </ul>
            </div>

            <div className="register-team-container">
                <h1>Register your team below</h1>
                <div className="register-team-form">
                    <FormInput 
                        type="text"
                        id="p-one-label"
                        lable="PLAYER ONE"
                        updateParent={setPlayerOne}
                        value={playerOne}
                    />
                    <FormInput 
                        type="text"
                        id="p-two-label"
                        lable="PLAYER TWO"
                        updateParent={setPlayerTwo}
                        value={playerTwo}
                    />
                    <button 
                        className="pvp-submit-btn"
                        onClick={submit}
                    >
                        {
                            loading 
                                ? <div className="loading-spinner"></div>
                                : 'Submit'
                        }
                    </button>
                </div>
                <span style={{color: insertStatus?.color}}>{insertStatus?.text}</span>
            </div>

            <div className="registered-teams-container">
                <h1>Registered teams</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>Player one</th>
                            <th>Player two</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !registeredTeams?.length > 0
                                ? <tr><td colSpan="3">None</td></tr>
                                : registeredTeams.map((team, index) => (
                                    <tr key={index+team.playerOne}>
                                        <td>{index + 1}</td>
                                        <td>{team.playerOne}</td>
                                        <td>{team.playerTwo}</td>
                                    </tr>
                                ))
                        }
                    </tbody>

                </table>
            </div>

            <div className="brakets-container">
                <h1>Rounds</h1>
                <h2>To be generated Sunday 30 January 2022 at 19:00 ...</h2>
                <div className='brakets-table'>
                </div>
            </div>
        

        </div>
    )
}

export default PVPEvent
