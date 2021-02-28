import React from 'react'
import ShoppingItem from '../../components/UI/ShoppingItem'
import Button from '../../components/UI/Button'

import './MainPage.scss'

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <h1>
        <span>Shoppingify</span> allows you take your shopping list wherever you
        go
      </h1>
      <Button />
      <ShoppingItem />
    </div>
  )
}

export default MainPage
