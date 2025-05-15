import { create } from "zustand";
import { combine } from "zustand/middleware";

export type Notification = {
  id: string;
  user_id: string;
  post_id?: string;
  comment_id?: string;
  message: string;
  viewed: boolean;
  timestamp: Date;
};

export const useNotificationsStore = create(
  combine(
    {
      notifications: [] as Notification[],
    },

    (set, get) => ({
      setNotifications: (notifications: Notification[]) => {
        set({ notifications });
      },
      addNotification: (notification: Notification) => {
        set((state) => ({
          notifications: [notification, ...state.notifications],
        }));
      },
      deleteNotifications: () => {
        set({ notifications: [] });
      },
      deleteNotification: (id: string) => {
        set((state) => ({
          notifications: state.notifications.filter((notif) => notif.id !== id),
        }));
      },
      markAsViewed: (id: string) => {
        set((state) => ({
          notifications: state.notifications.map((notif) => (notif.id === id ? { ...notif, viewed: true } : notif)),
        }));
      },
    })
  )
);
