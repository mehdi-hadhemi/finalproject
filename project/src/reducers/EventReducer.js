import uuid from 'uuid'
import { ADD_EVENT } from '../actions/types'



let initialstate = []

const EventReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return state.concat(action.payload)
        
      

    default:
      return state
  }
}
export default EventReducer