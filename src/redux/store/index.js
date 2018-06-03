// @flow
import { 
    createStore, 
    applyMiddleware,
    compose 
} from 'redux'

import thunk from 'redux-thunk'

import rootReducer from './../reducers'

export default function configureStore() {
    
    const enhancer = compose(
        applyMiddleware(thunk)
    )
    
    let store = createStore(rootReducer, enhancer);
    return store
}
