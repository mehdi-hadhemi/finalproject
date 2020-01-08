import React, { Component } from "react";
import './SignUp.css'


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
      <div className="SignUp">
        <div>

          <div className="container-SignUp" id="container-SignUp">
            <div className="form-container-SignUp sign-up-container-SignUp">
              <form className='form-SignUp' action="#">
                <h1 className='h1-SignUp'>Create Account</h1>
                <div className="social-container">

                </div>
                <span className='span-SignUp'>or use your email for registration</span>
                <input className='input-SignUp' type="text" placeholder="Name" name='name' onChange={this.handleChangeSignUp} />
                <input className='input-SignUp' type="email" placeholder="Email" name='email' onChange={this.handleChangeSignUp} />
                <input className='input-SignUp' type="password" placeholder="Password" name='password' onChange={this.handleChangeSignUp} />
                <button className='button-SignUp'>Sign Up</button>
              </form>
            </div>
            <div className="form-container-SignUp sign-in-container-SignUp">
              <form className='form-SignUp' action="#">
                <h1 className='h1-SignUp'>Sign in</h1>
                <div className="social-container-SignUp">

                </div>
                {/* <span>or use your account</span> */}
                <input className='input-SignUp' type="email" placeholder="Email" name='email' onChange={this.handleChangeLoginIn} />
                <input className='input-SignUp' type="password" placeholder="Password" name='password' onChange={this.handleChangeLoginIn} />
                {/* <a href="#">Forgot your password?</a> */}
                <button className='button-SignUp'>Sign In</button>
              </form>
            </div>
            <div className="overlay-container-SignUp">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className='h1-SignUp'>Welcome Back!</h1>
                  <p className='p-SignUp'>To stay connected with us please login with your personal info</p>
                  <button className="ghost button-SignUp" id="signIn" onClick={() => { document.getElementById('container-SignUp').classList.remove("right-panel-active") }}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className='h1-SignUp'>Hello, Friend!</h1>
                  <p className='p-SignUp'>Enter your personal details and start a journey with us</p>
                  <button className="ghost button-SignUp" id="signUp" onClick={() => {
                    document.getElementById('container-SignUp').classList.add("right-panel-active")
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
