import { MenuItemsInterface } from 'interfaces/menu-items';

export interface MenuCategoriesInterface {
  id?: string;
  name: string;
  restaurant_id: string;
  menu_items?: MenuItemsInterface[];
}
