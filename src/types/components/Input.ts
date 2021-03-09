import { Dispatch, SetStateAction } from 'react'

export type InputTypeProps = {
  onChange: Dispatch<SetStateAction<string>>
  placeholder: string
  label: string
  value: string
}
