import { FeedbackInterface } from 'interfaces/feedback';
import { MenuCategoriesInterface } from 'interfaces/menu-categories';
import { OrdersInterface } from 'interfaces/orders';
import { ReservationsInterface } from 'interfaces/reservations';
import { StaffMembersInterface } from 'interfaces/staff-members';

export interface RestaurantsInterface {
  id?: string;
  name: string;
  location: string;
  contact_information: string;
  operating_hours: string;
  owner_id: string;
  feedback?: FeedbackInterface[];
  menu_categories?: MenuCategoriesInterface[];
  orders?: OrdersInterface[];
  reservations?: ReservationsInterface[];
  staff_members?: StaffMembersInterface[];
}
