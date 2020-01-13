import {ADD_EVENT} from './types'
import axios from 'axios'
export const addEvent = newEvent => dispatch =>{
    const config = {
        headers:{
            "Content-Type" : 'application/json'
        }
    }
    axios.post('api/events', newEvent,config)
    .then(res => dispatch({
        type:ADD_EVENT,
        payload: res.data
    }))
}