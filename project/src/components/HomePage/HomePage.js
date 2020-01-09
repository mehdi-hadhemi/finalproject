import React from "react";
import EventInfo from "../EventInfo";
import EventList from "../EventList";
import SponsEvent from "./SponsEvent";
import Showcase from "./Showcase";
import Avatar from "@material-ui/core/Avatar";
import {connect} from 'react-redux'
import { loadUser } from "../../actions/AuthActions";
import { render } from "react-dom";
class HomePage extends React.Component {
  componentDidMount(){
    this.props.loadUser()
  }
render(){
  return (
    <div className="App">
      <Showcase />
      <h2>What our site offers you</h2>
      <hr/>
      <div className="info-box">
        <div className="one-info-box">
          <Avatar
            className="avatar"
            alt="Travis Howard"
            src="http://fis-cal.com/wp-content/uploads/2013/10/EVENTS.png"
          />
          <p>
            Extend your reach and find your audience where they discover
            experiences on our site
          </p>
        </div>
        <div className="one-info-box">
          <Avatar
            className="avatar"
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLj5M_YEpLVlTLQZVuB5yU5PwO-3npjCxiXeKjXPAKLpRqkiyx"
          />
          <p>
            Take control manage and track your sales with real time reporting
            and analytics from any device.
          </p>
        </div>
        <div className="one-info-box">
          <Avatar
            className="avatar"
            alt="Travis Howard"
            src="http://blog.evenium.com/wp-content/uploads/2013/02/What-makes-a-great-event-organizer.png"
          />
          <p>
            An app designed for organizers Run, promote, and track your event
            from your mobile device
          </p>
        </div>
      </div> 
      <h2>What can cheers you up</h2>
      <hr/>
      <SponsEvent />
      <h2 style= {{marginTop: "150px"}}>Events and Statistics</h2>
      <hr/>
{/* 
       <EventInfo /> 
       <EventList /> */}
    </div>
  );
}
}
export default connect(null,{loadUser}) (HomePage);
