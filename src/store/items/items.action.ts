import axios from '../../utils/axios'
import { ThunkType } from '../../types/store'
import { ItemsTypes, ItemToBack, ItemInfoType } from '../../types/store/items'

export const fetchItemsAction = (): ThunkType => {
	return async (dispatch) => {
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

export const createItemAction = (data: ItemToBack): ThunkType => {
	return async (dispatch) => {
		try {
			const res = await axios.put('/categories/item', data)
			if (res && res.data) dispatch({ type: ItemsTypes.CREATE_ITEM, payload: res.data })
		} catch (e) {
			dispatch({ type: ItemsTypes.FETCH_ERROR, payload: e.message })
			throw e
		}
	}
}

export const createCategoryAction = (title: string): ThunkType => {
	return async (dispatch) => {
		try {
			const res = await axios.post('/categories', { title })
			dispatch({ type: ItemsTypes.CREATE_CATEGORY, payload: res.data })
		} catch (e) {
			dispatch({ type: ItemsTypes.FETCH_ERROR, payload: e.message })
			throw e
		}
	}
}

export const setItemInfo = (data: ItemInfoType): ThunkType => (dispatch, getState) => {
	const list = getState().items.list
	const category = list.find(i => i._id === data.categoryId)
	const item = category?.items.find(i => i._id === data._id)
	dispatch({ type: ItemsTypes.SET_INFO_ITEM, payload: item })
}