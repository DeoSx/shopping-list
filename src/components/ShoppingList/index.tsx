import React from 'react'

import Button from '../UI/Button'
import ShoppingItem from './ShoppingItem'
import './index.scss'

const ShoppingList: React.FC = () => {
  return (
    <div className="shopping-list">
      <div className="shopping-list__banner">
        <p>Didn't find what you need?</p>
        <Button type="btn--warning">Add item</Button>
      </div>
      <h4>Shopping list</h4>
      <div className="shopping-list__container">
        <div className="shopping-list__container--item">
          <p className="item-title">Fruits</p>
          <ShoppingItem />
        </div>
      </div>
    </div>
  )
}

export default ShoppingList
