import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
 import { toast, ToastContainer } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";

import { auth } from '../firebase.init';
import './Login.css'

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    
    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value}) 
            setErrors({...errors, email: ""})      
        } else {
            setErrors({...errors, email: "Invalid email"})
            setUserInfo({...userInfo, email: ""})
        }

        

        // setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value});
            setErrors({...errors, password: ""});
        } else {
            setErrors({...errors, password: "Minimum 6 characters!"});
            setUserInfo({...userInfo, password: ""})
        }
        
    }

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(userInfo)

        signInWithEmail(userInfo.email, userInfo.password);
        
    }

       const navigate = useNavigate();
       const location = useLocation();
       const from = location.state?.from?.pathname || "/";

       useEffect(() => {
           if (user) {
               navigate(from);
           }
       }, [user]);

    useEffect(() => {
        const error = hookError || googleError;
        if(error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid email");
                    break;
                
                case "auth/invalid-password":
                    toast("Wrong password")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError, googleError])

    return (
        <div className="login-signup-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Your Email" onChange={handleEmailChange} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <input type="password" placeholder="password" onChange={handlePasswordChange} />
                {errors?.password && <p className="error-message">{errors.password}</p> }
                <button>Login</button>
                <ToastContainer />

                <p>Don't have an account? <Link to="/signup">Sign up</Link> </p>
            </form>

            <button onClick={() => signInWithGoogle()}>Google</button>
        </div>
    );
};

export default Login;