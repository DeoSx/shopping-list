import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../UI/Button'
import Input from '../UI/Input'
import ShoppingItem from './ShoppingItem'
import './index.scss'
import { IShoppingList, ShoppingListItem } from '../../types/store/shoppingList'
import { createShoppingList } from '../../store/shoppingList/list.action'

interface IShoppingListComponent {
  toAddItem: () => void
  list: ShoppingListItem[]
}

const ShoppingList: React.FC<IShoppingListComponent> = (props) => {
  const [name, setName] = useState<string>('')
  const dispatch = useDispatch()

  const submitHandler = async () => {
    console.log(name)
    const data: IShoppingList = {
      name,
      list: props.list,
    }
    dispatch(createShoppingList(data))
  }

  const renderActions = () => (
    <div className="shopping-list__actions">
      <Input onChange={setName} placeholder="Enter a name of SL" value={name} />
      <Button
        type="btn--primary"
        size="btn--large"
        onClick={submitHandler}
      >
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
