import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBInput, MDBIcon } from "mdbreact";
// import {connect} from 'react-redux'
// import{setAlert,removeAlert} from '../../actions/AlertAction'
// import {getProfil,editProfil }from '../../actions/ProfilAction'
import "./profile.css";
// import uuid from'uuid'

class UsersProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Image: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Address: "",
      Age: "",
      PhoneNumber: "",
      tags: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getInterest = e => {
    this.setState({ tags: this.state.tags.concat(e.target.value) });
  };
  //     registerNow=()=>{
  //          if (this.state.profil.FirstName===''|| this.state.profil.LastName===''|| this.state.profil.Email===''|| this.state.profil.Password===''|| this.state.profil.Address==='')
  //     { let id=uuid()
  //     this.props.setAlert('all feilds are required','danger',id)
  //     setTimeout(()=> { this.props.removeAlert(id)
  //          },5000);
  //    }else{ this.props.register(
  //     {   FirstName: this.state.FirstName,
  //         LastName: this.state.LastName,
  //         Email:this.state.Email,Password:this.state.Password,
  //         Address:this.state.Address}
  // )

  //    }

  // }
  // componentWillReceiveProps(nextProps){
  //     if(nextProps.auth.isAuthenticated){
  //         this.props.history.push('/')
  //     }
  //     if(nextProps.auth.error=== 'User already exists')
  //  {   let id=uuid()
  // this.props.setAlert(nextProps.auth.error,"danger",id)
  // setTimeout(()=> { this.props.removeAlert(id)
  //     this.props.clearError()
  // },5000);
  // }
  // }
  render() {
    const tags = [
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
                label="Password"
                value={this.state.Password}
                onChange={this.handleChange}
                name="Password"
                icon="key"
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
                name="Address"
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
                <label for="pet-select">Choose an interest:</label><br/>

                <select name="pets" id="pet-select" onChange={this.getInterest}>
                  <option value="">--Please choose an option--</option>
                  {tags.map(el => (
                    <option value={el}>{el}</option>
                  ))}
                </select>
                <div>
                  {this.state.tags.map(el => (
                    <button className="buttonTags">{el}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="twpbutton">
          <button className="reset" onClick={this.registerNow}>
            Reset
          </button>
          <button className="update" onClick={this.registerNow}>
            Upadate
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profil: state.profil
});

export default connect(mapStateToProps)(UsersProfile);
// {getProfil,editProfil}
