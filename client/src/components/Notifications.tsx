import { useNotificationsStore } from "@/zustand/notificationsStore";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

function Notifications({ open }: { open: boolean }) {
  const notifications = useNotificationsStore((state) => state.notifications);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          animate={{ width: "100%" }}
          initial={{ width: 0 }}
          exit={{ width: 0 }}
          className="flex flex-col h-fit mt-20 gap-2 max-w-[400px] ml-3"
        >
          {notifications.map((notification, index) => (
            <div key={index} className="rd-block p-3 bg-linen hover:toastedLinen cursor-pointer">
              {notification.message}
            </div>
          ))}
          {/* <button
              className="rd-block p-3 bg-antiqueWhite hover:bg-rosyBrown cursor-pointer"
              onClick={() => useNotificationsStore.getState().clearNotifications()}
            >
              Clear Notifications
            </button> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Notifications;
