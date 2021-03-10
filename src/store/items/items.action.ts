import axios from '../../utils/axios'
import { Dispatch } from 'redux'
import { ItemsTypes } from '../../types/store/items'

export const fetchItemsAction = () => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: ItemsTypes.FETCH })
			const res = await axios.get('/categories')
			console.log(res.data)
			if (res && res.data) dispatch({ type: ItemsTypes.FETCH_SUCCESS, payload: res.data })
		} catch (e) {
			dispatch({ type: ItemsTypes.FETCH_ERROR, payload: e.message })
			throw e
		}
	}
}