import {createStore, applyMiddleware, compose} from 'redux';
import mainreducer from './reducers'
import thunk from 'redux-thunk'

const middleware = [thunk]

const store =createStore(
    mainreducer,
    compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;