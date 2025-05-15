import customAxios from "@/config/axios";
import { useNotificationsStore } from "@/zustand/notificationsStore";
import { EnvelopeSimpleOpen, TrashSimple } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

function Notifications({ open }: { open: boolean }) {
  const notifications = useNotificationsStore((state) => state.notifications);
  const deleteNotifications = useNotificationsStore((state) => state.deleteNotifications);
  const markAsViewed = useNotificationsStore((state) => state.markAsViewed);
  const deleteNotification = useNotificationsStore((state) => state.deleteNotification);

  const deleteAllNotifications = () => {
    deleteNotifications();
    customAxios.delete("/notifications/delete").catch(() => {});
  };

  const markAsViewedHandler = (id: string) => {
    markAsViewed(id);
    customAxios.patch(`/notifications/mark-as-viewed/${id}`).catch(() => {});
  };

  const deleteSingleNotification = (id: string) => {
    deleteNotification(id);
    customAxios.delete(`/notifications/delete/${id}`).catch(() => {});
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          animate={{ width: "100%" }}
          initial={{ width: 0 }}
          exit={{ width: 0 }}
          className="flex flex-col h-fit mt-20 gap-2 max-w-[400px] ml-3"
        >
          {
            <div className="rd-block p-0 bg-linen flex flex-row justify-end">
              <button className="p-2 text-xs font-semibold px-3 mr-2 cursor-pointer" onClick={deleteAllNotifications}>
                Clear All
              </button>
            </div>
          }
          {notifications.length === 0 && <div className="rd-block p-3 bg-linen hover:toastedLinen cursor-pointer">No notifications</div>}
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`rd-block py-1 px-3 ${
                notification.viewed ? "bg-linen" : "bg-antiqueWhite"
              } hover:toastedLinen cursor-pointer flex flex-row justify-between items-center`}
            >
              <div>{notification.message}</div>
              <div className="flex flex-row">
                <button className="py-2 px-2 hover:text-rosyBrownDark cursor-pointer" onClick={() => markAsViewedHandler(notification.id)}>
                  <EnvelopeSimpleOpen size={22} />
                </button>
                <button
                  className="py-2 px-1 mr-1 hover:text-rosyBrownDark cursor-pointer"
                  onClick={() => deleteSingleNotification(notification.id)}
                >
                  <TrashSimple size={22} />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Notifications;
