import React, { SyntheticEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingItem } from '../../types/store/shoppingList'
import Button from '../UI/Button'

import './index.scss'
interface IInfoBarProps {
  image: string
  name: string
  note?: string
  _id: string
  categoryId?: string
  quantity?: number
  clickHandler: () => void
  addToList: (item: ShoppingItem) => void
}

const InfoBar: React.FC<IInfoBarProps> = (props) => {
  const addToListHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    const item = {
      name: props.name,
      categoryId: props.categoryId,
      quantity: props.quantity,
      _id: props._id
    }
    // @ts-ignore
    props.addToList(item)
  }

  return (
    <div className="infobar">
      <Link to="/" onClick={() => props.clickHandler()}>
        back
      </Link>
      <img src={props.image} alt="" />
      <div className="infobar__item">
        <span>name</span>
        <p>{props.name}</p>
      </div>
      <div className="infobar__item">
        <span>note</span>
        <p>{props.note}</p>
      </div>
      <div className="infobar__actions">
        <Button type="btn--warning" onClick={addToListHandler}>
          Add to list
        </Button>
      </div>
    </div>
  )
}

export default InfoBar
