import { create } from "zustand";
import { setItem, getItem, removeItem } from "./storage";

export const useStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  isGuard: false,
  intervalId: null,

  setUser: (user) => {
    const isLoggedIn = !!user;
    const isGuard = user?.user?.rol === "vigilante";
    set({
      user,
      isLoggedIn,
      isGuard,
    });
    setItem("user", JSON.stringify(user));
  },
  setIsLoggedIn: (status) => {
    set({ isLoggedIn: status });
  },
  setIsGuard: (status) => {
    set({ isGuard: status });
  },
  setIntervalId: (id) => {
    set({ intervalId: id });
  },

  clearInterval: () => {
    set((state) => {
      if (state.intervalId) {
        clearInterval(state.intervalId);
        return { intervalId: null };
      }
      return {};
    });
  },

  logout: () => {
    set((state) => {
      if (state.intervalId) {
        clearInterval(state.intervalId);
      }
      return {
        user: null,
        isLoggedIn: false,
        isGuard: false,
        intervalId: null,
      };
    });
    removeItem("user");
  },
}));
