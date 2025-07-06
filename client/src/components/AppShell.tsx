"use client";

import {
  BellSimple,
  DotsThreeOutline,
  GearSix,
  Plus,
  User,
} from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Notifications from "./Notifications";
import { useNotificationsStore } from "@/zustand/notificationsStore";
import Search from "./Search";
import { useUserStore } from "@/zustand/userStore";
import { AnimatePresence, motion } from "framer-motion";

function AppShell({ children }: { children: React.ReactNode }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuBorderVisible, setMobileMenuBorderVisible] = useState(false);

  const notifications = useNotificationsStore((state) => state.notifications);
  const user = useUserStore((state) => state.user);

  const lastSavedScroll = useRef<number | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const [mobileMenuItems, setMobileMenuItems] = useState([
    {
      name: "Profile",
      icon: <User size={26} color="var(--color-deepBeaver)" />,
      link: user ? `/profile/${user?.username}` : "/auth",
    },
    {
      name: "Settings",
      icon: <GearSix size={26} color="var(--color-deepBeaver)" />,
      link: user ? "/settings" : "/auth",
    },
    {
      name: "Create",
      icon: <Plus size={26} color="var(--color-deepBeaver)" />,
      link: user ? "/create" : "/auth",
    },
  ]);

  // const itemVariants = {
  //   hidden: (i: number) => ({
  //     y: 100, // Start off-screen
  //     opacity: 0,
  //     transition: { delay: i * 0.05, duration: 0.1 },
  //   }),
  //   visible: (i: number) => ({
  //     y: 0,
  //     opacity: 1,
  //     transition: { delay: i * 0.05, duration: 0.1 },
  //   }),
  //   exit: (i: number) => ({
  //     y: 100, // Exit off-screen
  //     opacity: 0,
  //     transition: { delay: i * 0.05, duration: 0.1 },
  //   }),
  // };

  const itemVariants = {
    hidden: (i: number) => ({
      bottom: 0, // Start off-screen
      width: 0,
      height: 0,
      opacity: 0,
      padding: 0,
      transition: { delay: i * 0.05, duration: 0.1 },
    }),
    visible: (i: number) => ({
      bottom: 60 * (i + 1),
      opacity: 1,
      width: 50,
      height: 50,
      padding: "15px",
      transition: {
        delay: i * 0.05,
        type: "spring",
        bounce: 1,
        stiffness: 120,
      },
    }),
    exit: (i: number) => ({
      bottom: 0, // Exit off-screen
      width: 0,
      height: 0,
      opacity: 0,
      padding: 0,
      transition: { delay: i * 0.05, duration: 0.1 },
    }),
  };

  const handleBodyScroll = () => {
    if (notificationsOpen) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (Math.abs(scrollTop - (lastSavedScroll.current || 0)) > 10) {
      if (scrollTop < 10) {
        sessionStorage.setItem("scroll-" + pathname, "0");
      } else {
        sessionStorage.setItem("scroll-" + pathname, scrollTop.toString());
      }
      lastSavedScroll.current = scrollTop;
    }
  };

  const ProfileButton = ({ appendStyles = "" }) => {
    return (
      <Link
        className={
          "rd-block py-3 hover:bg-toastedLinen cursor-pointer pointer-events-auto " +
          appendStyles
        }
        href={user ? `/profile/${user?.username}` : "/auth"}
      >
        <User size={26} color="var(--color-deepBeaver)" />
      </Link>
    );
  };

  const SettingsButton = ({ appendStyles = "" }) => {
    return (
      <Link
        href={user ? "/settings" : "/auth"}
        className={
          "rd-block py-3 hover:bg-toastedLinen cursor-pointer pointer-events-auto" +
          appendStyles
        }
      >
        <GearSix size={26} color="var(--color-deepBeaver)" />
      </Link>
    );
  };

  const PlusButton = ({ appendStyles = "" }) => {
    return (
      <Link
        className={
          "rd-block mr-3 py-3 hover:bg-toastedLinen cursor-pointer pointer-events-auto " +
          appendStyles
        }
        href={user ? "/create" : "/auth"}
      >
        <Plus size={26} color="var(--color-deepBeaver)" />
      </Link>
    );
  };

  const NotificationButton = ({ appendStyles = "" }) => {
    return (
      <button
        className={
          "rd-block mr-3 py-4 mt-2 hover:bg-toastedLinen relative cursor-pointer pointer-events-auto " +
          appendStyles
        }
        onClick={() => {
          if (user) {
            setNotificationsOpen(!notificationsOpen);
          } else {
            router.push("/auth");
          }
        }}
      >
        <div className="absolute top-[-5px] right-[-4px] rd-block bg-rosy px-2 py-0 rounded-sm">
          {notifications.filter((notif) => !notif.viewed).length || ""}
        </div>
        <BellSimple size={26} color="var(--color-deepBeaver)" />
      </button>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBodyScroll);

    return () => {
      window.removeEventListener("scroll", handleBodyScroll);
    };
  }, [pathname]);

  if (pathname.startsWith("/auth")) return children;

  return (
    <>
      <div className={`flex flex-row justify-start`}>
        <div className="fixed h-screen top-0 left-0 flex flex-col justify-end pb-12 gap-4 pl-3 pointer-events-none sm:hidden">
          {/* <Link
            href={pathname == "/" ? "" : "/"}
            className="absolute pointer-events-auto cursor-pointer font-extrabold text-2xl bg-gradient-to-r from-cyan-400 via-softSageGreen via-15% to-beaver text-transparent bg-clip-text mt-[12px] top-0"
          >
            Vellum
          </Link> */}
          <ProfileButton />
          <SettingsButton />
        </div>
        <div className="w-full flex flex-col items-end no-scrollbar overflow-x-clip">
          <div className="flex flex-col items-center mx-2 gap-5 mr-auto ml-auto">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <div className="bg-isabelline flex flex-row w-full items-center sticky mt-2 sm:mt-0 top-1 z-20 sm:top-0 left-0 rd-block sm:rounded-t-none sm:w-screen sm:h-fit p-0">
                <Search />
                <div className="hidden sm:flex h-full">
                  <button
                    className={"px-2 h-full cursor-pointer"}
                    onClick={() => {
                      if (user) {
                        setNotificationsOpen(!notificationsOpen);
                      } else {
                        router.push("/auth");
                      }
                    }}
                  >
                    <div className="absolute top-[-3px] right-[-3px] rd-block px-2 py-0 rounded-sm bg-transparent font-extrabold text-mutedClayRed">
                      {notifications.filter((notif) => !notif.viewed).length >
                        0 && "!"}
                    </div>
                    <BellSimple size={26} color="var(--color-deepBeaver)" />
                  </button>
                </div>
              </div>
            </Suspense>
            {children}
          </div>
        </div>
        <Notifications
          open={notificationsOpen}
          setIsOpen={setNotificationsOpen}
        />
        <div className="flex flex-col justify-between fixed top-0 right-0 h-screen pointer-events-none pb-12 sm:hidden">
          <NotificationButton />
          <PlusButton />
        </div>
      </div>
      <div className="hidden sm:flex flex-row justify-center fixed bottom-0 w-full">
        <div className="flex flex-row w-full justify-end">
          <motion.div
            className="flex flex-row items-center justify-center w-[50px] h-[50px] mb-2 mr-2"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            animate={
              {
                // borderTopLeftRadius: mobileMenuPhase === "open" ? "0px" : "16px",
              }
            }
          >
            <motion.div
              className="absolute w-[40px] h-[40px] rounded-full border bg-isabelline border-beaver active-tap shadow-md"
              animate={{
                skewX: [1, -1.5, 0.8, -0.6, 1.2, -1],
                skewY: [0.5, -1, 1.3, -0.8, 0.6, -1],
                rotate: [0, 3, -2, 1, -3, 2, 0],
                scale: [1, 0.985, 1.015, 0.995, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <div className="h-full w-full flex flex-row justify-center items-center">
                <DotsThreeOutline size={26} />
              </div>
            </motion.div>

            <AnimatePresence>
              {mobileMenuOpen &&
                mobileMenuItems.map((item, index) => {
                  return (
                    <motion.div
                      className="flex flex-row items-center justify-center flex-grow fixed mb-2"
                      key={item.name}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={index}
                    >
                      <Link
                        key={item.name}
                        href={item.link}
                        className="flex flex-row items-center justify-center"
                        onClick={() => {
                          setMobileMenuOpen(false);
                        }}
                      >
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border w-full h-full bg-isabelline shadow-md"
                          animate={{
                            skewX: [1, -1.5, 0.8, -0.6, 1.2, -1],
                            skewY: [0.5, -1, 1.3, -0.8, 0.6, -1],
                            rotate: [0, 3, -2, 1, -3, 2, 0],
                            scale: [1, 0.985, 1.015, 0.995, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                          }}
                        >
                          <div className="h-full w-full flex flex-row justify-center items-center">
                            {item.icon}
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default AppShell;

// <div>
//   <div className="grid h-screen grid-rows-[auto] grid-cols-[auto_1fr]">
//     <div className="flex flex-row justify-between col-span-2 my-1 mt-3">
//       <div className="ml-[15%] flex flex-row rd-block items-center h-fit text-center gap-1">
//         <MagnifyingGlass size={22} color={"--color-beaver"} />
//         <input
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//           placeholder="Search"
//           className="pr-[200px] py-1 text-[13px] px-2 border-none focus:ring-0 outline-none"
//         />
//       </div>
//       <div className="rd-block mr-3 py-4 px-4">
//         <BellSimple size={26} color="var(--color-deepBeaver)" />
//       </div>
//     </div>

//     <div className="grid">2</div>
//     <div className="h-full overflow-scroll border-black border">{children}</div>
//   </div>
// </div>;
