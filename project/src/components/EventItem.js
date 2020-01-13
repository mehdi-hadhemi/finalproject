import React from 'react'
import { Link } from 'react-router-dom'
import {Card ,Button} from 'react-bootstrap'


 const EventItem=props=> {
    return (
          
      <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.event.image} />
  <Card.Body>
    <Card.Title>{props.event.title}</Card.Title>
    <Card.Text>
    {props.event.startingDate}
    {props.event.city}
    </Card.Text>
    <Link to={`/event/${props.event.id}`}><Button variant="primary">learn more</Button></Link>
  </Card.Body>
</Card>


    
        </div>
    )
}
export default EventItem