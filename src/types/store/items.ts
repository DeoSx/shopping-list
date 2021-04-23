export interface IItems {
  list: ItemWithCategoryFromBack[]
  loading: boolean
  error: string
  itemInfo: ItemInfoType | null
}

export interface IFetchItems {
  type: ItemsTypes.FETCH
}

export interface IFetchItemsSuccess {
  type: ItemsTypes.FETCH_SUCCESS
  payload: ItemWithCategoryFromBack[]
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

export interface ISetItemInfo {
  type: ItemsTypes.SET_INFO_ITEM,
  payload: ItemFromBack
}

export interface IClearInfoItem {
  type: ItemsTypes.CLEAR_INFO_ITEM
}

export type ItemsActions =
  IFetchItems |
  IFetchItemsSuccess |
  IFetchItemsError |
  ICreateItem |
  ICreateCategory |
  ISetItemInfo |
  IClearInfoItem


export enum ItemsTypes {
  FETCH = 'FETCH',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
  CREATE_ITEM = 'CREATE_ITEM',
  CREATE_CATEGORY = 'CREATE_CATEGORY',
  SET_INFO_ITEM = 'SET_INFO_ITEM',
  CLEAR_INFO_ITEM = 'CLEAR_INFO_ITEM'
}

export type ItemFromBack = {
  image: string
  name: string
  note?: string
  quantity: number
  categoryId: string | undefined
  _id: string
  isAdded: boolean
}

export type ItemToBack = {
  image: string
  name: string
  note?: string
  title: string
  categoryId: string | undefined
}

export type ItemWithCategoryFromBack = {
  title: string
  _id: string
  items: ItemFromBack[]
}

export type ItemInfoType = {
  image: string
  name: string
  note?: string
  categoryId: string | undefined
  _id: string
}