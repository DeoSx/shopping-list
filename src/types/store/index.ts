import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IItems } from './items'
import { IShoppingList } from './shoppingList'
import { RootState } from '../../store/rootReducer'
import { IHistoryState } from './history'

export interface rootState {
  items: IItems
  shoppingList: IShoppingList
  histories: IHistoryState
}

export type ThunkType = ThunkAction<void, RootState, any, Action<any>>
