"use client";
import customAxios from "@/config/axios";
import { auth } from "@/config/firebase";
import { useNotificationsStore } from "@/zustand/notificationsStore";
import { useSocketStore } from "@/zustand/socketStore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function SocketInit() {
  const connect = useSocketStore((state) => state.connect);
  const disconnect = useSocketStore((state) => state.disconnect);

  const setNotifications = useNotificationsStore((state) => state.setNotifications);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return disconnect();

      const token = await user?.getIdToken();
      if (!token) return disconnect();

      customAxios
        .get("/notifications")
        .then((res) => {
          if (!res.data) return;
          setNotifications(res.data);
        })
        .catch(() => {});
      connect(token);
    });

    return unsub;
  }, []);

  return null;
}

export default SocketInit;
