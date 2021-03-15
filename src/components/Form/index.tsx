import React, { useState, SyntheticEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Input from '../UI/Input'
import Button from '../UI/Button'
import Dropdown from '../Dropdown'
import './Form.scss'
import { rootState } from '../../types/store'

import {
  createItemAction,
  createCategoryAction,
} from '../../store/items/items.action'

const Form: React.FC = () => {
  const [formView, setFormView] = useState<boolean>(true)
  const [name, setName] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [categoryTitle, setCategoryTitle] = useState<string>('')

  const dispatch = useDispatch()
  const categories = useSelector((state: rootState) => state.items.list)

  const filterCategoryHandler = (e: string): void => {
    setCategory(e)
  }
  const categoryClickHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement
    setCategory(target.innerText)
  }

  const clearFields = () => {
    setName('')
    setNote('')
    setImage('')
    setCategory('')
  }

  const submitHanler = () => {
    const data = {
      name,
      note,
      image,
      title: category,
      categoryId: categories.find((i) => i.title === category)?._id,
    }

    dispatch(createItemAction(data))
    clearFields()
  }

  const createCategory = () => {
    if (categoryTitle.length) {
      dispatch(createCategoryAction(categoryTitle))
    }
  }

  const formViewHandler = () => {
    setFormView(!formView)
  }

  const formItemRender = () => {
    return (
      <>
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
        <Dropdown
          categories={categories}
          onChange={filterCategoryHandler}
          onClick={categoryClickHandler}
          value={category}
        />
        <div className="form-actions">
          <Button type="btn--light" size="btn--medium" onClick={clearFields}>
            cancel
          </Button>
          <Button type="btn--warning" size="btn--medium" onClick={submitHanler}>
            Save
          </Button>
        </div>
      </>
    )
  }

  const formCategoryRender = () => {
    return (
      <>
        <Input
          onChange={setCategoryTitle}
          value={categoryTitle}
          label="Category of items"
          placeholder="Enter a name of category"
        />
        <Button type="btn--warning" onClick={createCategory}>
          Create category
        </Button>
      </>
    )
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-top">
        <h6>Add a new item</h6>
        <Button type="btn--primary" size="btn--small" onClick={formViewHandler}>
          {formView ? 'Add category' : 'Add item'}
        </Button>
      </div>
      {formView ? formItemRender() : formCategoryRender()}
    </form>
  )
}

export default Form
