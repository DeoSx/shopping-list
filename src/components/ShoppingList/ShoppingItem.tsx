import React from 'react'
import { ShoppingItem as ShoppingItemProps } from '../../types/store/shoppingList'

import './index.scss'

const ShoppingItem: React.FC<ShoppingItemProps> = (props) => {
  return (
    <div className="shopping-list__item">
      <p>{props.name}</p>
      <div className="item-actions">
        <div className="item-actions__basket">
          <i className="fas fa-trash"></i>
        </div>
        <div className="item-actions__counter">
          <i className="fas fa-minus"></i>
          <div className="counter">{props.quantity} psc</div>
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </div>
  )
}

export default ShoppingItem
