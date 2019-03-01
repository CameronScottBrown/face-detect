import React from "react";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerName: '',
      registerEmail: '',
      registerPassword: ''
    }
  }

  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  }

  onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  }

  onSubmitRegistration = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.registerName,
        email: this.state.registerEmail,
        password: this.state.registerPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user) {
        this.props.loadUser(user);
        this.props.onRouteChange("home");
      }
    });
  }


  render() {
    return (
      <div className="register">
        <h3>Register</h3>
        <form>
          <ul className="flex-outer">
            <li>
              <label htmlFor="name">Name</label>
              <input 
                onChange={ this.onNameChange }
                type="text" 
                id="register-name" />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input 
                onChange={ this.onEmailChange }
                type="email" 
                id="register-email" />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input 
                onChange={ this.onPasswordChange }
                type="password" 
                id="register-password" />
            </li>
            <li className="register--buttons">
              <p
                className="register--submit btn"
                onClick={this.onSubmitRegistration}
              >
                Sign Up
              </p>
            </li>
          </ul>
        </form>
      </div>
    );
  }

  
};

export default Register;
