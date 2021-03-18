import React from 'react'
import { ListItemProps } from '../../types/components/ListItem'

import './ListItem.scss'

const ListItem: React.FC<ListItemProps> = ({ data, setInfo }) => {
  return (
    <div className="list-item" onClick={() => setInfo(data)}>
      <span>{data.name}</span>
      <i className="fas fa-plus"></i>
    </div>
  )
}

export default ListItem
