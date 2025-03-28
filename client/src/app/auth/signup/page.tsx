"use client";

import { GoogleLogo } from "@phosphor-icons/react";
import React from "react";
import toast from "react-hot-toast";

function SignUp() {
  const handleGoogleAuth = () => {};
  return (
    <div>
      <div className="flex justify-center font-bold text-2xl mt-40">SignUp</div>
      <div className="flex flex-row justify-center mt-4">
        <div className="flex items-center text-xl font-medium gap-3 rounded-block" onClick={handleGoogleAuth}>
          <GoogleLogo size={32} color="var(--beaver)" />
          continue with google
        </div>
      </div>
    </div>
  );
}

export default SignUp;
