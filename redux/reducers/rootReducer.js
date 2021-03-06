import { applyMiddleware, combineReducers, createStore } from 'redux'

import { authReducer } from './authReducer'
import { databaseReducer } from './databaseReducer'
import { noticiasReducer } from './noticiasReducer'
import { serviciosReducer } from './serviciosReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer,
    noticias: noticiasReducer,
    servicios: serviciosReducer,
    database: databaseReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
