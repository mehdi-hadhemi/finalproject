
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventItem from './EventItem'
import {readEvents} from '../actions/EventsActions'
 class EventList extends Component {
     constructor(props){
         super(props)
         this.state = {

         }
     }
     componentDidMount(){
         this.props.readEvents()
     }
     render(){
        return (
            <div className='events-container'>
                {
           this.props.eventlist
           .filter(el => el.tags.some(r => this.props.filter.tags.includes(r)) && el.city.includes(this.props.filter.city) && el.date.some(r => this.props.filter.date.includes(r)))
           .map(el=> <EventItem className='event-card' event={el}/> )
                }
         
            </div>
        )
         
     }
   
}
const mapStateToProps=(state)=>{
    return{
        eventlist:state.event
    }
}
export default connect(mapStateToProps,{readEvents})(EventList)

