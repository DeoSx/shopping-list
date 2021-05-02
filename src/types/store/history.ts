import { ShoppingListItem } from "./shoppingList";

export interface IHistoryState {
  list: IHistoryItem[]
  isLoading: boolean,
  error: string
}

export interface IHistoryItem {
  createdAt: string
  list: ShoppingListItem[]
  name: string
  _id: string
}

export enum HistoryTypes {
  FETCH_HISTORY = 'FETCH_HISTORY',
  FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS',
  FETCH_HISTORY_ERROR = 'FETCH_HISTORY_ERROR'
}

export interface IFetchHistory {
  type: HistoryTypes.FETCH_HISTORY,
  payload: []
}


export type HistoryActions = IFetchHistory