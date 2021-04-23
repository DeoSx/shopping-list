export interface IShoppingList {
  list: ShoppingListItem[]
  name: string
  error: string
  isLoading: boolean
}

export type ShoppingListItem = {
  title: string
  _id: string
  items: ShoppingItem[]
}

export type ShoppingItem = {
  quantity: number
  name: string
  categoryId?: string
  _id: string
}

export enum ShoppingTypes {
  FETCH_LIST = 'FETCH_LIST',
  ADD_TO_LIST = 'ADD_TO_LIST',
  INCREMENT_ITEM = 'INCREMENT_ITEM',
  DECREMENT_ITEM = 'DECREMENT_ITEM'
}

export interface IFetchShoppingList {
  type: ShoppingTypes.FETCH_LIST,
  payload: ShoppingListItem[]
}

export interface IAddToList {
  type: ShoppingTypes.ADD_TO_LIST,
  payload: ShoppingListItem
}

interface IIncrementItem {
  type: ShoppingTypes.INCREMENT_ITEM,
  payload: ShoppingItem
}

interface IDecrementItem {
  type: ShoppingTypes.DECREMENT_ITEM,
  payload: ShoppingItem
}

export type ShoppingListActions = IFetchShoppingList | IAddToList | IIncrementItem | IDecrementItem