import uuid from 'uuid'
import {ADD_EVENT, ADD_FILTER} from '../actions/EventsTypes'



let initialstate= [{tittle: 'hello', description:'hello', price : 0, city : 'Tunis', tags:['Gaming'],     date: [
 
  '2020-01-20'
]},{tittle: '', description:'', price : 0, city : 'Gabes', tags : ['Community'], date : []},{ date : [],tittle: '', description:'', price : 0, city : 'Tunis', tags: ['Charity']} ]

  const EventReducer =(state=initialstate,action) => {
    switch (action.type){
      case ADD_EVENT:
        return state.concat(action.payload)
      case ADD_FILTER:
        return initialstate.filter(el => el.tags.some(r=> action.payload.tags.includes(r) ) && el.city === action.payload.city && el.date.some(r => action.payload.date.includes(r)))
  
     default:
                  return state
    }
}
export default EventReducer