import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { fetchOneList } from '../../store/history/history.actions'

interface IRouteParams {
  id: string
}

interface IHistorySlugPage extends RouteComponentProps<IRouteParams> {}

const HistorySlugPage: React.FC<IHistorySlugPage> = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOneList(match.params.id))
  }, [dispatch])

  return <div className="container">Hello</div>
}

export default HistorySlugPage
