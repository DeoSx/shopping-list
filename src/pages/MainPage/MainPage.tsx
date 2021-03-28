import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Form from '../../components/Form'
import InfoBar from '../../components/InfoBar'
import ShoppingList from '../../components/ShoppingList'

import {
  fetchItemsAction,
  setItemInfo,
  clearItemInfo,
} from '../../store/items/items.action'

import { AddToCardAction } from '../../store/shoppingList/list.action'

import { ItemFromBack } from '../../types/store/items'
import { ShoppingItem } from '../../types/store/shoppingList'
import { rootState } from '../../types/store'

import './MainPage.scss'

const MainPage: React.FC = () => {
  const [formState, setFormState] = useState<boolean>(false)

  const dispatch = useDispatch()
  const items = useSelector((state: rootState) => state.items)
  const shoppingList = useSelector((state: rootState) => state.shoppingList)

  const setInfoHandler = (item: ItemFromBack) => {
    dispatch(setItemInfo(item))
    setFormState(false)
  }

  const clearItemInfoHandler = () => {
    dispatch(clearItemInfo())
    setFormState(false)
  }

  const addToList = (item: ShoppingItem) => {
    dispatch(AddToCardAction(item))
  }

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
          {items.list.map((item) => (
            <List key={item._id} title={item.title}>
              {item.items.map((i) => (
                <ListItem
                  key={i._id}
                  data={i}
                  setInfo={setInfoHandler}
                  addToList={addToList}
                />
              ))}
            </List>
          ))}
        </div>
      </div>
      <div className="main-page--right">
        {formState ? (
          <Form hideFormHandler={() => setFormState(false)} />
        ) : items.itemInfo ? (
          <InfoBar clickHandler={clearItemInfoHandler} {...items.itemInfo} />
        ) : (
          <ShoppingList
            list={shoppingList.list}
            toAddItem={() => setFormState(true)}
          />
        )}
      </div>
    </div>
  )
}

export default MainPage
