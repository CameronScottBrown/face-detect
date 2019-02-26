import React from "react";
import './SignIn.css';

const SignIn = ({ onRouteChange }) => {
  return (
    <div className="login">
      <form>
        <ul className="flex-outer">
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" id="login-email"/>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" id="login-password" />
          </li>
          <li className="login--buttons">
            <button 
              className="login--submit" 
              onClick={() => onRouteChange('home')}>Sign In</button>
            <button className="login--signup" >Register</button>
          </li>
        </ul>
      </form>
      </div>
  );
};

export default SignIn;
