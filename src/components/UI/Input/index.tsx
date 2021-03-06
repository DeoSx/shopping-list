import React, { useState } from 'react'
import { InputTypeProps } from '../../../types/components/Input'

import './Input.scss'

const Input: React.FC<InputTypeProps> = (props) => {
  const inputId = Date.now().toString()
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.onChange(e.target.value)
  }
  const [focus, setFocus] = useState(false)

  return (
    <div className="form-group">
      <label className={`${focus && 'focused'}`} htmlFor={inputId}>
        {props.label}
      </label>
      {!props.isTextarea ? (
        <input
          className="form-item"
          placeholder={props.placeholder}
          id={inputId}
          onChange={(e) => onChangeHandler(e)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={props.value}
        />
      ) : (
        <textarea
          className="form-item"
          placeholder={props.placeholder}
          id={inputId}
          onChange={(e) => onChangeHandler(e)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={props.value}
        />
      )}
    </div>
  )
}

export default Input
