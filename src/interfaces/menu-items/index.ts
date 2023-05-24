import { OrderItemsInterface } from 'interfaces/order-items';

export interface MenuItemsInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  category_id: string;
  order_items?: OrderItemsInterface[];
}
