import React from 'react'

import LoginPageNav from '../LoginPageNav/LoginPageNav'

import Logo from "../../assets/global/lujam-logo-white.svg"
import ChatIcon from "../../assets/login/chat-icon.svg"

import "./Login.scss"

const Login = () => {

    return (
        <section className="login">
            <LoginPageNav />
            <div className="login__page">
                <img src={Logo} alt="lujam logo" className="login__page--logo"/>
                <form action="submit" className="login__page--form">
                    <div className="login__page--form-rectangle"></div>
                    <h3 className="login__page--form-header">Login</h3>
                    <label htmlFor="email" className="login__page--form-label">Email Address</label>
                    <input type="text" id="email" className="login__page--form-input"/>
                    <label htmlFor="email" className="login__page--form-label">Name</label>
                    <input type="password" id="name" className="login__page--form-input"/>
                    <input type="checkbox" id="remember-me" className="login__page--form-checkbox" />
                    <label htmlFor="remember-me" className="checkbox-label">Remember Me</label>
                    <button className="login__page--form-button">Login</button>
                </form>
                <p className="login__page--sign-up">Don't have an account? <a href="#">Sign Up</a></p>
                <a className="login__page--link" href="#">Forgotten Your Password?</a>
            </div>
            <img src={ChatIcon} alt="chat icon" className="login__chat-button" />
        </section>
    )
}

export default Login