import React, { useState } from 'react';
import { register, validateData } from '../../actions/auth';
import './RegisterPage.css';

const RegisterPage = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value 
        })
    }
    
    const handleRegister = async () => {
        const validate = validateData(userData);
        if (validate === true) {
           const response = await register(userData);
           console.log(response);
        } else {
            alert(validate);
        }
    }

    return (
        <div className='register-page-container'>
            <div className='fake-nav'></div>
            <div className='register-form-container'>
                <input onChange={handleInputChange} value={userData.username} name='username' type='text' placeholder='Username' />
                <input onChange={handleInputChange} value={userData.password} name='password' type='password' placeholder='Password' />
                <input onChange={handleInputChange} value={userData.confirmPassword} name='confirmPassword' type='password' placeholder='Confirm Password' />
                <h1 onClick={handleRegister}>SUBMIT</h1>
            </div>
        </div>
    )
}

export default RegisterPage
