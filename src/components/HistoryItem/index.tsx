import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingListItem } from '../../types/store/shoppingList'
import { dateConverter } from '../../utils/converters'

import './HistoryItem.scss'

interface IHistoryItem {
  route: string
  data: {
    createdAt: string
    list: ShoppingListItem[]
    name: string
    _id: string
  }
}

const HistoryItem: React.FC<IHistoryItem> = ({ route, data }) => {
  return (
    <Link to={`${route}`} className="history-item">
      <div className="history-item__name">{data.name}</div>
      <div className="history-item__date">
        <i className="fas fa-calendar-alt"></i>
        <span>{dateConverter(data.createdAt)}</span>
      </div>
    </Link>
  )
}

export default HistoryItem
