import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../../firebase/firebase.init';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = event => {
        event.preventDefault();
        const user = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            confirmPassword: event.target.confirmPassword.value
        }
        createUserWithEmailAndPassword(user.email, user.password)
        navigate('/');
    }

    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerRight">
                    <h4 className="registerLogo">Fakebook</h4>
                    <span className="registerDesc">Connect with friends and family</span>
                </div>
                <div className="registerLeft">
                    <form onSubmit={handleRegister} className="registerBox">
                        <input type='text' name='name' placeholder="Name" className="registerInput" />
                        <input type='email' name='email' placeholder="Email" className="registerInput" />
                        <input type='password' name='password' placeholder="Password" className="registerInput" />
                        <input type='password' name='confirmPassword' placeholder="Confirm Password" className="registerInput" />
                        <button className="signUpButton">Sign Up</button>
                        <Link className="userLoginButton" to={'/login'}>Login an account</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;