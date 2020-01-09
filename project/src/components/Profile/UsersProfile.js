import React, { Component } from 'react'
import { MDBInput,MDBIcon } from "mdbreact";
import {connect} from 'react-redux'
import{setAlert,removeAlert} from '../../actions/AlertAction'
import {register,clearError }from '../../actions/AuthActions'
import './profile.css'
import uuid from'uuid'



 class UsersProfile extends Component {
     constructor(props) {
    super(props);
    this.state = {
        FirstName:"",
        LastName:"",
        Email:'',
        Password:'',
        Address:"",
       
        

     
    }};

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    registerNow=()=>{ 
         if (this.state.FirstName===''|| this.state.LastName===''|| this.state.Email===''|| this.state.Password===''|| this.state.Address==='')
    { let id=uuid()
    this.props.setAlert('all feilds are required','danger',id)
    setTimeout(()=> { this.props.removeAlert(id)
         },5000);
   }else{ this.props.register(
    {   FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email:this.state.Email,Password:this.state.Password,
        Address:this.state.Address}
)  
    
   }


}
componentWillReceiveProps(nextProps){ 
    if(nextProps.auth.isAuthenticated){
        this.props.history.push('/')
    }
    if(nextProps.auth.error=== 'User already exists')
 {   let id=uuid()
this.props.setAlert(nextProps.auth.error,"danger",id)
setTimeout(()=> { this.props.removeAlert(id)
    this.props.clearError()
},5000);
}

}
    render() {
        return (
            <div className='card'>
           
    <MDBInput label="FirstName" value={this.state.FirstName} icon="user" onChange={this.handleChange} name="FirstName"/>
    <MDBInput label="LastName" value={this.state.LastName}   onChange={this.handleChange} name="LastName" icon="user" />
    <MDBInput label="Email address"value={this.state.Email}  onChange={this.handleChange} name="Email" icon="envelope" />
    <MDBInput label="Password"value={this.state.Password} onChange={this.handleChange}name="Password" icon="key"  />
    <MDBInput label="address" value={this.state.Address} onChange={this.handleChange} name="Address"icon="home"  />
    <button onClick={this.registerNow}>register</button>
            </div>


        )
    }
  }
  const mapStateToProps=state=>{
      return{
auth:state.auth  

      }
  }

export default connect(mapStateToProps,{setAlert,removeAlert,register,clearError})(UsersProfile)
