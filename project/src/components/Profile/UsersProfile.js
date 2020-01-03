import React, { Component } from 'react'
import { MDBInput,MDBIcon } from "mdbreact";
import './profile.css'


 class UsersProfile extends Component {
     constructor(props) {
    super(props);
    this.state = {
        Name:"",
        Lastname:"",
        Email:'',
        Password:'',
        Address:"",
       
       

     
    }};

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className='card'>
           
    <MDBInput label="Name" value={this.state.Name} icon="user" onChange={this.handleChange} name="Name"/>
    <MDBInput label="lastname" value={this.state.Lastname}   onChange={this.handleChange} name="LastName" icon="user" />
    <MDBInput label="Email address"value={this.state.Email}  onChange={this.handleChange} name="Email" icon="envelope" />
    <MDBInput label="password"value={this.state.Password} onChange={this.handleChange}name="Password" icon="key"  />
    <MDBInput label="address" value={this.state.Address} onChange={this.handleChange} name="Address"icon="home"  />
            </div>


        )
    }
}
export default UsersProfile
