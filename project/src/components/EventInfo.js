import React, { Component } from 'react'
import { connect } from 'react-redux'
import  {ModalResrevation} from './ModalReservation'
import './events.css'



 class EventInfo extends Component {
     constructor(props){
         super(props)
         this.state={
             event: {
                
             }
         }
     }
    //  componentWillReceiveProps = (nextProps) => {
    //     this.setState(
    //         nextProps.events.filter(el => el.id == this.props.match.params.id)[0]
    //      )
    //     }
    //     componentDidMount() {    
    //     this.setState({
    //         event: this.props.events.filter(el => String(el.id) === this.props.eventId)[0] 
    //         })
    //  }
     
     

    render() {
        const event = this.props.events.filter(el => String(el.id) === this.props.eventId)[0]
        
        return (
                event ? <div>
                    <div style={{ backgroundImage: `url(${event.image})` }} className='background-event'> </div>
                   
                    <div  style={{ backgroundImage: `url(${event.image})` }} className='background-image'> </div>
                        {/* <img src={event.image} alt=''/> */}
                        <div className='time-adress'>
                        <h2 className='eventdate'>{event.startingDate}</h2>
                        <h4 className='eventtitle'>{event.title}</h4> 
                        <p className='eventadress'>{event.city}</p>
                        <button class='btn btn-outline-primary' >resarvation</button>
                        </div>
                        {/* <div>
                        <button icon="heart"></button>
                        </div>   */}
                        <div className="event-desc">
                            <div>
                     <h5 style={{fontWeight:"bold"}} className="about"> About this event</h5>
                     <h4 style={{ color: "grey" ,fontWeight:"bold"}} className='eventtitle'>{event.title}</h4> 
                        <p  style={{width:"780px",marginLeft: "22px"}}className="description">{event.description}</p>
                        </div>
                        <div className='info-sup'>
                            <p style={{ color: "grey" ,fontWeight:"bold"}}>Date and time </p>
                        <p >{event.startingDate}</p> <p >{event.endingDate}</p>
                        <p >{event.startingHour}</p> <p >{event.endingHour}</p>
                        <p  style={{ color: "grey" ,fontWeight:"bold"}}>location</p>

                        <p >{event.adresse}</p>
                    <p>{event.city}</p>
                        <p style={{ color: "grey" ,fontWeight:"bold"}}> Refound policy</p>
                        </div>
                    </div>
                    <hr/>
                    <h5 style={{fontWeight:"bold"}} className="about-orga"> About the organizer</h5>
    <h5>{this.organizer}</h5>
                    </div>

            : null
        )
    }
}
const mapstatetoprops=state=>{
    return {events:state.EventReducer}
}

export default connect(mapstatetoprops)(EventInfo)