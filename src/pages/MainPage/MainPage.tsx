import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Form from '../../components/Form'

import { fetchItemsAction } from '../../store/items/items.action'
import { rootState } from '../../types/store'

import './MainPage.scss'

const MainPage: React.FC = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: rootState) => state.items.list)

  useEffect(() => {
    dispatch(fetchItemsAction())
  }, [dispatch])

  return (
    <div className="main-page">
      <div className="main-page--left">
        <h1>
          <span>Shoppingify</span> allows you take your shopping list wherever
          you go
        </h1>
        <div className="list-item-container">
          {items.map((item) => (
            <List key={item._id} title={item.title}>
              {item.items.map((i) => (
                <ListItem key={i._id} title={i.name} />
              ))}
            </List>
          ))}
        </div>
      </div>
      <div className="main-page--right">
        <Form />
      </div>
    </div>
  )
}

export default MainPage
