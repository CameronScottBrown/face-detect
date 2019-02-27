import React from "react";
import "./SignIn.css";

const SignIn = ({ onRouteChange }) => {
  return (
    <div className="login">
      <h3>Login</h3>
      <form>
        <ul className="flex-outer">
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" id="login-email" />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" id="login-password" />
          </li>
          <li className="login--buttons">
            <p
              className="login--submit btn"
              onClick={() => onRouteChange("home")}
            >
              Sign In
            </p>
            <p
              className="login--signup btn"
              onClick={() => onRouteChange("register")}
            >
              Register
            </p>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SignIn;
