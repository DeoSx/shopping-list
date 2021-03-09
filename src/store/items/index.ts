import { IItems, Items } from '../../types/store/items'

const initialState: IItems = {
  items: [],
  loading: false,
  error: ''
}

const itemsReducer = (state = initialState, action: any): IItems => {
  switch (action.type) {
    case Items.FETCH:
      return { ...state, loading: true }
    case Items.FETCH_SUCCESS:
      return {
        ...state,
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
