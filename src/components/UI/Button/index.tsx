import React from 'react'
import { ButtonProps } from '../../../types/components/Button'

import './Button.scss'

const Button: React.FC<ButtonProps> = (props) => {
  const classes = `btn ${props.type} ${props.size}`

  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
