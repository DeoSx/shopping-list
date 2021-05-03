import { ShoppingListItem } from "./shoppingList";

export interface IHistoryState {
  list: IHistoryItem[]
  isLoading: boolean,
  error: string,
  oneHistory: IHistoryItem | null
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
  FETCH_HISTORY_ERROR = 'FETCH_HISTORY_ERROR',
  FETCH_ONE_HISTORY = 'FETCH_ONE_HISTORY'
}

export interface IFetchHistory {
  type: HistoryTypes.FETCH_HISTORY,
  payload: IHistoryItem[]
}

export interface IFetchOneHistory {
  type: HistoryTypes.FETCH_ONE_HISTORY,
  payload: IHistoryItem
}


export type HistoryActions = IFetchHistory | IFetchOneHistory