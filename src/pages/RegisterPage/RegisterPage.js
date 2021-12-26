import React from 'react';
import NavMenu from '../../components/NavMenu/NavMenu';
import './RegisterPage.css';

const RegisterPage = () => {
    return (
        <div className='register-page-container'>
            <div className='fake-nav'></div>
            <div className='register-form-container'>
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
                <input type='password' placeholder='Confirm Password' />
                <h1>SUBMIT</h1>
            </div>
        </div>
    )
}

export default RegisterPage
