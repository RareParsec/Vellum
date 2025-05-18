import { create } from "zustand";
import { combine } from "zustand/middleware";
import customAxios from "../config/axios";
import { auth } from "@/config/firebase";

interface User {
  id: string;
  username: string;
  email: string;
  bio: string;
  timestamp: Date;
}

export const useUserStore = create(
  combine(
    {
      user: null as User | null,
    },
    (set) => ({
      setUser: (user: User) => set({ user }),
      clearUser: () => set({ user: null }),
      refreshUser: async () => {
        try {
          if (!auth.currentUser) return;
          const response = await customAxios.get("/auth/signIn", { headers: { ForceTokenRefresh: true } });
          const user = response?.data;
          if (user) {
            set({ user });
          } else {
            set({ user: null });
          }
          return user;
        } catch (error) {
          set({ user: null });
          return;
        }
      },
    })
  )
);
