import uuid from 'uuid'
import {ADD_EVENT_BI, ADD_EVENT_LOCATION, ADD_EVENT_DATE, ADD_EVENT_SPONSOR} from '../actions/types'




let initialstate=[
  {
    id: uuid(),
    image : "",
    title : "concert",
    startingDate : "10/12/2020",
    city : "sousse",
    description : "blabla bla",
    startingHour:"14h",
    endingHour:"17h",
    endingDate:"10/12/2020",
    adresse:"khezema sousse",
    organizer:"balalallala"

  }
]

  const EventReducer =(state=initialstate,action) => {
    switch (action.type){
  
     default:
        return state
    }
}
export default EventReducer