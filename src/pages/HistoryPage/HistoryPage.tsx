import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchLists } from '../../store/shoppingList/list.action'

const HistoryPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLists())
  }, [])

  return (
    <div className="container">
      <div className="container--left">
        <h1>Shopping history</h1>
      </div>
    </div>
  )
}

export default HistoryPage
