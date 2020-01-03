// import React, { Component } from "react";
// import {
//   Navbar,
//   NavDropdown,
//   Form,
//   Button,
//   FormControl,
//   Nav
// } from "react-bootstrap";
// import "../App.css";

// class NavbarMenu extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar
//           variant="outline-info"
//           bg="#3A326D"
//           expand="lg"
//         >
//           <Navbar.Brand className="navbar_brand" href="#home">
//             EventNess
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             {/* <Form inline>
//       <FormControl type="text" placeholder="Search your Event" className="mr-sm-2" />
//       <Button className='navlinks' variant="outline-info">Search</Button>
//     </Form> */}
//           </Navbar.Collapse>
//           <Nav className="mr-auto">
//             <Nav.Link
//               className="navlinks"
//               href="#home"
//               gradient="peach-gradient"
//             >
//               Overview
//             </Nav.Link>
//             <Nav.Link className="navlinks" href="#browse event">
//               Browse Event
//             </Nav.Link>
//             <Nav.Link className="navlinks" href="#create enent">
//               Create Event
//             </Nav.Link>
//             <NavDropdown title="help" id="basic-nav-dropdown">
//               <NavDropdown.Item className="navlinks" href="#action/3.1">
//                 Action
//               </NavDropdown.Item>
//               <NavDropdown.Item className="navlinks" href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item className="navlinks" href="#action/3.3">
//                 Something
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item className="navlinks" href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link className="navlinks" to={`/user/${1}`}>
//               sign in{" "}
//             </Nav.Link>
//           </Nav>
//         </Navbar>
//       </div>
//     );
//   }
// }
// export default NavbarMenu;
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
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
    <div className="my-header">
    <Router className="my-navbar">
      <MDBNavbar className="navbar"  dark expand="md">
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
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem link to={`/user/${1}`}>sign up</MDBDropdownItem>
                  <MDBDropdownItem href="#!">sign in</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </Router>
      <img src='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='' />
      {/* <div class="image cover bg-center h-100 w-100" style="background-image: url(&quot;//images.ctfassets.net/pzzgna09n4z0/5gpoRhZUjCacmu2s2gIYQu/81b182c8dc5da2fb0fefe7a62a969480/Img_1.png?w=2420&amp;fm=webp&amp;q=75&quot;);" data-v-71ad9e33="" data-v-0c37f5b6=""></div> */}
    </div>
    );
  }
}


export default NavbarPage;
