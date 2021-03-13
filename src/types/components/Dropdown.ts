export interface IDropdown {
  categories: DropdownType[]
}

type DropdownType = {
  title: string
  _id: string
}