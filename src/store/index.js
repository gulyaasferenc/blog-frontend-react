import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import myReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(myReducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store
