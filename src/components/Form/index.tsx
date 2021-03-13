import React, { useState, FormEvent } from 'react'
import { useSelector } from 'react-redux'

import Input from '../UI/Input'
import Button from '../UI/Button'
import Dropdown from '../Dropdown'
import './Form.scss'
import { rootState } from '../../types/store'

const Form: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [image, setImage] = useState<string>('')

  const categories = useSelector((state: rootState) => state.items.list)

  const submitHanler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <form onSubmit={submitHanler}>
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
      <Dropdown categories={categories} />
      <div className="form-actions">
        <Button type="btn--light" size="btn--small">
          cancel
        </Button>
        <Button type="btn--warning" size="btn--small">
          Save
        </Button>
      </div>
    </form>
  )
}

export default Form
