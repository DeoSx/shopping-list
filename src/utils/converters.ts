import { ShoppingItem, ShoppingListItem } from '../types/store/shoppingList'

type symb = 'minus' | 'plus'

export function itemsConverter(
  list: ShoppingListItem[],
  item: ShoppingItem,
  symb: symb
): ShoppingListItem[] {
  const counting = (numb: number) => {
    const conditions = symb === 'minus' ? -1 : +1
    if (numb <= 1 && symb === 'minus') {
      return 0
    } else {
      return conditions
    }
  }

  return list.map((c) =>
    c._id === item.categoryId
      ? {
        ...c,
        items: c.items.map((i) =>
          i._id === item._id
            ? { ...i, quantity: i.quantity + counting(i.quantity) }
            : i
        )
      }
      : c
  )
}

export const dateConverter = (str: string) => {
  const date = new Date(str)
  const dateNumb = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${dateNumb}.${month}.${year}`
}