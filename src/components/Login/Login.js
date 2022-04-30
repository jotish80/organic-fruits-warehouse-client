import React from 'react';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../Firebase/firebase.init';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
 

const Login = () => {

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
             
            <input   className='input-area' type="email" name="email" id="" /> <br />
            <input   className='input-area' type="password" name="password" id="" /><br />
            <button onClick={handleSignInWithGoogle} className='register-button'><FcGoogle className="me-2 mb-1"/> Google Login</button>
            </div>
        </div>
    );
};

export default Login;