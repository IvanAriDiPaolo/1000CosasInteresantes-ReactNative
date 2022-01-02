import { applyMiddleware, combineReducers, createStore } from 'redux'

import { authReducer } from './authReducer'
import { noticiasReducer } from './noticiasReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer,
    noticias: noticiasReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
