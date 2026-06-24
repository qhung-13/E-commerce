export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  qty: number;
  image: string;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipping"
  | "delivered"
  | "cancelled";

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export const orders: Order[] = [];
