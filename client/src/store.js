import {createStore, combineReducers} from 'redux'

import authReducer from './reducers/auth'
import messageReducer from './reducers/messages'

const rootReducer = combineReducers({authReducer, messageReducer})

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store