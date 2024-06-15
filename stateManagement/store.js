import { create } from "zustand";
import { setItem, getItem, removeItem } from "./storage";

export const useStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  isGuard: null,
  setUser: (user) => {
    set({ user, isLoggedIn: !!user });
    setItem("user", JSON.stringify(user));
  },
  setIsLoggedIn: (status) => {
    set({ isLoggedIn: status });
  },
  setIsGuard: (status) => {
    set({ isGuard: status });
  },
  loadUser: () => {
    const userData = getItem("user");
    if (userData) {
      set({ user: JSON.parse(userData), isLoggedIn: true });
    }
  },
  logout: () => {
    set({ user: null, isLoggedIn: false, isGuard: null });
    removeItem("user");
  },
}));
