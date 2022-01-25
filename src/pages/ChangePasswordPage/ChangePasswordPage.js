import React, { useState } from 'react';
import { changeUserPassword } from '../../actions/auth';
import './ChangePasswordPage.css';

const ChangePasswordPage = () => {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        account: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    })
    const [serverResponse, setServerResponse] = useState({});

    const updateUserData = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const submitdata = async () => {
        setLoading(true);
        if (userData.newPassword !== userData.confirmNewPassword) {
            alert("New password don't match")
        } else {
            const serverRes = await changeUserPassword(userData);
            setServerResponse(serverRes);
            
            if (serverRes.status === 'success') {
                setUserData({
                    account: '',
                    currentPassword: '',
                    newPassword: '',
                    confirmNewPassword: ''
                })
            }
        }
        setLoading(false);
    }

    return (
        <div className="c-p-container">
            <div className="controls-container">
                <table>
                    <tbody>
                        <tr>
                            <td><span className="label-input">Account:</span></td>
                            <td><input type="text" name="account" value={userData.account} onChange={updateUserData} /></td>
                        </tr>
                        <tr>
                            <td><span className="label-input">Current password:</span></td>
                            <td><input type="text" name="currentPassword" value={userData.currentPassword} onChange={updateUserData} /></td>
                        </tr>
                        <tr>
                            <td><span className="label-input">New password:</span></td>
                            <td><input type="text" name="newPassword" value={userData.newPassword} onChange={updateUserData} /></td>
                        </tr>
                        <tr>
                            <td><span className="label-input">Confirm new password:</span></td>
                            <td><input type="text" name="confirmNewPassword" value={userData.confirmNewPassword} onChange={updateUserData} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ textAlign: 'center'}}>
                                <button onClick={submitdata}>
                                    {
                                        loading 
                                            ? <div className="loading-spinner"></div>
                                            : 'Submit'
                                    }
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ textAlign: 'center'}}>
                                <p style={{ color: serverResponse.status === 'success' ? '#00f541' : '#ff0000'}}>{serverResponse.message}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ChangePasswordPage;
