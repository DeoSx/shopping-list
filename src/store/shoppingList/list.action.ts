import { ThunkType } from '../../types/store'
import { ShoppingTypes as Types, ShoppingItem } from '../../types/store/shoppingList'

export const AddToCardAction = (item: ShoppingItem): ThunkType => {
  return (dispatch, getState) => {
    const categories = getState().items.list
    const shoppingList = getState().shoppingList.list

    if (!shoppingList.length) {
      const category = categories.find(c => c._id === item.categoryId)

      const dataOfShoppingListItem = {
        _id: category?._id,
        title: category?.title,
        items: [item]
      }
      dispatch({ type: Types.ADD_TO_LIST, payload: dataOfShoppingListItem })

      return
    }

    // categories.map(category => {

    // })

  }
}