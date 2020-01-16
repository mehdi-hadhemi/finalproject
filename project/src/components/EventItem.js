import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { followEvent } from "../actions/AuthActions"
import {connect} from 'react-redux'

const EventItem = props => {
  const likedevent=[];
  console.log(props)
  return (
    <div className="cards-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.event.img} />
        <Card.Body>
          <Card.Title>{props.event.tittle}</Card.Title>
          <Card.Text>
            {props.event.Date}
            {props.event.adresse}
          </Card.Text>
          <div>
          <Link to={`/event/${props.event._id}`}>
            <Button variant="primary">learn more</Button>
          </Link>
          <button className='heart'><i onClick={() => props.followEvent({...props.event, ...props.auth})} class="far fa-heart"></i></button>
          </div>
        </Card.Body>
     
      </Card>
    </div>
  );
};
const mapstatetoprops = state => {
  return { events: state.event, auth: state.auth };
};



export default connect(mapstatetoprops, { followEvent })(EventItem);
