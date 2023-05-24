import { OrderItemsInterface } from 'interfaces/order-items';

export interface OrdersInterface {
  id?: string;
  customer_id: string;
  restaurant_id: string;
  order_time: Date;
  special_requests?: string;
  order_items?: OrderItemsInterface[];
}
