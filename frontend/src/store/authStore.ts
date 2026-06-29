import { create } from "zustand";
import {
  authService,
  type LoginData,
  type RegisterData,
} from "../services/auth.service";

interface User {
  id: string;
  email: string;
  name: string;
  role: "customer" | "admin";
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: localStorage.getItem("token"),
  isLoading: false,
  error: null,

  login: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const res = await authService.login(data);
      localStorage.setItem("token", res.data.token);
      set({ user: res.data.user, token: res.data.token, isLoading: false });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Đăng nhập thất bại";
      set({ error: message, isLoading: false });
    }
  },

  register: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const res = await authService.register(data);
      localStorage.setItem("token", res.data.token);
      set({ user: res.data.user, token: res.data.token, isLoading: false });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Đăng ký thất bại";
      set({ error: message, isLoading: false });
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },

  clearError: () => set({ error: null }),
}));
