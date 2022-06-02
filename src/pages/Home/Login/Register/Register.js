import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginRight">
                    <h4 className="loginLogo">Fakebook</h4>
                    <span className="loginDesc">Connect with friends and family</span>
                </div>
                <div className="loginLeft">
                    <div className="loginBox">
                        <input placeholder="Name" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Confirm Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Login an account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;