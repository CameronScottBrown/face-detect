import React from "react";
import "./Register.css";

const Register = ({ onRouteChange }) => {
  return (
    <div className="register">
      <h3>Register</h3>
      <form>
        <ul className="flex-outer">
          <li>
            <label htmlFor="name">Name</label>
            <input type="text" id="register-name" />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" id="register-email" />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" id="register-password" />
          </li>
          <li className="register--buttons">
            <p
              className="register--submit btn"
              onClick={() => onRouteChange("home")}
            >
              Sign Up
            </p>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Register;
