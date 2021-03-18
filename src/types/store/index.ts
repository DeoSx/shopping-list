import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IItems } from './items'
import { RootState } from '../../store/rootReducer'

export interface rootState {
  items: IItems
}

export type ThunkType = ThunkAction<void, RootState, any, Action<any>>
