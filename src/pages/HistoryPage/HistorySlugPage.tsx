import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchOneList } from '../../store/history/history.actions'
import { rootState } from '../../types/store'
import { dateConverter } from '../../utils/converters'

interface IRouteParams {
  id: string
}

interface IHistorySlugPage extends RouteComponentProps<IRouteParams> {}

const HistorySlugPage: React.FC<IHistorySlugPage> = ({ match }) => {
  const dispatch = useDispatch()
  const oneHistory = useSelector(
    (state: rootState) => state.histories.oneHistory
  )

  useEffect(() => {
    dispatch(fetchOneList(match.params.id))
  }, [dispatch])

  return (
    <div className="container">
      <div className="container--left">
        <Link className="back" to="/history">
          <i className="fas fa-long-arrow-alt-left"></i>
          <span>back</span>
        </Link>
        <h1>{oneHistory?.name}</h1>
        <p className="date">
          <i className="fas fa-calendar-alt"></i>
          <span>{oneHistory && dateConverter(oneHistory.createdAt)}</span>
        </p>
      </div>
    </div>
  )
}

export default HistorySlugPage
