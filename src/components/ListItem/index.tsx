import React, { SyntheticEvent } from 'react'
import { ItemFromBack } from '../../types/store/items'
import { ShoppingItem } from '../../types/store/shoppingList'

import './ListItem.scss'

interface IListItemProps {
  setInfo: (data: ItemFromBack) => void
  data: ItemFromBack
  addToList: (item: ShoppingItem) => void
}

const ListItem: React.FC<IListItemProps> = ({ data, setInfo, addToList }) => {
  const addToListHandler = (event: SyntheticEvent) => {
    event.stopPropagation()
    const item = {
      name: data.name,
      categoryId: data.categoryId,
      quantity: data.quantity,
      _id: data._id,
      image: data.image
    }
    addToList(item)
  }

  return (
    <div className="list-item" onClick={() => setInfo(data)}>
      <span>{data.name}</span>
      <i className="fas fa-plus" onClick={(e) => addToListHandler(e)}></i>
    </div>
  )
}

export default ListItem
