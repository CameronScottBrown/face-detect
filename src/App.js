import React, { Component } from "react";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from "react-particles-js";


import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: 'f3b743c434ab4e9a86868e5daa1863fb'
})

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", 
      "https://samples.clarifai.com/face-det.jpg"
    )
    .then(
      function(response) {
        // do something with response
        console.log(response);
      },
      function(err) {
        // there was an error
        console.log(err);
      }
    );
    
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
           />
        <FaceRecognition />
        
      </div>
    );
  }
}

export default App;
