type ButtonViewsType =
  | 'btn--primary'
  | 'btn--warning'
  | 'btn--light'
  | 'btn--small'

export type ButtonProps = {
  children: string
  type: ButtonViewsType
}
