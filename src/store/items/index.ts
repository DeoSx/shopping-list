import { IItems, ItemsTypes } from '../../types/store/items'
import { ItemsActions } from '../../types/store/items'

const initialState: IItems = {
  list: [],
  loading: false,
  error: '',
  itemInfo: null
}

const itemsReducer = (state = initialState, action: ItemsActions): IItems => {
  switch (action.type) {
    case ItemsTypes.FETCH:
      return { ...state, loading: true }
    case ItemsTypes.FETCH_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        loading: false
      }
    case ItemsTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ItemsTypes.CREATE_ITEM:
      return {
        ...state,
        loading: false,
        error: '',
        list: [...state.list.map(i => i._id === action.payload._id ? { ...action.payload } : i)]
      }
    case ItemsTypes.CREATE_CATEGORY:
      return {
        ...state,
        loading: false,
        error: '',
        list: [...state.list, action.payload]
      }
    case ItemsTypes.SET_INFO_ITEM:
      return {
        ...state,
        itemInfo: action.payload
      }
    default:
      return state
  }
}

export default itemsReducer
