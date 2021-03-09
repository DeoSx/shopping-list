import axios from '../../utils/axios'
import { Dispatch } from 'redux'
import { Items } from '../../types/store/items'

export const fetchItemsAction = () => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: Items.FETCH })
			const res = await axios.get('/categories')
			console.log(res.data)
			if (res && res.data) dispatch({ type: Items.FETCH_SUCCESS, payload: res.data })
		} catch (e) {
			dispatch({ type: Items.FETCH_ERROR, payload: e.message })
			throw e
		}
	}
}