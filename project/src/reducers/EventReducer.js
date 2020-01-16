
import uuid from 'uuid'
import { ADD_EVENT, ADD_EVENTS, READ_EVENTS } from '../actions/EventsTypes'
import { ADD_PARTICIPANT } from "../actions/types";


let initialstate = []
const EventReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return state.concat(action.payload)
    case ADD_EVENTS:
      return state.concat(action.payload)
    case READ_EVENTS:
      return action.payload
    case ADD_PARTICIPANT:
      return {
        ...state,
        events: state.events.map(el =>
          el.id === action.payload.eventId
            ? {
              ...el,
              participants: el.participants.concat(
                action.payload.participantId
              )
            }
            : el
        )
      };

    default:
      return state
  }
}
export default EventReducer

