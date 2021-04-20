import React from 'react'

import './Button.scss'

type ButtonViewsType = 'btn--primary' | 'btn--warning' | 'btn--light'
type ButtonSizeType = 'btn--small' | 'btn--medium' | 'btn--large'
interface IButtonProps {
  children: string
  type: ButtonViewsType
  onClick?: any
  size?: ButtonSizeType
  disabled?: boolean
}

const Button: React.FC<IButtonProps> = (props) => {
  const classes = `btn ${props.type} ${props.size}`

  return (
    <button
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
