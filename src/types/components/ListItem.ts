import { ItemFromBack } from '../store/items'
import { ShoppingItem } from '../store/shoppingList'
export interface ListItemProps {
  setInfo: (data: ItemFromBack) => void
  data: ItemFromBack
  addToList: (item: ShoppingItem) => void
}
