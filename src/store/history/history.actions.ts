import { ThunkType } from '../../types/store'
import { HistoryTypes as Types, IHistoryItem } from '../../types/store/history'
import axios from '../../utils/axios'

export const fetchLists = (): ThunkType => {
  return async (dispatch) => {
    try {
      const res = await axios.get<IHistoryItem[]>('/shopping-list')
      dispatch({ type: Types.FETCH_HISTORY, payload: res.data })
    } catch (e) {
      throw e
    }
  }
}

export const fetchOneList = (id: string): ThunkType => {
  return async (dispatch) => {
    try {
      const res = await axios.get<IHistoryItem>(`/shopping-list/${id}`)
      dispatch({ type: Types.FETCH_ONE_HISTORY, payload: res.data })
    } catch (e) {
      throw e
    }
  }
}