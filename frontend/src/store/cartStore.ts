import { create } from "zustand";
import type { Product } from "../data/products";

interface CartItem extends Product {
  qty: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (product) => {
    const existing = get().items.find((i) => i.id === product.id);
    if (existing) {
      set((state: CartStore) => ({
        items: state.items.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        ),
      }));
    } else {
      set((state: CartStore) => ({
        items: [...state.items, { ...product, qty: 1 }],
      }));
    }
  },

  removeItem: (id) =>
    set((state: CartStore) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  updateQty: (id, qty) => {
    if (qty < 1) return get().removeItem(id);
    set((state: CartStore) => ({
      items: state.items.map((i) => (i.id === id ? { ...i, qty } : i)),
    }));
  },

  clearCart: () => set({ items: [] }),

  toggleCart: () => set((state: CartStore) => ({ isOpen: !state.isOpen })),
}));
