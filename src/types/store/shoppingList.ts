export interface IShoppingList {
  list: ShoppingListItem[]
  name: string
}

export type ShoppingListItem = {
  title: string
  _id: string
  items: ShoppingItem
}

export type ShoppingItem = {
  quantity: number
  name: string
  categoryId: number
  _id: string
}

export enum ShoppingTypes {
  FETCH_LIST = 'FETCH_LIST'
}