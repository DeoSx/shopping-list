import React from 'react'
import { ButtonProps } from '../../../types/components/Button'

import './Button.scss'

const Button: React.FC<ButtonProps> = (props) => {
  const classes = `btn ${props.type}`

  return <button className={classes}>{props.children}</button>
}

export default Button
