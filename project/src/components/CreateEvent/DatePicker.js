import React, { Component } from 'react'
import Calendar from "react-date-range-calendar";
import "react-datepicker/dist/react-datepicker.css";
// import TimePicker from './TimePicker'
import moment from 'moment';
import TimePicker from 'react-time-picker'
import 'rc-time-picker/assets/index.css';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      startingHour: '',
      endingHour: ''

    }
  }
  handleChange1 = time => {
    this.setState({ startingHour: time })
  }
  handleChange2 = time => {
    this.setState({ endingHour: time })
  }
  render() {
    const showSecond = true;
    const str = showSecond ? 'HH:mm:ss' : 'HH:mm';
    return (
      <div>
        <h2>Tell your audience when your event starts <br /> and ends so they can make plants to attend</h2>

        <Calendar
          className="calender"
          onSelect={(startDate, endDate, validDateRange) => {
            this.setState({ startDate: startDate, endDate: endDate })

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

        <h2>Pick a starting time</h2>
        <div className='PriviousNext'>
          <TimePicker value={this.state.startingHour}  onChange={this.handleChange1} />

        </div>
        <h2>Pick an ending time</h2>
        <div className='PriviousNext'>
          <TimePicker onChange={this.handleChange2} value={this.state.endingHour} />


        </div>
      </div>
    )
  }
}

export default DatePicker