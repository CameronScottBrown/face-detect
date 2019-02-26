import React from "react";
import './Register.css';

const Register = ({ onRouteChange }) => {
  return (
    <div className="register">
      <form>
        <ul className="flex-outer">
          <li>
            <label htmlFor="name">Name</label>
            <input type="text" id="register-email"/>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" id="register-email"/>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" id="register-password" />
          </li>
          <li className="register--buttons">
            <button 
              className="register--submit" 
              onClick={() => onRouteChange('home')}>Sign In</button>
          </li>
        </ul>
      </form>
      </div>
  );
};

export default Register;
