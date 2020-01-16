import {ADD_EVENT,ADD_EVENTS, READ_EVENTS, ADD_PARTICIPANT} from './EventsTypes'
import axios from 'axios'
import { ADD_PARTICIPANT } from './types'
export const addEvent = newEvent =>{
    return{
        type: ADD_EVENT,
        payload: newEvent

    }
}
export const addParticipant = (participantId, eventID)=> {
    return{
        type: ADD_PARTICIPANT,
        payload: {participantId, eventID}
    }
}
export const addEvents = newEvents => dispatch =>{
    const config ={
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    axios.post('api/event', newEvents, config)
    .then(res=>dispatch({
        type:ADD_EVENTS, 
        payload: res.date
    }))
}
export const readEvents = () => dispatch => {
    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    }
    axios.get('api/event', config)
    .then(res => dispatch({
        type:READ_EVENTS,
        payload: res.data
    }))
}