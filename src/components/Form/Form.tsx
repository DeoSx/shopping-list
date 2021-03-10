import React, { useState } from 'react'

import Input from '../UI/Input/Input'
import './Form.scss'

const Form: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [image, setImage] = useState<string>('')

  return (
    <form>
      <h6>Add a new item</h6>
      <Input
        onChange={setName}
        value={name}
        placeholder="Enter a name"
        label="Name"
      />
      <Input
        onChange={setNote}
        value={note}
        placeholder="Enter a note"
        label="Note (optional)"
        isTextarea={true}
      />
      <Input
        onChange={setImage}
        value={image}
        placeholder="Enter a url"
        label="Image"
      />
    </form>
  )
}

export default Form
