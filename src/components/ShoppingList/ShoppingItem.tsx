import React from 'react'
import { useDispatch } from 'react-redux'
import {
  addSubAction,
  deleteItemAction,
} from '../../store/shoppingList/list.action'
import { ShoppingItem as ShoppingItemProps } from '../../types/store/shoppingList'

import './index.scss'

const ShoppingItem: React.FC<ShoppingItemProps> = (props) => {
  const dispatch = useDispatch()

  const quantityHandler = (operation: string) => {
    const item = {
      categoryId: props.categoryId,
      name: props.name,
      _id: props._id,
      quantity: props.quantity,
    }
    dispatch(addSubAction(operation, item))
  }

  const deleteItemHandler = (ids: { _id: string; categoryId: string }) => {
    dispatch(deleteItemAction(ids))
  }

  return (
    <div className="shopping-list__item">
      <p>{props.name}</p>
      <div className="item-actions">
        <div
          className="item-actions__basket"
          onClick={() =>
            // @ts-ignore
            deleteItemHandler({ _id: props._id, categoryId: props.categoryId })
          }
        >
          <i className="fas fa-trash"></i>
        </div>
        <div className="item-actions__counter">
          <i
            className="fas fa-minus"
            onClick={() => quantityHandler('minus')}
          ></i>
          <div className="counter">{props.quantity} psc</div>
          <i
            className="fas fa-plus"
            onClick={() => quantityHandler('plus')}
          ></i>
        </div>
      </div>
    </div>
  )
}

export default ShoppingItem
