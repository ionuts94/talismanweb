import React, { useState } from 'react';
import { register, validateData } from '../../actions/auth';
import './RegisterPage.css';

const RegisterPage = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [showSpinner, setShowSpinner] = useState(false);
    const [registerStatus, setRegisterStatus] = useState('');

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value 
        })
    }
    
    const handleRegister = async () => {
        setShowSpinner(true);
        const validate = validateData(userData);
        if (validate === true) {
           const response = await register(userData);
           setRegisterStatus(response.message)
           setShowSpinner(false);
        } else {
            setShowSpinner(false);
            alert(validate);
        }
    }
    const handleResetForm = () => {
        setUserData({
            username: '',
            password: '',
            confirmPassword: ''
        });
        setShowSpinner(false);
        setRegisterStatus('');
    }

    return (
        <div className='register-page-container'>
            <div className='fake-nav'></div>

            <div className='register-form-container'>
                {
                    showSpinner 
                       ?<div className="spinner-container">
                            <div className="spinner-div"></div>
                        </div>
                       : !registerStatus 
                            ? <div className="form-items">
                                <input onChange={handleInputChange} value={userData.username} name='username' type='text' placeholder='Username' />
                                <input onChange={handleInputChange} value={userData.password} name='password' type='password' placeholder='Password' />
                                <input onChange={handleInputChange} value={userData.confirmPassword} name='confirmPassword' type='password' placeholder='Confirm Password' />
                                <h1 onClick={handleRegister}>SUBMIT</h1>
                            </div>
                            : <div className="register-status">
                                <div>
                                    <h2 style={{ textAlign: 'center' }}>{registerStatus}</h2>
                                    <h1 style={{ marginTop: '3rem' }} onClick={handleResetForm}>OK</h1>
                                </div>
                            </div>
                }
            </div>
        </div>
    )
}

export default RegisterPage
