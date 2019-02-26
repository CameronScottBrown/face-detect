import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="nav">
      <p className="nav__text" onClick={() => onRouteChange('signin')}>Sign Out</p>
    </nav>
  );
};

export default Navigation;
