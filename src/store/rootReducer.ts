import { combineReducers, createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import itemsReducer from './items'
import { rootState } from './../types/store/index'

const middlewares: any = [thunk, logger]

const rootReducer = combineReducers({
  items: itemsReducer
})

export const store: Store<rootState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
