import React, { SyntheticEvent } from 'react'
import { ItemFromBack } from '../../types/store/items'
import { ShoppingItem } from '../../types/store/shoppingList'

import './ListItem.scss'

interface IListItemProps {
  setInfo?: (data: ItemFromBack) => void | null
  data: ItemFromBack
  addToList?: (item: ShoppingItem) => void | null
  withQuantity: boolean
}

const ListItem: React.FC<IListItemProps> = ({
  data,
  setInfo,
  addToList,
  withQuantity,
}) => {
  const addToListHandler = (event: SyntheticEvent) => {
    event.stopPropagation()
    const item = {
      name: data.name,
      categoryId: data.categoryId,
      quantity: data.quantity,
      _id: data._id,
      image: data.image,
    }
    if (addToList) {
      addToList(item)
    }
  }

  const setInfoHandler = () => {
    if (setInfo) {
      setInfo(data)
    }
  }

  if (!withQuantity) {
    return (
      <div className="list-item" onClick={() => setInfoHandler()}>
        <span>{data.name}</span>
        <i className="fas fa-plus" onClick={(e) => addToListHandler(e)}></i>
      </div>
    )
  } else {
    return (
      <div className="list-item">
        <span>{data.name}</span>
        <span className="list-item__quantity">{data.quantity}</span>
      </div>
    )
  }
}

export default ListItem
