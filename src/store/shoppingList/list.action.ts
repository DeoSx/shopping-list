import { ThunkType } from '../../types/store'
import {
  ShoppingTypes as Types,
  ShoppingItem,
  ShoppingListItem
} from '../../types/store/shoppingList'

export const AddToCardAction = (item: ShoppingItem): ThunkType => {
  return (dispatch, getState) => {
    const categories = getState().items.list
    let shoppingList: any = getState().shoppingList.list
    const category = categories.find((c) => c._id === item.categoryId)

    if (!shoppingList.length) {
      const dataOfShoppingListItem = {
        _id: category!._id,
        title: category!.title,
        items: [item]
      }
      shoppingList.push(dataOfShoppingListItem)
      dispatch({ type: Types.ADD_TO_LIST, payload: shoppingList })
      return
    }

    if (shoppingList.length) {
      const shoppingListItemCategoty = shoppingList.find(
        (s: ShoppingListItem) => s._id === item.categoryId
      )
      shoppingList.map((si: ShoppingListItem) => {
        if (si._id === item.categoryId) {
          const siItem = si.items.find((i) => i._id === item._id)
          if (!siItem) {
            si.items.push(item)
          }
        }
      })
      if (!shoppingListItemCategoty) {
        const data = {
          _id: category!._id,
          title: category!.title,
          items: [item]
        }
        shoppingList.push(data)
      }
      dispatch({ type: Types.ADD_TO_LIST, payload: shoppingList })
    }
  }
}

export const addSubAction = (operation: string, item: ShoppingItem) => {
  if (operation === 'plus') {
    return {
      type: Types.INCREMENT_ITEM,
      payload: item
    }
  } else {
    return {
      type: Types.DECREMENT_ITEM,
      payload: item
    }
  }
}

export const deleteItemAction = (ids: { _id: string, categoryId: string }) => {
  return {
    type: Types.DELETE_ITEM,
    payload: ids
  }
}