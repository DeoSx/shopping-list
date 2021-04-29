import { IShoppingList, ShoppingTypes as Types, ShoppingListActions } from "../../types/store/shoppingList"
import { itemsConverter } from "../../utils/converters"


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
        // @ts-ignore
        list: action.payload
      }
    case Types.INCREMENT_ITEM:
      return {
        ...state,
        list: [...itemsConverter(state.list, action.payload, 'plus')]
      }
    case Types.DECREMENT_ITEM:
      return {
        ...state,
        list: [...itemsConverter(state.list, action.payload, 'minus')]
      }
    case Types.DELETE_ITEM:
      const { _id, categoryId } = action.payload
      return {
        ...state,
        list: [...state.list.map(c => c._id === categoryId ? { ...c, items: c.items.filter(i => i._id !== _id) } : c)]
      }
    case Types.CLEAN_LIST:
      return {
        ...state,
        isLoading: false,
        list: []
      }
    default:
      return state
  }
}

export default shoppingListReducer
