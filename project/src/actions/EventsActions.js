import {ADD_EVENT, ADD_FILTER } from './EventsTypes'
import {ADD_PARTICIPANT } from './types'
export const addEvent = newEvent =>{
    return{
        type: ADD_EVENT,
        payload: newEvent

    }
}
export const addFilter = newFilter => {
    return {
        type: ADD_FILTER,
        payload: newFilter
    }
}
export const addParticipant = (participantId , eventId) => {
    return {
        type: ADD_PARTICIPANT,
        payload: {participantId ,eventId }
    }
}



// export const participateEvent= (iduser,idevent)=>{
//     return {
//         type:PARTICIPATE_EVENT,
//         payload:id
//     }
// }