import React from 'react'
import {connect}from 'react-redux'
import EventItem from './EventItem'
 const EventList=props=> {
    return (
        <div className='events-container'>
            {
       props.eventlist.map(el=> <EventItem className='event-card' event={el}/> )
            }
     
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        eventlist:state.EventReducer
    }
}
export default connect(mapStateToProps)(EventList)