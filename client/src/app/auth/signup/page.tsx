"use client";

// import SelectUsername from "@/components/modals/usernameSelection";
import customAxios from "@/config/axios";
import { auth, provider } from "@/config/firebase";
import { useUserStore } from "@/zustand/userStore";
import { GoogleLogo } from "@phosphor-icons/react/dist/icons/GoogleLogo";
import { signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function SignUp() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

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

      toast.success("Successfully signed in", { id: toastId });

      setUser(res.data.user);
      router.replace("/");
    } catch (error: any) {
      signOut(auth);

      const { response } = error;
      const message = response?.data?.message || "Internal server error";
      toast.error(Array.isArray(message) ? message[0] : message, { id: toastId });
    }
  };

  return (
    <div>
      {/* <SelectUsername isOpen={isModalOpen} /> */}
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
