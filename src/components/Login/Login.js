import React from 'react';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../Firebase/firebase.init';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
 

const Login = () => {

    const navigate = useNavigate();
    const navigateToRegister = (e) => {
        navigate('/register');
    }

    const provider = new GoogleAuthProvider();
    const handleSignInWithGoogle = () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch((error =>{
            console.log(error);
        }))
    }

    return (
        <div className='register-div'>
            <div className='content-div'>
            <h2 className='text-center mb-3'>Login</h2>
             
            <input   className='input-area' type="email" name="email" placeholder='Your Email' /> <br />
            <input   className='input-area' type="password" name="password" placeholder='Your Password' /><br />
            <div className='border-div'>
                <div className='border-separation'></div>
                <p className='middle-paragraph'>OR</p>
                <div className='border-separation'></div>
            </div>
            <button onClick={handleSignInWithGoogle} className='register-button'><FcGoogle className="me-2 mb-1"/> Google Login</button>
             <p>New User? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateToRegister}>Please Register</Link> </p>
            <p>Forget Password?  </p>
            </div>
           
        </div>
    );
};

export default Login;