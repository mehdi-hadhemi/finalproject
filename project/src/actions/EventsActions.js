import {ADD_EVENT, ADD_FILTER} from './EventsTypes'
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