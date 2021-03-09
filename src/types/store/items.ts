export interface IItems {
  items: ItemFromBack[]
  loading: boolean
  error: string
}

export interface IFetchItems {
  type: Items.FETCH
}

export interface IFetchItemsSuccess {
  type: Items.FETCH_SUCCESS
  payload: []
}

export interface IFetchItemsError {
  type: Items.FETCH_ERROR
  payload: string
}

export type ItemsActions = IFetchItems | IFetchItemsSuccess | IFetchItemsError


export enum Items {
  FETCH = 'FETCH',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR'
}

export type ItemFromBack = {
  image: string
  name: string
  note?: string
  quantity: number
  _id: string
}