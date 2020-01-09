import { combineReducers } from 'redux'

import EventReducer from './EventReducer' ;
import AuthReducer from'./AuthReducer'
import AlertReducer from './AlertReducer'

export default combineReducers({event:EventReducer,auth:AuthReducer,alert:AlertReducer}) 