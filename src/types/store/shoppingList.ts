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
  ADD_TO_LIST = 'ADD_TO_LIST'
}

export interface IFetchShoppingList {
  type: ShoppingTypes.FETCH_LIST,
  payload: ShoppingListItem[]
}

export interface IAddToList {
  type: ShoppingTypes.ADD_TO_LIST,
  payload: ShoppingListItem
}

export type ShoppingListActions = IFetchShoppingList | IAddToList