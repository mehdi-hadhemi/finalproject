import { ADD_EVENT_BI, ADD_EVENT_LOCATION,ADD_EVENT_DATE, ADD_EVENT_SPONSOR } from './types'
export const addBasicInfo = (newEventBi) => {
    return {
        type: ADD_EVENT_BI,
        payload: newEventBi
    }


}
export const addLocation = (newEventLocation) => {
    return{
        type: ADD_EVENT_LOCATION,
        payload: newEventLocation
    }
}
export const addDate = (newEventDate) => {
    return{
        type: ADD_EVENT_DATE,
        payload: newEventDate
    }
}
export const addSponsor = (newEventSponsor) => {
    return{
        type: ADD_EVENT_SPONSOR,
        payload: newEventSponsor
    }
}