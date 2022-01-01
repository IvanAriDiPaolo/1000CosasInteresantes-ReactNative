import { combineReducers, createStore } from 'redux'

import { authReducer } from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
})

export default createStore(rootReducer)
