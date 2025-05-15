"use client";
import { auth } from "@/config/firebase";
import { useUserStore } from "@/zustand/userStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Settings() {
  const user = useUserStore((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/auth/signin");
    }
  }, []);
  return (
    <div className="flex flex-col defined-w rd-block">
      <div className="text-xl font-bold">{user?.username}</div>
      <div className="mt-2">{user?.email}</div>
      <div className="text-mutedClayRed font-semibold mt-5">Reset Password</div>
      <div className="text-mutedClayRed font-bold mt-3" onClick={() => auth.signOut()}>
        Sign Out
      </div>
    </div>
  );
}

export default Settings;
