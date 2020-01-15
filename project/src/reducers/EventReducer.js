import uuid from 'uuid'
import {ADD_EVENT, ADD_EVENTS,READ_EVENTS} from '../actions/EventsTypes'



let initialstate= [{tittle: 'gaming/tunis', description:'hello', price : 0, city : 'Tunis', tags:['Gaming'],img: 'https://cdn-images-1.medium.com/max/1200/1*biHDpMaH9fPDL9Z1nhbmpA.jpeg',     date: [
 
  '2020-01-20','1'
]},{tittle: 'community/gabes', description:'', price : 0, city : 'Gabes', tags : ['Community'], date : ['1'], img:'https://www.gomycode.tn/images/slider2/slider21.jpg'},{ date : ['1'],tittle: 'charity/tunis', description:'', price : 0, city : 'Tunis', tags: ['Charity']} ]

  const EventReducer =(state=initialstate,action) => {
    switch (action.type){
      case ADD_EVENT:
        return state.concat(action.payload)
      case ADD_EVENTS:
        return state.concat(action.payload)
      case READ_EVENTS:
        return action.payload
      
     default:
                  return state
    }
}
export default EventReducer