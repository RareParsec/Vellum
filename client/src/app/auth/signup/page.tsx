"use client";

import SelectUsername from "@/components/modals/UsernameSelection";
import customAxios from "@/config/axios";
import { auth, provider } from "@/config/firebase";
import { useUserStore } from "@/zustand/userStore";
import { GoogleLogo } from "@phosphor-icons/react";
import { AxiosError } from "axios";
import { signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function SignUp() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const setUser = useUserStore((state) => state.setUser);

  const handleGoogleAuth = async () => {
    const toastId = toast.loading("Loading...");

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      toast.error("Unable to continue with Google", { id: toastId });
      console.error("Google sign-in error:", error);
      return;
    }

    try {
      const res = await customAxios.get("/auth/continueWithGoogle", { headers: { ForceTokenRefresh: true } });
      const user = res?.data?.user;
      setUser(user);

      toast.success("Successfully signed in", { id: toastId });
    } catch (error: any) {
      signOut(auth);
      toast.error(error.response?.data?.message || "Internal server error", { id: toastId });
      console.error("User creation error:", error);
    }
  };

  return (
    <div>
      <SelectUsername isOpen={isModalOpen} />
      <div className="flex justify-center font-bold text-2xl mt-40">SignUp</div>
      <div className="flex flex-row justify-center mt-4">
        <div className="flex items-center text-xl font-medium gap-3 rd-block hover:bg-antiqueWhite" onClick={handleGoogleAuth}>
          <GoogleLogo size={32} color="var(--color-beaver)" />
          continue with google
        </div>
      </div>
    </div>
  );
}

export default SignUp;
