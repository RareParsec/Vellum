import { io, Socket } from "socket.io-client";
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { useNotificationsStore } from "./notificationsStore";

export const useSocketStore = create(
  combine(
    {
      socket: null as Socket | null,
    },
    (set, get) => ({
      connect: (token: string) => {
        const previousSocket = get().socket;
        if (previousSocket) return;

        const socket = io(process.env.NEXT_PUBLIC_API_URL, { auth: { token }, transports: ["websocket"] });

        socket.on("new.notification", (notif) => {
          console.log("New notification received:", notif);
          useNotificationsStore.getState().addNotification(notif);
        });

        set({ socket });
      },
      disconnect: () => {
        set({ socket: null });
      },
    })
  )
);
