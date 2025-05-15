"use client";
import { auth } from "@/config/firebase";
import { useUserStore } from "@/zustand/userStore";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";

function AppReady({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [ready, setReady] = React.useState(false);
  const refreshUser = useUserStore((state) => state.refreshUser);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setReady(true);
      refreshUser();
    });

    return unsub;
  }, []);

  if (!ready) return <div>Loading</div>;

  return <>{children}</>;
}

export default AppReady;
