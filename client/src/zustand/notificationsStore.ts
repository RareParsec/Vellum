import { create } from "zustand";
import { combine } from "zustand/middleware";

export type Notification = {
  message: string;
  viewed: boolean;
  otherData: any;
};

export const useNotificationsStore = create(
  combine(
    {
      notifications: [
        {
          message: "Welcome to the app!",
          viewed: false,
          otherData: {},
        },

        {
          message: "You have a new message.",
          viewed: false,
          otherData: {},
        },
        {
          message: "Your profile was updated.",
          viewed: true,
          otherData: {},
        },
      ] as Notification[],
    },

    (set, get) => ({
      setNotifications: (notifications: Notification[]) => {
        set({ notifications });
      },
      addNotification: (notification: Notification) => {
        set((state) => ({
          notifications: [...state.notifications, notification],
        }));
      },
    })
  )
);
