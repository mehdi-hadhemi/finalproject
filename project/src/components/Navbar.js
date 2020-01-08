
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../App.css";
class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
   
    <Router className="my-navbar">
      <MDBNavbar className="navbar w-90"  dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">EventNess</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
             <MDBNavItem active>
              <MDBNavLink  className='navlinks' to="#!">Overview</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink   className='navlinks'to="#!">Browse Event</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className='navlinks' to="#!">Create Event</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink  onClick={() => window.location.reload()} className='navlinks'  to="test"><Link id='orange' to='/test'>Sign in</Link> </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </Router>
    
    );
  }
}


export default NavbarPage;
