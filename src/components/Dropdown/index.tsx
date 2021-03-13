import React, { useState } from 'react'
import { IDropdown } from '../../types/components/Dropdown'

import Input from '../UI/Input'

const Dropdown: React.FC<IDropdown> = (props) => {
  const [category, setCategory] = useState<string>('')

  return (
    <div className="dropdown">
      <Input
        onChange={setCategory}
        value={category}
        label="Category"
        placeholder="Enter a category"
      />
      <div className="dropdown-list">
        {props.categories.map((i) => (
          <div key={i._id}>{i.title}</div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
