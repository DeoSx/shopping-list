import { combineReducers, createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import itemsReducer from './items'
import { rootState } from './../types/store/index'

const middlewares: any = [thunk]

const rootReducer = combineReducers({
  items: itemsReducer
})

export const store: Store<rootState> = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)
