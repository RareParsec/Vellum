import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useNotificationsStore = create(
  combine(
    {
      notifications: [] as NotificationType[],
    },

    (set, get) => ({
      setNotifications: (notifications: NotificationType[]) => {
        set({ notifications });
      },
      addNotification: (notification: NotificationType) => {
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
