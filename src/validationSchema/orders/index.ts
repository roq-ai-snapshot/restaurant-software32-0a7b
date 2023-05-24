import * as yup from 'yup';
import { orderItemsValidationSchema } from 'validationSchema/order-items';

export const ordersValidationSchema = yup.object().shape({
  order_time: yup.date().required(),
  special_requests: yup.string(),
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
  order_items: yup.array().of(orderItemsValidationSchema),
});
