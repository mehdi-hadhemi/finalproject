
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,MDBIcon } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {logout} from '../actions/AuthActions'
import "../App.css";
import {connect} from 'react-redux'
class NavbarPage extends Component {
state = { 
  isOpen: false
};
// componentDidMount=()=>{
//   console.log(this.props)
// }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
userconnected=()=>{
  return(
  <MDBNavbarNav right>
  <MDBNavItem active>
   <MDBNavLink  className='navlinks' to="/">Overview</MDBNavLink>
 </MDBNavItem>
 <MDBNavItem>
   <MDBNavLink   className='navlinks'to="/browse-event">Browse Event</MDBNavLink>
 </MDBNavItem>
 <MDBNavItem>
   <MDBNavLink className='navlinks' to="/create-event">Create Event</MDBNavLink>
 </MDBNavItem>
 <MDBNavItem>
   <MDBNavLink className='navlinks' to="" onClick={this.props.logout}>Logout</MDBNavLink>
 </MDBNavItem>
 <MDBNavItem>
 <MDBNavLink className='navlinks'  to="/user/1">
   <Link id='orange' to='/user/1'>My Profile
   {/* {this.props.auth.user.FirstName} */}
   </Link> 
  </MDBNavLink>
 </MDBNavItem>
 <MDBNavItem>
 </MDBNavItem> 
</MDBNavbarNav>)
}
 guest=()=>{
   return (
  <MDBNavbarNav right>
  <MDBNavItem active>
   <MDBNavLink  className='navlinks' to="/">Overview</MDBNavLink>
 </MDBNavItem>
 <MDBNavItem>
   <MDBNavLink   className='navlinks'to="browse-event">Browse Event</MDBNavLink>
 </MDBNavItem>
 <MDBNavItem>
   <MDBNavLink className='navlinks' to="create-event">Create Event</MDBNavLink>
 </MDBNavItem>
 <MDBNavItem>
 <MDBNavLink  onClick={() => window.location.reload()} className='navlinks'  to="/login"><Link id='orange' to='/login'>Sign in</Link> </MDBNavLink>
 </MDBNavItem>
 </MDBNavbarNav>)



}

render() {
  return (
    <div className="my-header">
    {/* <Router ="my-navbar"> */}
      <MDBNavbar className="navbar w-100"  dark expand="md">

        <MDBNavbarBrand>
          <strong className="white-text">Event <strong className='ness'>Ness</strong></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
          {/* <MDBNavbarNav right>
             <MDBNavItem active>
              <MDBNavLink  className='navlinks' to="/">Overview</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink   className='navlinks'to="browse-event">Browse Event</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className='navlinks' to="create-event">Create Event</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink id='orange'  className='navlinks'  to="login"> Sign in</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav> */}
          {this.props.auth.isAuthenticated ? this.userconnected() : this.guest()}
        </MDBCollapse>
      </MDBNavbar>
    </div>

    );
  }
}
const mapStateToProps=state=>{

  return{
    auth: state.auth
  }
}


export default connect(mapStateToProps,{logout})(NavbarPage);
