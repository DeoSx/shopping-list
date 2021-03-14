import { SyntheticEvent } from 'react'
export interface IDropdown {
  categories: DropdownType[]
  onChange: (e: string) => void
  value: string
  onClick: (e: SyntheticEvent) => void
}

type DropdownType = {
  title: string
  _id: string
}