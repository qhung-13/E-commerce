import api from "./api";

export const productService = {
  getAll: (params?: { category?: string; search?: string }) =>
    api.get("/products", { params }),
  getById: (id: string) => api.get(`/products/${id}`),
};
