import React from 'react'
import { ListItemProps } from '../../types/components/ListItem'

import './ListItem.scss'

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <div className="list-item">
      <span>{props.title}</span>
      <i className="fas fa-plus"></i>
    </div>
  )
}

export default ListItem
