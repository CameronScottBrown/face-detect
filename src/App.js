import React, { Component } from "react";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";
import SignIn from "./components/SignIn/SignIn";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "f3b743c434ab4e9a86868e5daa1863fb"
});

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    entries: 0,
    joined: ''
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = data => {
    this.setState({ user : {
        id: data.id,
        name: data.name,
        entries: data.entries,
        joined: data.joined
    }})
  }

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("input-image");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = box => {
    this.setState({ box: box });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input }); //set input to image URL

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        if(response){
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count }));
          })
          .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      }
        
      )
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    // set isSignedIn for nav routing
    if (route === "signout") {
      // we are signed out
      this.setState(initialState);
    } else if (route === "home") {
      // if we get sent home, it means we are signed in
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { box, route, imageUrl, isSignedIn } = this.state;
    return (
      <div className="App">
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />

        {route === "home" ? (
          <div>
            <Logo />
            <Rank 
              name={this.state.user.name} 
              entries={this.state.user.entries}/>
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onPictureSubmit={this.onPictureSubmit}
            />
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </div>
        ) : route === "signin" ? (
          <SignIn 
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange} />
        ) : route === "signout" ? (
          <SignIn 
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange} />
        ) : (
          <Register 
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser} />
        )}
      </div>
    );
  }
}

export default App;
