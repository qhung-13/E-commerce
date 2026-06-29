import api from "./api";

export interface CreateOrderData {
  items: {
    productId: string;
    name: string;
    price: number;
    qty: number;
    image: string;
  }[];
  address: string;
}

export const orderService = {
  create: (data: CreateOrderData) => api.post("/orders", data),
  getMyOrders: () => api.get("/orders/my"),
  getById: (id: string) => api.get(`/orders/${id}`),
};
