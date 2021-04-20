import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'
interface IInfoBarProps {
  image: string
  name: string
  note?: string
  _id: string
  clickHandler: () => void
}

const InfoBar: React.FC<IInfoBarProps> = (props) => {
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
