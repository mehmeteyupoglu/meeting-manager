import {appReducer, registration} from "./ducks"
import { combineReducers, compose, createStore } from "redux"

const rootReducer = combineReducers({appReducer, registration})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers())

export default store
