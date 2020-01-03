import React from 'react'
import {connect}from 'react-redux'
import EventItem from './EventItem'
 const EventList=props=> {
    return (
        <div>
            {
       props.eventlist.map(el=> <EventItem event={el}/> )
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