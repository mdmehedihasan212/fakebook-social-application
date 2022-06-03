import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase/firebase.init';
import './Login.css';

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleRegister = event => {
        event.preventDefault();
        const user = {
            email: event.target.email.value,
            password: event.target.password.value,
        }
        signInWithEmailAndPassword(user.email, user.password)
        alert('user login done')
        navigate('/')
    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginRight">
                    <h4 className="loginLogo">Fakebook</h4>
                    <span className="loginDesc">Continue with login for connect friends</span>
                </div>
                <div className="loginLeft">
                    <form onSubmit={handleRegister} className="loginBox">
                        <input type='email' name='email' placeholder="Email" className="loginInput" />
                        <input type='email' name='password' placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="forgetPassword">Forget Password?</span>
                        <Link to={'/register'} className="newRegisterButton">Create a New Register</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;