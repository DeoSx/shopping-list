export interface IItems {
  list: ItemWithCategoryFromBack[]
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

export interface ICreateItem {
  type: ItemsTypes.CREATE_ITEM,
  payload: ItemWithCategoryFromBack
}

export interface ICreateCategory {
  type: ItemsTypes.CREATE_CATEGORY
  payload: ItemWithCategoryFromBack
}

export type ItemsActions = IFetchItems | IFetchItemsSuccess | IFetchItemsError | ICreateItem | ICreateCategory


export enum ItemsTypes {
  FETCH = 'FETCH',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
  CREATE_ITEM = 'CREATE_ITEM',
  CREATE_CATEGORY = 'CREATE_CATEGORY'
}

export type ItemFromBack = {
  image: string
  name: string
  note?: string
  quantity: number
  _id: string
}

export type ItemToBack = {
  image: string
  name: string
  note?: string
  title: string
}

export type ItemWithCategoryFromBack = {
  title: string
  _id: string
  items: ItemFromBack[]
}