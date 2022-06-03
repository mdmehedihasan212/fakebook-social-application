import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginRight">
                    <h4 className="loginLogo">Fakebook</h4>
                    <span className="loginDesc">Continue with login for connect friends</span>
                </div>
                <div className="loginLeft">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="forgetPassword">Forget Password?</span>
                        <Link to={'/register'} className="newRegisterButton">Create a New Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;