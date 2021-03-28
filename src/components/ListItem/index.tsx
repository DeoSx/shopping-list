import React, { SyntheticEvent } from 'react'
import { ListItemProps } from '../../types/components/ListItem'

import './ListItem.scss'

const ListItem: React.FC<ListItemProps> = ({ data, setInfo, addToList }) => {
  const addToListHandler = (event: SyntheticEvent) => {
    event.stopPropagation()
    const item = {
      name: data.name,
      categoryId: data.categoryId,
      quantity: data.quantity,
      _id: data._id,
    }
    addToList(item)
  }

  return (
    <div className="list-item" onClick={() => setInfo(data)}>
      <span>{data.name}</span>
      <i className="fas fa-plus"></i>
      <i className="fas fa-check" onClick={(e) => addToListHandler(e)}></i>
    </div>
  )
}

export default ListItem
