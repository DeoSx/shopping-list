import { ShoppingListItem } from "../store/shoppingList";

export interface IShoppingListComponent {
  toAddItem: () => void,
  list: ShoppingListItem[]
}