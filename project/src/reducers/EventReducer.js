import uuid from 'uuid'
import {ADD_EVENT_BI, ADD_EVENT_LOCATION, ADD_EVENT_DATE, ADD_EVENT_SPONSOR} from '../actions/types'

let initialstate=[]
  const EventReducer =(state=initialstate,action) => {
    switch (action.type){
      case ADD_EVENT_BI:
        return state.concat({basicInfo : action.payload})
      case ADD_EVENT_LOCATION:
        return [...initialstate, state[state.length - 1] = {...state[state.length - 1], location: action.payload}]
      case ADD_EVENT_DATE:
        return [...initialstate, state[state.length - 1] = {...state[state.length - 1], date: action.payload}] 
      case ADD_EVENT_SPONSOR:
        return [...initialstate, state[state.length - 1] = {...state[state.length - 1], sponsor: action.payload}] 
     default:
                  return state
    }
}
export default EventReducer