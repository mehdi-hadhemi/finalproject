import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Calendar from "react-date-range-calendar";
import "react-datepicker/dist/react-datepicker.css";
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
    <div>
    <MDBBtn color="primary" className="buttonPickDate" onClick={this.toggle(14)}>pick a date</MDBBtn>
    <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
      <MDBModalHeader toggle={this.toggle(14)}>MDBModal title</MDBModalHeader>
      <MDBModalBody>
        <h1 className='text '>Pick a start date and an end date</h1>
        <Calendar  
            className="calender"
          onSelect={(startDate, endDate, validDateRange) => {
            this.setState({Date : validDateRange},() => this.props.step1Text('date', validDateRange))

            
          }}
          onChange={selectedDate => {
            console.log("here is the selected date", selectedDate);
          }}
          selectedRange={[null, null]}
          disabledDates={() => {
            return ["2019-08-16", "2019-08-20"];
          }}
          disablePrevDates
          />
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
        <MDBBtn color="primary" onClick={this.toggle(14)}>Save changes</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </div>
    );
  }
}

export default CalenderModal;