import React from "react";
import "./SignIn.css";

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    });

    
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="login">
        <h3>Login</h3>
        <form>
          <ul className="flex-outer">
            <li>
              <label htmlFor="email">Email</label>
              <input 
                onChange = { this.onEmailChange }
                type="email" 
                id="login-email" />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input 
                onChange = { this.onPasswordChange } 
                type="password" 
                id="login-password" />
            </li>
            <li className="login--buttons">
              <p
                className="login--submit btn"
                onClick={ this.onSubmitSignIn }
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
  }
  
};

export default SignIn;
