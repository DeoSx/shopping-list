import { HistoryActions, IHistoryState, HistoryTypes as Types } from "../../types/store/history";

const initialState: IHistoryState = {
  list: [],
  isLoading: false,
  error: ''
}

const historyReducer = (state = initialState, action: HistoryActions): IHistoryState => {
  switch (action.type) {
    case Types.FETCH_HISTORY:
      return {
        ...state,
        list: action.payload
      }
    default:
      return { ...state }
  }
}

export default historyReducer