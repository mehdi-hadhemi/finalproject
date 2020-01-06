import React, { Component } from "react";


class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {

      signIn: {
        email: '',
        password: ''
      },
      signUp: {
        name: '',
        email: '',
        password: ''
      }

    };
  }
  handleChangeLoginIn = e => {
    this.setState({ ...this.state, signIn: { ...this.state.signIn, [e.target.name]: e.target.value } });
  };
  handleChangeSignUp = e => {
    this.setState({ ...this.state, signUp: { ...this.state.signUp, [e.target.name]: e.target.value } });
  };
  render() {


    return (
      <div className="App">
        <div>

          <div className="container" id="container">
            <div className="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                <div className="social-container">

                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" name='name' onChange={this.handleChangeSignUp} />
                <input type="email" placeholder="Email" name='email' onChange={this.handleChangeSignUp} />
                <input type="password" placeholder="Password" name='password' onChange={this.handleChangeSignUp} />
                <button>Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <div className="social-container">

                </div>
                {/* <span>or use your account</span> */}
                <input type="email" placeholder="Email" name='email' onChange={this.handleChangeLoginIn} />
                <input type="password" placeholder="Password" name='password' onChange={this.handleChangeLoginIn} />
                {/* <a href="#">Forgot your password?</a> */}
                <button>Sign In</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>To stay connected with us please login with your personal info</p>
                  <button className="ghost" id="signIn" onClick={() => { document.getElementById('container').classList.remove("right-panel-active") }}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start a journey with us</p>
                  <button className="ghost" id="signUp" onClick={() => {
                    document.getElementById('container').classList.add("right-panel-active")
                  }}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Sign;
