import React from 'react';
import "./Login.css"
import { Link } from "react-router-dom";
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = e => {
        e.preventDefault()
    }

    const register = e=>{
        e.preventDefault()
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
                        onChange={e => setEmail(e.target.value)} />
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