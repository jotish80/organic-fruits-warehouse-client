import React, { useRef } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../Firebase/firebase.init';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
import axios from 'axios';


toast.configure();
const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    

    let errorMassage;
    if (error) {
        errorMassage = <div><p className='text-danger'>{error && "Email or Password is not correct"}</p></div>
    }

    const emailRef = useRef('');
    const passRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
        navigate('/')
        // const {data} = await axios.post('https://sheltered-fortress-61368.herokuapp.com/login', {email});
        // console.log(data);

    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
     

    const resetPassword = async () => {

        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Just Sent', {position: toast.POSITION.TOP_CENTER});
        }
        else {
            toast('Enter Your Email Properly',{position: toast.POSITION.TOP_CENTER})
        }
    }

    const location = useLocation();
    const from = location.state?.from?.pathname ||'/';

    if(user){
        navigate(from, { replace: true });
    }

    const navigate = useNavigate();
    const navigateToRegister = (e) => {
        navigate('/register');
    }

    const provider = new GoogleAuthProvider();
    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                navigate(from, {replace: true});
            })
            .catch((error => {
                console.log(error);
            }))
    }

    return (
        <div className='register-div'>
            <ToastContainer />
            <form onSubmit={handleSubmit} className='content-div'>
                <h2 className='text-center mb-3'>Login</h2>

                <input className='input-area' type="email" name="email" ref={emailRef} placeholder='Your Email' /> <br />
                <input className='input-area' type="password" name="password" ref={passRef} placeholder='Password' /><br />
                <button type='submit' className='login-button'>Login</button>
                {errorMassage}
                <div className='border-div'>
                    <div className='border-separation'></div>
                    <p className='middle-paragraph'>OR</p>
                    <div className='border-separation'></div>
                </div>
                <div>
                    <button onClick={handleSignInWithGoogle} className='register-button'><FcGoogle className="me-2 mb-1" /> Google Login</button>
                    <p>New User? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateToRegister}>Please Register</Link> </p>
                    <p>Forget Password? <button onClick={resetPassword} className='btn btn-link text-primary'>Reset Password </button></p>
                </div>
            </form>

        </div>
    );
};

export default Login;