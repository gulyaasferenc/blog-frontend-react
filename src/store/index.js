import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import myReducer from './reducer'

export default createStore(myReducer, applyMiddleware(thunk)) 