import axios from '../../utils/axios'
import { Dispatch } from 'redux'
import { ItemsTypes, ItemToBack } from '../../types/store/items'

export const fetchItemsAction = () => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: ItemsTypes.FETCH })
			const res = await axios.get('/categories')
			if (res && res.data) dispatch({ type: ItemsTypes.FETCH_SUCCESS, payload: res.data })
		} catch (e) {
			dispatch({ type: ItemsTypes.FETCH_ERROR, payload: e.message })
			throw e
		}
	}
}

export const createItemAction = (data: ItemToBack) => {
	return async (dispatch: Dispatch) => {
		try {
			const res = await axios.put('/categories/item', data)
			if (res && res.data) dispatch({ type: ItemsTypes.CREATE_ITEM, payload: res.data })
		} catch (e) {
			dispatch({ type: ItemsTypes.FETCH_ERROR, payload: e.message })
			throw e
		}
	}
}

export const createCategoryAction = (title: string) => {
	return async (dispatch: Dispatch) => {
		try {
			const res = await axios.post('/categories', { title })
			dispatch({ type: ItemsTypes.CREATE_CATEGORY, payload: res.data })
		} catch (e) {
			dispatch({ type: ItemsTypes.FETCH_ERROR, payload: e.message })
			throw e
		}
	}
}