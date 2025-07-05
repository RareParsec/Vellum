"use client";
import { auth } from "@/config/firebase";
import { useUserStore } from "@/zustand/userStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Settings() {
  const user = useUserStore((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/auth");
    }
  }, []);
  return (
    <div className="flex flex-col defined-w rd-block">
      <div>
        <div className="text-2xl font-bold pt-5">{user?.username}</div>
      </div>
      <div className="mt-3">{user?.email}</div>
      <div className="mt-2 text-xs">joined: {user?.timestamp.toString().split("T")[0]}</div>

      <div className="w-full flex flex-row justify-center">
        <div
          className="text-mutedClayRed bg-linen shadow-sm font-bold mt-9 cursor-pointer p-2 px-4 hover:bg-toastedLinen rd-block w-fit"
          onClick={() => {
            auth.signOut();
            router.push("/auth");
          }}
        >
          Log out
        </div>
      </div>
    </div>
  );
}

export default Settings;
