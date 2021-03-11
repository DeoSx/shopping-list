import React from 'react'

import { ListTypeProps } from '../../types/components/List'
import './List.scss'

const List: React.FC<ListTypeProps> = (props) => {
  return (
    <div className="list">
      <h6>{props.title}</h6>
      <div className="list__items">{props.children}</div>
    </div>
  )
}

export default List
