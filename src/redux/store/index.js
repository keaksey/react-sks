import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './../reducers'

export default function configureStore(initialState={}):any {
    let store = createStore(rootReducer, initialState);
    return store
}
