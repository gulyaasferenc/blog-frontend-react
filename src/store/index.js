import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import myReducer from './reducer'

export const reducer = createStore(myReducer, applyMiddleware(thunk)) 