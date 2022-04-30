import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='register-div'>
            <div className='content-div'>
            <h2 className='text-center mb-3'>Register</h2>
             
            <input   className='input-area' type="name" name="name" placeholder='Your Name' required /> <br />
            <input   className='input-area' type="email" name="email" placeholder='Your Email'required  /> <br />
            <input   className='input-area' type="password" name="password"placeholder='Your Password' required  /><br />
            <input   className='input-area' type="password" name="password"placeholder='Confirm Password' required  /><br />
            <button  className='register-button'>Register</button>
            </div>
        </div>
    );
};

export default Register;