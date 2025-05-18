"use client";
import customAxios from "@/config/axios";
import { auth } from "@/config/firebase";
import errorHandler from "@/utils/errorHandler";
import { useUserStore } from "@/zustand/userStore";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCirclePlus, SignOut } from "@phosphor-icons/react";
import toast from "react-hot-toast";

function SelectUsername({ isOpen }: { isOpen: boolean }) {
  const [username, setUsername] = useState("");
  const refreshUser = useUserStore((state) => state.refreshUser);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSubmit = async () => {
    if (username.length < 3) {
      toast.error("Username must be at least 3 characters long");
      return;
    }

    const toastId = toast.loading("Creating user...");
    try {
      const res = await customAxios.post("/auth/createUser", { username });
      if (res.data) {
        toast.success("User created successfully", { id: toastId });
        refreshUser();
        router.push("/");
      }
    } catch (error) {
      toast.dismiss(toastId);
      errorHandler(error);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-[5px] z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="rd-block bg-isabelline text-center flex flex-col gap-4 p-6 w-[90%] max-w-[500px] relative"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.div
              className="flex justify-center items-center pt-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <UserCirclePlus size={48} color="var(--color-deepBeaver)" />
            </motion.div>

            <motion.h2
              className="font-bold text-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Select a username!
            </motion.h2>

            <motion.p className="text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              You won&#39;t be able to change it later
            </motion.p>

            <motion.div
              className="flex flex-col mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.input
                type="text"
                placeholder="foxy..."
                className="outline-none border border-dun p-2 rounded-[10px] mt-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                whileFocus={{ boxShadow: "0 0 0 2px var(--color-beaver)" }}
              />

              <motion.button
                className="font-semibold rd-block bg-dun w-full mt-4 py-2 hover:bg-beaver hover:cursor-pointer"
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Select!
              </motion.button>
            </motion.div>

            <motion.div className="flex justify-center mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <motion.button
                className="text-xs flex items-center gap-1 hover:text-beaver hover:cursor-pointer"
                onClick={() => {
                  signOut(auth);
                  router.push("/");
                }}
                whileHover={{ scale: 1.05 }}
              >
                <SignOut size={14} />
                Sign out
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SelectUsername;
