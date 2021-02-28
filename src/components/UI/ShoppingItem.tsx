import React from 'react'

type ShoppingItemType = {
  title?: string
  clickHandler?: (e: React.MouseEvent) => void
  cartHandler?: (e: React.MouseEvent) => void
}

const ShoppingItem: React.FC<ShoppingItemType> = (props) => {
  return (
    <div onClick={props.clickHandler}>
      <p>{props.title}</p>
      <span></span>
    </div>
  )
}

export default ShoppingItem
