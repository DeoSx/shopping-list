import React from 'react'

import './List.scss'

interface IListTypeProps {
  title: string
}

const List: React.FC<IListTypeProps> = (props) => {
  return (
    <div className="list">
      <h6>{props.title}</h6>
      <div className="list__items">{props.children}</div>
    </div>
  )
}

export default List
