import React, { Component } from "react";
import "./SignUp.css";
import uuid from "uuid";
import { connect } from "react-redux";
import { login, register , clearError} from "../../actions/AuthActions";
import { setAlert, removeAlert } from "../../actions/AlertAction";
class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: {
        email: "",
        password: ""
      },
      signUp: {
        FirstName: "",
        Email: "",
        Password: ""
      }
    };
  }
  handleChangeLoginIn = e => {
    this.setState({
      ...this.state,
      signIn: { ...this.state.signIn, [e.target.name]: e.target.value }
    });
  };
  handleChangeSignUp = e => {
    this.setState({
      ...this.state,
      signUp: { ...this.state.signUp, [e.target.name]: e.target.value }
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (
      nextProps.auth.error === "User already exists" ||
      nextProps.auth.error === "please register before!" ||
      nextProps.auth.error === "wrong password"
    ) {
      let id = uuid();
      this.props.setAlert(nextProps.auth.error, "danger", id);
      setTimeout(() => {
        this.props.removeAlert(id);
        this.props.clearError();
      }, 5000);
    }
  }
  // componentWillReceiveProps(nextProps){
  //   if(nextProps.auth.isAuthenticated){
  //       this.props.history.push('/')
  //   }
  //   if(nextProps.auth.error=== 'User already exists')
  // {   let id=uuid()
  // this.props.setAlert(nextProps.auth.error,"danger",id)
  // setTimeout(()=> { this.props.removeAlert(id)
  //   this.props.clearError()
  // },5000);
  // }

  loginNow = () => {
    if (this.state.email === "" || this.state.password === "") {
      let id = uuid();
      this.props.setAlert("please register beforer", "danger", id);
      setTimeout(() => {
        this.props.removeAlert(id);
      }, 5000);
    } else {
      this.props.login({
        Email: this.state.signIn.Email,
        Password: this.state.signIn.Password
      });
    }
  };

  registerNow = (e) => {
    if (
      this.state.signUp.FirstName === "" ||
      this.state.signUp.Email === "" ||
      this.state.signUp.Password === ""
    ) {
      e.preventDefault()  

      let id = uuid();
      this.props.setAlert("all feilds are required", "danger", id);
      setTimeout(() => {
        this.props.removeAlert(id);
      }, 5000);
    } else {
      e.preventDefault()  
      this.props.register({
        FirstName: this.state.signUp.FirstName,
        Email: this.state.signUp.Email,
        Password: this.state.signUp.Password
      });
    }
  };

  render() {
    return (
      <div className="SignUp">
        <div>
          <div className="container-SignUp" id="container-SignUp">
            <div className="form-container-SignUp sign-up-container-SignUp">
              <form className="form-SignUp" action="#">
                <h1 className="h1-SignUp">Create Account</h1>
                <div className="social-container"></div>
                <span className="span-SignUp">
                  or use your email for registration
                </span>
                <input
                  value={this.state.signUp.FirstName}
                  className="input-SignUp"
                  type="text"
                  placeholder="FirstName"
                  name="FirstName"
                  onChange={this.handleChangeSignUp}
                />
                <input
                  value={this.state.signUp.Email}
                  className="input-SignUp"
                  type="Email"
                  placeholder="Email"
                  name="Email"
                  onChange={this.handleChangeSignUp}
                />
                <input
                  value={this.state.signUp.Password}
                  className="input-SignUp"
                  type="Password"
                  placeholder="Password"
                  name="Password"
                  onChange={this.handleChangeSignUp}
                />
                <button onClick={this.registerNow} className="button-SignUp">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="form-container-SignUp sign-in-container-SignUp">
              <form className="form-SignUp" action="#">
                <h1 className="h1-SignUp">Sign in</h1>
                <div className="social-container-SignUp"></div>
                {/* <span>or use your account</span> */}
                <input
                  value={this.state.signUp.Email}
                  className="input-SignUp"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChangeLoginIn}
                />
                <input
                  value={this.state.signUp.Password}
                  className="input-SignUp"
                  type="Password"
                  placeholder="Password"
                  name="Password"
                  onChange={this.handleChangeLoginIn}
                />
                {/* <a href="#">Forgot your password?</a> */}
                <button className="button-SignUp" >Sign In</button>
              </form>
            </div>
            <div className="overlay-container-SignUp">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="h1-SignUp">Welcome Back!</h1>
                  <p className="p-SignUp">
                    To stay connected with us please login with your personal
                    info
                  </p>
                  <button
                    className="ghost button-SignUp"
                    id="signIn"
                    onClick={() => {
                      document
                        .getElementById("container-SignUp")
                        .classList.remove("right-panel-active");
                    }}
                  >
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="h1-SignUp">Hello, Friend!</h1>
                  <p className="p-SignUp">
                    Enter your personal details and start a journey with us
                  </p>
                  <button
                    className="ghost button-SignUp"
                    id="signUp"
                    onClick={() => {
                        document
                          .getElementById("container-SignUp")
                          .classList.add("right-panel-active");
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps, {
  clearError,
  login,
  setAlert,
  removeAlert,
  register
})(Sign);
