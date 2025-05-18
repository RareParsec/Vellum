"use client";

import SelectUsername from "@/components/modals/SelectUsername";
// import SelectUsername from "@/components/modals/usernameSelection";
import customAxios from "@/config/axios";
import { auth, provider } from "@/config/firebase";
import errorHandler from "@/utils/errorHandler";
import { useUserStore } from "@/zustand/userStore";
import { GoogleLogo } from "@phosphor-icons/react/dist/icons/GoogleLogo";
import { signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ContinueWithGoogle() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const refreshUser = useUserStore((state) => state.refreshUser);

  const handleGoogleAuth = async () => {
    const toastId = toast.loading("Loading...");

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      toast.error("Failed...", { id: toastId });
      return;
    }

    try {
      const res = await customAxios.get("/auth/continueWithGoogle", { headers: { ForceTokenRefresh: true } });

      if (res.data == "user-not-yet-created") {
        toast.dismiss(toastId);
        setIsModalOpen(true);
        return;
      }

      toast.success("Successfully signed in", { id: toastId });
      // setUser(res.data.user);
      refreshUser();
      router.replace("/");
    } catch (error: any) {
      signOut(auth);
      errorHandler(error);
    }
  };

  useEffect(() => {
    const asyncUseEFfect = async () => {
      if (auth.currentUser) {
        await refreshUser();
        const freshUser = useUserStore.getState().user;
        if (!freshUser) setIsModalOpen(true);
      }
    };
    asyncUseEFfect();
  }, []);

  return (
    <div>
      <SelectUsername isOpen={isModalOpen} />
      <div className="flex justify-center font-bold text-2xl mt-50">Sign in!</div>
      <div className="flex flex-row justify-center mt-8">
        <div className="flex items-center text-xl font-medium gap-3 rd-block hover:bg-antiqueWhite" onClick={handleGoogleAuth}>
          <GoogleLogo size={32} color="var(--color-beaver)" />
          continue with google
        </div>
      </div>
    </div>
  );
}

export default ContinueWithGoogle;
