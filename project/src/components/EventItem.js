import React from 'react'
import { Link } from 'react-router-dom'
import {Card ,Button} from 'react-bootstrap'


 const EventItem=props=> {
    return (
          
      <div className='cards-container'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.event.img} />
  <Card.Body>
    <Card.Title>{props.event.tittle}</Card.Title>
    <Card.Text>
    {props.event.Date}
    {props.event.adresse}
    </Card.Text>
    <Link to={`/event/${props.event.id}`}><Button variant="primary">learn more</Button></Link>
  </Card.Body>
</Card>


    
        </div>
    )
}
export default EventItem