import { ThunkType } from '../../types/store'
import { HistoryTypes as Types } from '../../types/store/history'
import axios from '../../utils/axios'

export const fetchLists = (): ThunkType => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/shopping-list')
      dispatch({ type: Types.FETCH_HISTORY, payload: res.data })
      console.log(res.data)
    } catch (e) {
      throw e
    }
  }
}

export const fetchOneList = (id: string): ThunkType => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/shopping-list/${id}`)
      console.log(res)
    } catch (e) {
      throw e
    }
  }
}