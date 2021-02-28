import React from 'react'
import { Link } from 'react-router-dom'

import './AsideBlock.scss'

const AsideBlock: React.FC = () => {
  return (
    <aside className="aside-block">
      <Link to="/">
        <i className="fas fa-th"></i>
      </Link>
      <Link to="history">
        <i className="fas fa-redo-alt"></i>
      </Link>
      <Link to="/">
        <i className="fas fa-chart-bar"></i>
      </Link>
    </aside>
  )
}

export default AsideBlock
