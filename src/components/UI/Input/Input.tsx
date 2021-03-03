import React, { useState } from 'react'
import { InputTypeProps } from '../../../types/components/Input'

import './Input.scss'

const Input: React.FC<InputTypeProps> = (props) => {
  const inputId = Date.now().toString()
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }
  const [focus, setFocus] = useState(false)

  return (
    <div className="form-group">
      <label className={`${focus && 'focused'}`} htmlFor={inputId}>
        {props.label}
      </label>
      <input
        placeholder={props.placeholder}
        id={inputId}
        onChange={(e) => onChangeHandler(e)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}

export default Input
