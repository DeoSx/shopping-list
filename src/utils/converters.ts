import { ShoppingItem, ShoppingListItem } from "../types/store/shoppingList";

type symb = 'minus' | 'plus'

export function itemsConverter(list: ShoppingListItem[], item: ShoppingItem, symb: symb): ShoppingListItem[] {
  return list.map(c => c._id === item.categoryId
    ? {
      ...c, items: c.items.map(i => i._id === item._id
        ? { ...i, quantity: i.quantity + (symb === 'minus' ? - 1 : + 1) }
        : i)
    }
    : c)
}