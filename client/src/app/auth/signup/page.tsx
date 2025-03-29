"use client";

import SelectUsername from "@/app/components/modals/usernameSelection";
import { auth, provider } from "@/app/config/firebase";
import { GoogleLogo } from "@phosphor-icons/react";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function SignUp() {
  const router = useRouter();

  const handleGoogleAuth = async () => {
    try {
      await toast
        .promise(signInWithPopup(auth, provider), {
          loading: "Loading...",
          success: "Login Success!",
          error: "Login Failed...",
        })
        .then(() => {
          router.push("/");
        });
    } catch (error) {}
  };

  return (
    <div>
      <SelectUsername />
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
