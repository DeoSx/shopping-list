import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { rootState } from '../../types/store'
import { IHistoryItem } from '../../types/store/history'
import { fetchLists } from '../../store/history/history.actions'

import HistoryItem from '../../components/HistoryItem'

interface IHistoryPage extends RouteComponentProps {}

const HistoryPage: React.FC<IHistoryPage> = ({ match }) => {
  const dispatch = useDispatch()
  const histories = useSelector((state: rootState) => state.histories.list)

  useEffect(() => {
    dispatch(fetchLists())
  }, [])

  return (
    <div className="container">
      <div className="container--left">
        <h1>Shopping history</h1>

        {histories.map((h: IHistoryItem) => (
          <HistoryItem key={h._id} route={`${match.url}/${h._id}`} data={h} />
        ))}
      </div>
    </div>
  )
}

export default HistoryPage
