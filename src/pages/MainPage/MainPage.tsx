import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchItemsAction } from '../../store/items/items.action'

import './MainPage.scss'

const MainPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItemsAction())
  }, [])

  return (
    <div className="main-page">
      <h1>
        <span>Shoppingify</span> allows you take your shopping list wherever you
        go
      </h1>
    </div>
  )
}

export default MainPage
