import React from 'react'

import './index.scss'

const ShoppingItem: React.FC = () => {
  return (
    <div className="shopping-list__item">
      <p>Item</p>
      <div className="item-actions">
        <div className="item-actions__basket">
          <i className="fas fa-trash"></i>
        </div>
        <div className="item-actions__counter">
          <i className="fas fa-minus"></i>
          <div className="counter">1 psc</div>
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </div>
  )
}

export default ShoppingItem
