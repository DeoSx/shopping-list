import { IShoppingList, ShoppingTypes as Types, ShoppingListActions } from "../../types/store/shoppingList"


const initialState: IShoppingList = {
  list: JSON.parse(localStorage.getItem('list') || '[]'),
  name: '',
  isLoading: false,
  error: ''
}

const shoppingListReducer = (state = initialState, action: ShoppingListActions): IShoppingList => {
  switch (action.type) {
    case Types.FETCH_LIST:
      return {
        ...state
      }
    case Types.ADD_TO_LIST:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
}

export default shoppingListReducer