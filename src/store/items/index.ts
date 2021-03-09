import { IItems, Items } from '../../types/store/items'
import { ItemsActions } from '../../types/store/items'

const initialState: IItems = {
  items: [],
  loading: false,
  error: ''
}

const itemsReducer = (state = initialState, action: ItemsActions): IItems => {
  switch (action.type) {
    case Items.FETCH:
      return { ...state, loading: true }
    case Items.FETCH_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        loading: false
      }
    case Items.FETCH_ERROR:
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
