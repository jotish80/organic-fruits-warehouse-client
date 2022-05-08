import React from 'react';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    }
    if (user) {
        console.log(('user', user));
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Profile Updated');
        navigate('/');
    }
    return (
        <div className='register-div'>
            <form onSubmit={handleRegister} className='content-div'>
                <h2 className='text-center mb-3'>Register</h2>
                <input className='input-area' type="name" name="name" placeholder='Your Name' required /> <br />
                <input className='input-area' type="email" name="email" placeholder='Your Email' required /> <br />
                <input className='input-area' type="password" name="password" placeholder='Password' required /><br />
                <input className='input-area' type="password" name="confirmPassword" placeholder='Confirm Password' required /><br />
                <button className='register-button' type='submit'>Register</button>
                <p>Already have an account? <Link to='/login' onClick={navigateToLogin}>Please Login</Link></p>
            </form>

        </div>
    );
};

export default Register;