import React, { useState } from 'react';
import { changeUserPassword } from '../../actions/auth';
import './ChangePasswordPage.css';

const ChangePasswordPage = () => {
    const [userData, setUserData] = useState({
        account: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    })

    const updateUserData = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const submitdata = () => {
        changeUserPassword(userData);
    }

    return (
        <div className="c-p-container">
            <div className="controls-container">
                <table>
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
                        <td colSpan="2" style={{ textAlign: 'center'}}><button onClick={submitdata}>Submit</button></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default ChangePasswordPage;
