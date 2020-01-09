
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../App.css";
class NavbarPage extends Component {
state = { 
  isOpen: false
};
componentDidMount=()=>{
  console.log(this.props)
}

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <div className="my-header">
    {/* <Router ="my-navbar"> */}
      <MDBNavbar className="navbar w-100"  dark expand="md">

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
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

      {/* </Router> */}
      {/* <div class="image cover bg-center h-100 w-100" style="background-image: url(&quot;//images.ctfassets.net/pzzgna09n4z0/5gpoRhZUjCacmu2s2gIYQu/81b182c8dc5da2fb0fefe7a62a969480/Img_1.png?w=2420&amp;fm=webp&amp;q=75&quot;);" data-v-71ad9e33="" data-v-0c37f5b6=""></div> */}
    </div>

    );
  }
}


export default NavbarPage;
