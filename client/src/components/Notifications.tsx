"use client";
import customAxios from "@/config/axios";
import { useNotificationsStore } from "@/zustand/notificationsStore";
import { EnvelopeSimpleOpen, TrashSimple, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Notifications({
  open,
  setIsOpen,
}: {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const notifications = useNotificationsStore((state) => state.notifications);
  const deleteNotifications = useNotificationsStore(
    (state) => state.deleteNotifications
  );
  const markAsViewed = useNotificationsStore((state) => state.markAsViewed);
  const deleteNotification = useNotificationsStore(
    (state) => state.deleteNotification
  );
  const router = useRouter();

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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const sanitizeText = (text: string) => {
    return text
      .replace(/&nbsp;/g, " ")
      .replace(/\*\*(.*?)\*\*/g, "$1") // bold **
      .replace(/__(.*?)__/g, "$1") // bold __
      .replace(/\*(.*?)\*/g, "$1") // italic *
      .replace(/_(.*?)_/g, "$1") // italic _
      .replace(/~~(.*?)~~/g, "$1") // strikethrough ~~
      .replace(/`(.*?)`/g, "$1") // inline code
      .replace(/!\[.*?\]\(.*?\)/g, "") // images ![alt](url)
      .replace(/\[.*?\]\(.*?\)/g, "$1") // links [text](url)
      .replace(/#+\s?(.*)/g, "$1"); // headings # Title
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-20 bg-black/10"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <motion.div
            animate={{ width: "100%", height: "100vh" }}
            initial={{ width: 0, height: "0vh" }}
            exit={{ width: 0, height: "0vh" }}
            transition={{ duration: 0.2 }}
            className="fixed h-screen gap-2 not-sm:max-w-[400px] right-0 z-50 flex flex-col"
          >
            <div
              className="rd-block sm:p-1 sm:rounded-none h-full not-sm:mt-5 not-sm:mb-5 drop-shadow-xl overflow-y-scroll flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="not-sm:hidden flex flex-row justify-end text-deepMocha mb-5">
                <X
                  size={22}
                  weight="bold"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              </div>

              <div
                className={`flex flex-row justify-end mt-4 ${
                  notifications.length < 1 && "hidden"
                }`}
              >
                <button
                  className="p-2 text-xs font-semibold px-3 mr-2 cursor-pointer"
                  onClick={deleteAllNotifications}
                >
                  Clear All
                </button>
              </div>

              {notifications.length === 0 && (
                <div className="rd-block p-3 not-sm:drop-shadow-sm sm:shadow-sm mt-1 bg-linen cursor-pointer">
                  No notifications...
                </div>
              )}
              <div className="flex flex-col gap-2  w-full">
                {notifications.map((notification, index) => (
                  <div key={notification.id}>
                    <div
                      onClick={() => {
                        setIsOpen(false);
                        router.push(
                          notification.comment_id
                            ? `/post/${notification.post_id}?comment=${notification.comment_id}`
                            : `/post/${notification.post_id}`
                        );
                        markAsViewedHandler(notification.id);
                      }}
                      className={`rd-block shadow-lg py-1 px-3 ${
                        notification.viewed ? "bg-linen" : "bg-rosy"
                      } hover:toastedLinen cursor-pointer flex flex-row justify-between items-center rounded-b-none`}
                    >
                      <div>{notification.message}</div>
                      <div className="flex flex-row">
                        <button
                          className="py-2 px-2 mr-1 rd-block bg-transparent text-deepBeaver hover:text-deepMocha cursor-pointer hover:bg-toastedLinen"
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsViewedHandler(notification.id);
                          }}
                        >
                          <EnvelopeSimpleOpen size={22} />
                        </button>
                        <button
                          className="py-2 px-2 rd-block bg-transparent text-deepBeaver hover:text-deepMocha cursor-pointer hover:bg-toastedLinen"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteSingleNotification(notification.id);
                          }}
                        >
                          <TrashSimple size={22} />
                        </button>
                      </div>
                    </div>
                    <div className="rd-block rounded-t-none">
                      <div className="text-sm line-clamp-3 whitespace-pre-wrap">
                        {sanitizeText(notification.preview)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Notifications;
