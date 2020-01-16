import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBInput, MDBIcon } from "mdbreact";
import{edit}from "../../actions/ProfilAction"
import{loadUser,editProfil}from "../../actions/AuthActions"
// import {connect} from 'react-redux'
// import{setAlert,removeAlert} from '../../actions/AlertAction'
// import {getProfil,editProfil }from '../../actions/ProfilAction'
import "./profile.css";
// import uuid from'uuid'

class UsersProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      FirstName: "",
      LastName: "",
      Email: "",
      // Password: "",
      Address: "",
      Age: "",
      Tags: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getInterest = e => {
    this.setState({ Tags: this.state.Tags.concat(e.target.value) });
  };
  update= e =>{
    e.preventDefault()  
    this.props.edit({
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Password: this.state.Password,
      Address:this.state.Address,
      Age:this.state.Age,
      Tags:this.state.Tags

  })}
  componentDidMount() {
    this.props.loadUser()
  }
  
  componentWillReceiveProps = (nextProps) => {
    this.setState(nextProps.auth.user)
  }
  
  render() {
    const Tags = [
      "Music",
      "Health",
      "Travel",
      "Community",
      "Charity",
      "Gaming",
      "Auto",
      "Business",
      "Arts",
      "Film & Media",
      "Sports & Fitness",
      "Science & Tech",
      "Fashion",
      "Photography"
    ];
    return (
      <div>
        <div className="profil">
          <div className="who">
            <h2 className="tittle1">Tell us who you are </h2>
            <div id="profilecard" className="card">
              <MDBInput
                className="inputprofile"
                label="FirstName"
                value={this.state.FirstName}
                icon="user"
                onChange={this.handleChange}
                name="FirstName"
              />
              <MDBInput
                className="inputprofile"
                label="LastName"
                value={this.state.LastName}
                onChange={this.handleChange}
                name="LastName"
                icon="user"
              />
              <MDBInput
                className="inputprofile"
                label="Email address"
                value={this.state.Email}
                onChange={this.handleChange}
                name="Email"
                icon="envelope"
              />
              <MDBInput
                className="inputprofile"
                label="Address"
                value={this.state.Address}
                onChange={this.handleChange}
                name="Address"
                icon="home"
              />
              <MDBInput
                className="inputprofile"
                label="Age"
                value={this.state.Age}
                onChange={this.handleChange}
                name="Age"
                icon="heart"
              />
              {/* <MDBInput className='inputprofile' label="PhoneNumber" value={this.state.PhoneNumber} onChange={this.handleChange} name="PhoneNumber"icon="phone"  /> */}
            </div>
          </div>
          <div className="what">
            <h2 className="tittle2">Tell us what you love</h2>
            <div className="onlyel">
              <p className="desc">
                Tap the event tags you would like to see more often than the
                others.
              </p>
              <div className="tags">
                <select name="pets" id="pet-select" onChange={this.getInterest}>
                  <option value="">Choose an interest</option>
                  {Tags.map(el => (
                    <option value={el}>{el}</option>
                  ))}
                </select>
                <div>
                  {this.state.Tags.length > 0 ? this.state.Tags.map(el => (
                    <button className="buttonTags">{el}</button>
                  )) : this.state.Tags.map(el => (
                    <button className="buttonTags">{el}</button>
                  ))}
                </div>
              </div>
            </div>
            <h2 className="tittle2">Followed events</h2>
          </div>
        </div>
        <div className="twpbutton">
          <button className="reset" >
            Reset
          </button>
          <button className="update"onClick={
            () => this.props.editProfil(this.state)
            // this.upadate
            }>
            Upadate
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{edit,loadUser, editProfil})(UsersProfile);
// {getProfil,editProfil}
