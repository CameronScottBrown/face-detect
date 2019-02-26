import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Particles from "react-particles-js";
import * as serviceWorker from "./serviceWorker";

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <Particles className="particles" params={particlesOptions} />,
  document.getElementById("particles")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
