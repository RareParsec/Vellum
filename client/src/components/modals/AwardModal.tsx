"use client";

import { useUserStore } from "@/zustand/userStore";
import { X, Certificate } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AwardModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const user = useUserStore((state) => state.user);
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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-[5px] z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
        >
          <motion.div
            className="rd-block bg-isabelline text-center flex flex-col gap-4 p-6 w-[90%] max-w-[400px] relative"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-3 right-3 rd-block py-1 px-1 hover:bg-whisperBlush cursor-pointer" onClick={handleClose}>
              <X size={22} color="var(--color-beaver)" />
            </button>

            <motion.div
              className="flex justify-center items-center pt-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Certificate size={48} color="var(--color-deepBeaver)" />
            </motion.div>

            <motion.h2
              className="font-bold text-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Awards Feature
            </motion.h2>

            <motion.p className="text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              The awards feature isn&#39;t implemented yet. Soon you&#39;ll be able to recognize exceptional content with special awards.
            </motion.p>

            <motion.button
              className="rd-block bg-whisperBlush hover:bg-antiqueWhite cursor-pointer py-2 mt-2"
              onClick={handleClose}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AwardModal;
