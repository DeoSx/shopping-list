import { Item } from '../types/item'

export const item: Item = {
  name: 'Avocado',
  note: `Nutrient-dense foods are those that provide 
				substantial amounts of vitamins, minerals and 
				other nutrients with relatively few calories. 
				One-third of a medium avocado (50 g) has 80 calories 
				and contributes nearly 20 vitamins and minerals, 
				making it a great nutrient-dense food choice. `,
  image:
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Avocados-3d84a3a.jpg?quality=90&resize=960,872',
  category: 'Fruit and vegetables',
  categoryId: 1,
  id: 1,
  quantity: 1
}

export const categories = [
  {
    title: 'Fruit and vegetables',
    id: 1
  },
  {
    title: 'Meat and Fish',
    id: 2
  },
  {
    title: 'Beverages',
    id: 3
  },
  {
    title: 'Pets',
    id: 4
  }
]
