export interface IItems {
  items: ItemWithCategoryFromBack[]
  loading: boolean
  error: string
}

export interface IFetchItems {
  type: ItemsTypes.FETCH
}

export interface IFetchItemsSuccess {
  type: ItemsTypes.FETCH_SUCCESS
  payload: []
}

export interface IFetchItemsError {
  type: ItemsTypes.FETCH_ERROR
  payload: string
}

export type ItemsActions = IFetchItems | IFetchItemsSuccess | IFetchItemsError


export enum ItemsTypes {
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

export type ItemWithCategoryFromBack = {
  title: string
  _id: string
  items: ItemFromBack[]
}