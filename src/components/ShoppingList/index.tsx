import React, { useState } from 'react'

import Button from '../UI/Button'
import Input from '../UI/Input'
import ShoppingItem from './ShoppingItem'
import './index.scss'
import { ShoppingListItem } from '../../types/store/shoppingList'

interface IShoppingListComponent {
  toAddItem: () => void
  list: ShoppingListItem[]
}

const ShoppingList: React.FC<IShoppingListComponent> = (props) => {
  const [title, setTitle] = useState<string>('')

  const renderActions = () => (
    <div className="shopping-list__actions">
      <Input
        onChange={setTitle}
        placeholder="Enter a name of SL"
        value={title}
      />
      <Button type="btn--primary" size="btn--large">
        Save
      </Button>
    </div>
  )

  return (
    <div className="shopping-list">
      <div className="shopping-list__banner">
        <p>Didn't find what you need?</p>
        <Button type="btn--light" size="btn--small" onClick={props.toAddItem}>
          Add item
        </Button>
      </div>
      <h4>Shopping list</h4>
      <div className="shopping-list__container">
        {props.list.length ? (
          props.list.map((list) => (
            <div key={list._id} className="shopping-list__container--item">
              <p className="item-title">{list.title}</p>
              {list.items.map((item) => (
                <ShoppingItem key={item._id} {...item} />
              ))}
            </div>
          ))
        ) : (
          <h6>No items</h6>
        )}
      </div>
      {props.list.length ? renderActions() : null}
    </div>
  )
}

export default ShoppingList
