import React, { Component } from 'react'
import { connect } from 'react-redux'


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
                event ?    <div class="shadow-lg p-3 mb-5 bg-white rounded">
                       <h1>{event.title}</h1> 
                        <img src={event.image} alt=''/>
                        <h2>{event.date}</h2>
                        <p>{event.description}</p>
                        <p>{event.adresse}</p>
                    </div>
            : null
        )
    }
}
const mapstatetoprops=state=>{
    return {events:state.EventReducer}
}

export default connect(mapstatetoprops)(EventInfo)