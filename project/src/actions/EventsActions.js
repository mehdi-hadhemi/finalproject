import {ADD_EVENT,ADD_EVENTS, READ_EVENTS} from './EventsTypes'
import axios from 'axios'
export const addEvent = newEvent =>{
    return{
        type: ADD_EVENT,
        payload: newEvent

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