import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'

import mainReducer from './reducers/mainReducer'


const reducers = combineReducers({
    main: mainReducer,
    form: formReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store