import React, { Component } from "react";
import { connect } from "react-redux";
import { addParticipant } from '../actions/EventsActions'
import "./events.css";
import {loadUser } from '../actions/AuthActions'
import {readEvents} from '../actions/EventsActions'
class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        image:"dzedzedzedzedzed"
      },
      noP: 0,
      participants:[]
    };
  }
  componentDidMount() {
    this.props.loadUser()
    this.props.readEvents()
  }
  
  componentWillReceiveProps = (nextProps) => {
    this.setState(nextProps.auth.user)
  }

  componentDidMount = () => {
    console.log(this.props);
    this.setState({
      event: this.props.event.filter(
        el => String(el._id) === String(this.props.match.params.id)
      )[0]
    } 
    , () => {this.setState({ noP : this.state.participants.length})}
  );
  };
  
  render() { 
    console.log(this.props)
    return (
      <div>
        <div
          style={{ backgroundImage: `url(${this.state.event.img})` }}
          className="background-event"
        >
        </div>

        <div
          style={{ backgroundImage: `url(${this.state.event.img})` }}
          className="background-image"
        >
        </div>
        <div className="time-adress">
          <h2 className="eventdate">{this.state.event.startingDate}</h2>
          <h4 className="eventtitle">{this.state.event.tittle}</h4>
          <p className="eventadress">{this.state.event.city}</p>
          <button
            className="btn btn-outline-primary"
            onClick={this.state.event.maxparticipent > this.state.noP ?() => this.setState({noP : this.state.noP+1}) : ()=>alert("sold Out")}
            // onClick={this.state.event.maxparticipent > this.state.noP ?() => this.props.addNewParticipant(this.props.auth.user._id , this.state.event.id) : ()=>alert("sold Out")}
          >
            reservation
          </button>
          <h6>Palces left:{Number(this.state.event.maxparticipent)-(this.state.noP)}</h6>
    
        </div>
        
        <div className="event-desc">
          <div>
            <h2  className="about">
              About this event
            </h2>
            <h4
              style={{ color: "grey", fontWeight: "bold" }}
              className="eventtitle"
            >
              {this.state.event.title}
            </h4>
            <p
              style={{ width: "780px", marginLeft: "22px" }}
              className="description"
            >
              {this.state.event.description}
            </p>
          </div>
          <div className="info-sup">
            <p style={{ color: "grey", fontWeight: "bold" }}>Date and time </p>
            <p>{this.state.event.startingDate}</p>{" "}
            <p>{this.state.event.endingDate}</p>
            <p>{this.state.event.startingHour}</p>{" "}
            <p>{this.state.event.endingHour}</p>
            <p style={{ color: "grey", fontWeight: "bold" }}>location</p>
            <p>{this.state.event.adresse}</p>
            <p>{this.state.event.city}</p>
            <p style={{ color: "grey", fontWeight: "bold" }}> Refound policy</p>
          </div>
        </div>
        <hr />
        <h2  className="about-orga">
          About the organizer
        </h2>
        <h2>{this.organizer}</h2>
      </div>
    );
  }
}


const mapstatetoprops = state => {
  return { event: state.event, auth: state.auth };
};
const mapDispatchToProps = dispatch => {
  return {
      addNewParticipant : (newParId , eventId) =>dispatch(addParticipant(newParId , eventId))
  };
};

export default connect(mapstatetoprops ,(mapDispatchToProps,{loadUser},{readEvents}))(EventInfo);
