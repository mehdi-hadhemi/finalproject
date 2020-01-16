import uuid from "uuid";
import { ADD_EVENT, ADD_FILTER } from "../actions/EventsTypes";
import {ADD_PARTICIPANT } from "../actions/types";

let  initialstate=[]


const EventReducer = (state = { events: initialstate }, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return { ...state, events: state.events.concat(action.payload) };
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
      return state;
  }
};
export default EventReducer;
