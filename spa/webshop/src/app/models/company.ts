import { Item } from './item';

export interface Company {
  id: string;
  name: string;
  externalId: string;
  surname: string;
  address: string;
  phone: string;
  email: string;
  city: string;
  cityCode: number;
  street: string;
  deliveryType: DeliveryType;
  items: Item[];
}

export interface DeliveryType {
  delivery: string;
  pickUp: string;
}
