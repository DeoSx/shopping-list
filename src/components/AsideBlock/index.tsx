import React from 'react'
import { NavLink } from 'react-router-dom'

import './AsideBlock.scss'

const AsideBlock: React.FC = () => {
  return (
    <aside className="aside-block">
      <NavLink exact to="/">
        <i className="fas fa-th"></i>
      </NavLink>
      <NavLink to="/history">
        <i className="fas fa-redo-alt"></i>
      </NavLink>
      {/* <NavLink to="/">
        <i className="fas fa-chart-bar"></i>
      </NavLink> */}
    </aside>
  )
}

export default AsideBlock
