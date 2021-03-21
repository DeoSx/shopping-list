import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'
import { InfoBarProps } from '../../types/components/InfoBar'

const InfoBar: React.FC<InfoBarProps> = (props) => {

  return (
    <div className="infobar">
      <Link to="/" onClick={() => props.clickHandler()}>
        back
      </Link>
      <img src={props.image} alt="" />
      <div className="infobar__item">
        <span>name</span>
        <p>{props.name}</p>
      </div>
      <div className="infobar__item">
        <span>note</span>
        <p>{props.note}</p>
      </div>
    </div>
  )
}

export default InfoBar
