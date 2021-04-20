import React from 'react'

import Input from '../UI/Input'
import './index.scss'

type DropdownType = {
  title: string
  _id: string
}
interface IDropdown {
  categories: DropdownType[]
  onChange: (e: string) => void
  value: string
  onClick: (e: React.SyntheticEvent) => void
}

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
