import React from "react";
import CalendarModal from "./CalenderModal"
import CategorySelection from './CategorySelection'

import './main.css'  
import "react-datepicker/dist/react-datepicker.css";
import LocationSearch from "./LocationSearch";



class main extends React.Component {
  constructor(props){
    super(props)
    
  }

  render() {
    return (
      <div className='Search'>
        <h6>When do you want to go out </h6>
        <CalendarModal/>
        <h6>Where do you want to go out</h6>
        <LocationSearch />
        <h6>What are you interested in </h6>
        <CategorySelection />
        
      </div>
    );

  }

}
export default main