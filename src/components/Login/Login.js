import React from 'react';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../Firebase/firebase.init';
 

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
        <div className='container w-25 mx-auto shadow-lg p-3 mb-5 bg-body rounded rounded-3'>
            <h2 className='text-center mb-2'>Login</h2>
            <input style={{borderRadius:'20px'}} className='w-100 mb-3 shadow' type="text" name="name" id="" /><br />
            <input style={{borderRadius:'20px'}} className='w-100 mb-3' type="email" name="email" id="" /> <br />
            <input style={{borderRadius:'20px'}} className='w-100 mb-3' type="password" name="password" id="" /><br />
            <button style={{width: '100%', borderRadius:'20px'}} onClick={handleSignInWithGoogle}ick>Google sign in</button>
        </div>
    );
};

export default Login;