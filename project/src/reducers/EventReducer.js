import uuid from 'uuid'
import {ADD_EVENT, ADD_EVENTS,READ_EVENTS} from '../actions/EventsTypes'



let initialstate= []

  const EventReducer =(state=initialstate,action) => {
    switch (action.type){
      case ADD_EVENT:
        return state.concat(action.payload)
      case ADD_EVENTS:
        return state.concat(action.payload)
      case READ_EVENTS:
        return action.payload
      
     default:
                  return state
    }
}
export default EventReducer