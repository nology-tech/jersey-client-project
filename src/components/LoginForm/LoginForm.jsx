import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import "./LoginForm.scss";

const LoginForm = () => {
  let history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
      .then(() => {
        history.push("/security");
      })
      .catch(() => {
        alert("You have entered an invalid username or password");
      });
    history.push("/security");
  };

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const userInput = event.target.value;
    const userInputName = event.target.name;
    const userInputsObj = { ...userDetails, [userInputName]: userInput };
    setUserDetails(userInputsObj);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <form action="submit" className="login-form" onSubmit={handleLogin}>
        <div className="login-form__rectangle"></div>
        <h3 className="login-form__header">Login</h3>
        <label htmlFor="email" className="login-form__label">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={userDetails.email}
          className="login-form__input"
          onChange={handleInput}
          required
        />
        <label htmlFor="password" className="login-form__label">
          Password
        </label>
        <div className="login-form__password-container">
          <input
            type={!showPassword ? "password" : "text"}
            id="password"
            name="password"
            value={userDetails.password}
            className="login-form__input"
            onChange={handleInput}
            required
          />
          {!showPassword && (
            <img
              src={HidePassword}
              className="hidepassword"
              alt="Hide password icon"
              onClick={handleShowPassword}
            />
          )}
          {showPassword && (
            <img
              src={ShowPassword}
              className="showpassword"
              alt="Show password icon"
              onClick={handleShowPassword}
            />
          )}
        </div>
        <div className="login-form__checkbox-container">
          <input
            type="checkbox"
            id="remember-me"
            className="login-form__checkbox"
          />
          <label htmlFor="remember-me" className="checkbox-label">
            Remember Me
          </label>
        </div>

        <button className="login-form__button">Login</button>
      </form>

      <p className="login-signup">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <p className="login-link">
        <Link to="/forgotten-password"> Forgotten Your Password? </Link>
      </p>
    </div>
  );
};

export default LoginForm;
