import uuid from "uuid";
import { ADD_EVENT, ADD_FILTER } from "../actions/EventsTypes";
import {ADD_PARTICIPANT } from "../actions/types";



let initialstate = [
  {
    id: 0,
    tittle: "hello",
    description: "hello",
    price: 0,
    city: "Tunis",
    tags: ["Gaming"],
    date: ["2020-01-20"],
    image:
      "https://eventnepal.com/wp-content/uploads/2020/01/Free-Workshop.jpg",
    maxParticipants: 2,
    participants: ["vhjvhkv" , "nizrjvn"]
  },
  {
    id: 1,
    tittle: "dvsdv",
    description: "sdvvdvs",
    price: 0,
    city: "Gabes",
    tags: ["Community"],
    date: ["2020-05-20"]
  },
  {
    id: 2,
    tittle: "dsvdv",
    description: "sdvdvsd",
    price: 0,
    city: "Tunis",
    tags: ["Charity"],
    date: ["2020-05-20"]
  }
];

const EventReducer = (state = { events: initialstate }, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return { ...state, events: state.events.concat(action.payload) };
    case ADD_FILTER:
      return state;
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
    // case ADD_FILTER:
    //   return initialstate.filter(
    //     el =>
    //       el.tags.some(r => action.payload.tags.includes(r)) &&
    //       el.city === action.payload.city &&
    //       el.date.some(r => action.payload.date.includes(r))
    //   );
    // case PARTICIPATE_EVENT:
    //     return  state.map(el=> (payload.idevent===el.id)?el.participants.concat(payload.iduser):null)

    default:
      return state;
  }
};
export default EventReducer;
