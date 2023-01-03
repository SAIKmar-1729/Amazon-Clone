import React from 'react';
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import {auth} from "./firebase"

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            navigate('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e=>{
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                navigate('/')
            }
        })
        .catch(error => alert(error.message))

    }

    return (
        < div className='login' >
            <Link to="/">
                <img className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={SignIn}
                        className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you Agree to the AMAZON FAKE
                    CLONE Conditions of Use & sale.Please See
                    our privacy Notice, our Cookies Notice and
                    our Interest-Based Ads Notice
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>

        </div >
    )
}

export default Login