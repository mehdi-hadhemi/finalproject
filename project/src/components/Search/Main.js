import React from "react";
import CalendarModal from "./CalenderModal";
import CategorySelection from "./CategorySelection";

import "./main.css";
import "react-datepicker/dist/react-datepicker.css";
import LocationSearch from "./LocationSearch";
import EventList from '../EventList'

// import EventList from '../EventList'
class main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     city: '',
     tags : ['Gaming','Movies','Charity', 'Community', 'Music'],
     date: ['1']
   }
    
  }
  step1Text = (name, value) => {
    this.setState({ [`${name}`]: value });
  };
 
  render() {
    return (
      <div className="Search">

        <img style={{width:'100%'}}  src='http://www.fairact.in/wp-content/uploads/2018/04/events-bg.jpg' alt=''/>
        <div className='filter-bar'>
        <h6>When do you want to go out </h6>
        <CalendarModal step1Text={(x, y) => this.step1Text(x, y)} />
        <h6>Where do you want to go out</h6>
        <LocationSearch step1Text={(x, y) => this.step1Text(x, y)} />
        <h6>What are you interested in </h6>
        <CategorySelection step1Text={(x, y) => this.step1Text(x, y)} />
        </div>
        {/* <Button onClick={() => this.props.Filter(this.state)}>Filter</Button> */}
        <EventList filter={this.state} />
      </div>
    );
  }
}


export default main;

