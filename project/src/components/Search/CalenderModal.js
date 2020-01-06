import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Calender from './Calender'
class CalenderModal extends Component {
    
state = {
  modal14: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <MDBContainer>
    <MDBBtn color="primary" onClick={this.toggle(14)}>pick a date</MDBBtn>
    <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
      <MDBModalHeader toggle={this.toggle(14)}>MDBModal title</MDBModalHeader>
      <MDBModalBody>
        <h1 className='text '>Pick a start date and an end date</h1>
       <Calender/>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
        <MDBBtn color="primary" onClick={this.toggle(14)}>Save changes</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </MDBContainer>
    );
  }
}

export default CalenderModal;