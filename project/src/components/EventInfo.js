import React, { Component } from 'react'
import { connect } from 'react-redux'
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
                event ? <div  class="shadow-lg p-3 mb-5 bg-white rounded">
                    <div style={{ backgroundImage: `url(${event.image})` }} className='background-event'> </div>
                   
                    <div  style={{ backgroundImage: `url(${event.image})` }} className='background-image'> </div>
                        {/* <img src={event.image} alt=''/> */}
                        <div className='time-adress'>
                        <h2 className='eventdate'>{event.date}</h2>
                        <h4 className='eventtitle'>{event.title}</h4> 
                        <p className='eventadress'>{event.adresse}</p>
                        <button class='btn btn-outline-primary'>resarvation</button>
                        </div>
                        {/* <div>
                        <button icon="heart"></button>
                        </div>   */}
                        <div className="event-desc">
                     <h5 className="about"> About this event</h5>
                        <p className="description">{event.description}</p>
                        
                    </div>
                    <hr/>
                    <h5 className="about-orga"> About the organizer</h5>
                    </div>

            : null
        )
    }
}
const mapstatetoprops=state=>{
    return {events:state.EventReducer}
}

export default connect(mapstatetoprops)(EventInfo)