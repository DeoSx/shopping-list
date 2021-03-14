import React from 'react'
import { IDropdown } from '../../types/components/Dropdown'

import Input from '../UI/Input'
import './index.scss'

const Dropdown: React.FC<IDropdown> = (props) => {
  return (
    <div className="dropdown">
      <Input
        onChange={props.onChange}
        value={props.value}
        label="Category"
        placeholder="Enter a category"
      />
      <div className="dropdown-list">
        {props.categories.map((i) => (
          <div
            className="dropdown-list__item"
            key={i._id}
            onClick={(e) => props.onClick(e)}
          >
            {i.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
