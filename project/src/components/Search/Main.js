import React from "react";
import CalendarModal from "./CalenderModal"
import CategorySelection from './CategorySelection'

import './main.css'  
import "react-datepicker/dist/react-datepicker.css";
import LocationSearch from "./LocationSearch";
import EventList from '../EventList'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {addFilter } from '../../actions/EventsActions'
// import EventList from '../EventList'
class main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     city: '',
     tags : ['Gaming'],
     date: []
   
    
     
    }
    
  }
  step1Text = (name, value) => {
    this.setState({[`${name}`]: value})
}
  render() {
    return (
      <div className='Search'>
        <h6>When do you want to go out </h6>
        <CalendarModal step1Text={(x,y) => this.step1Text(x,y)}/>
        <h6>Where do you want to go out</h6>
        <LocationSearch  step1Text={(x,y) => this.step1Text(x,y)}/>
        <h6>What are you interested in </h6>
        <CategorySelection step1Text={(x,y) => this.step1Text(x,y)} />
        <Button onClick={() => this.props.Filter(this.state)} >Filter</Button>
        <EventList filter={this.state}/>
      </div>
    );

  }

}
const mapDispatchToProps = dispatch => {
  return{
    Filter : (x) => dispatch(addFilter(x))
  }
}

export default connect(null, mapDispatchToProps) (main)