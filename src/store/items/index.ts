import { IItems, ItemsTypes } from '../../types/store/items'
import { ItemsActions } from '../../types/store/items'

const initialState: IItems = {
  items: [],
  loading: false,
  error: ''
}

const itemsReducer = (state = initialState, action: ItemsActions): IItems => {
  switch (action.type) {
    case ItemsTypes.FETCH:
      return { ...state, loading: true }
    case ItemsTypes.FETCH_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        loading: false
      }
    case ItemsTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: ''
      }
    default:
      return state
  }
}

export default itemsReducer
