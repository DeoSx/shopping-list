import { IShoppingList, ShoppingTypes } from "../../types/store/shoppingList"


const initialState: IShoppingList = {
  list: [],
  name: ''
}

const shoppingListReducer = (state = initialState, action: any): IShoppingList => {
  switch (action.type) {
    case ShoppingTypes.FETCH_LIST:
      return {
        ...state
      }
    default:
      return state
  }
}

export default shoppingListReducer