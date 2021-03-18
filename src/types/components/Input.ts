import { Dispatch, SetStateAction } from 'react'

export type InputTypeProps = {
  onChange: Dispatch<SetStateAction<string>> | CallbackInput
  placeholder: string
  label: string
  value: string
  isTextarea?: boolean
}

type CallbackInput = (e: string) => void