import React, { Component } from 'react'
import Calendar from "react-date-range-calendar";
import "react-datepicker/dist/react-datepicker.css";


class Calender extends Component {
    constructor(props){
        super(props);
        this.state = {
          startDate: '',
          endDate: ''
         
        }
      }
    render() {
        return (
            <div>
                 
          <Calendar  
            className="calender"
          onSelect={(startDate, endDate, validDateRange) => {
            this.setState({startDate: startDate, endDate: endDate})

            console.log(
              startDate,
              " this is the start date",
              endDate,
              " this is the end date value.......",
              " and this is the validDateRange",
              validDateRange
            );
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
            </div>
        )
    }
}

export default Calender