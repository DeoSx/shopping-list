type ButtonViewsType =
  | 'btn--primary'
  | 'btn--warning'
  | 'btn--light'

type ButtonSizeType = 'btn--small' | 'btn--medium' | 'btn--large'

export type ButtonProps = {
  children: string
  type: ButtonViewsType
  onClick?: () => void
  size?: ButtonSizeType
  disabled?: boolean
}
