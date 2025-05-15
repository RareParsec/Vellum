"use client";

import { BellSimple, GearSix, Plus, User } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import React, { createRef, RefObject, Suspense, use, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Notifications from "./Notifications";
import { useNotificationsStore } from "@/zustand/notificationsStore";
import { useRouteScrollStore } from "@/zustand/routeScrollStore";
import { auth } from "@/config/firebase";
import Search from "./Search";
import { useUserStore } from "@/zustand/userStore";

export const globalScrollRef: RefObject<HTMLDivElement | null> = createRef();

function AppShell({ children }: { children: React.ReactNode }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = useNotificationsStore((state) => state.notifications);
  const user = useUserStore((state) => state.user);

  const lastSavedScroll = useRef<number | null>(null);
  const childrenContainerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (e: any) => {
    if (e.currentTarget.scrollTop === null) return;

    if (Math.abs(e.currentTarget.scrollTop - (lastSavedScroll.current || 0)) > 10) {
      if (e.currentTarget.scrollTop < 10) {
        sessionStorage.setItem("scroll-" + pathname, "0");
      } else {
        sessionStorage.setItem("scroll-" + pathname, e.currentTarget.scrollTop);
      }

      lastSavedScroll.current = e.currentTarget.scrollTop;
    }
  };

  if (pathname.startsWith("/auth")) return children;

  return (
    <>
      <div className="flex flex-row h-screen justify-start">
        <div className="absolute h-screen top-0 left-0 flex flex-col justify-end pb-12 gap-4 pl-3 pointer-events-none">
          <Link
            href={pathname == "/" ? "" : "/"}
            className="absolute pointer-events-auto cursor-pointer font-extrabold text-2xl bg-gradient-to-r from-cyan-400 via-softSageGreen via-15% to-beaver text-transparent bg-clip-text mt-[12px] top-0"
          >
            Vellum
          </Link>

          <Link
            className="rd-block py-3 hover:bg-antiqueWhite cursor-pointer pointer-events-auto border-2 border-isabelline"
            href={user ? `/profile/${user?.username}` : "/auth/signup"}
          >
            <User size={26} color="var(--color-deepBeaver)" />
          </Link>
          <Link
            href={user ? "/settings" : "/auth/signup"}
            className="rd-block py-3 hover:bg-antiqueWhite cursor-pointer pointer-events-auto border-2 border-isabelline"
          >
            <GearSix size={26} color="var(--color-deepBeaver)" />
          </Link>
        </div>
        <div
          className="w-full flex flex-col items-center no-scrollbar overflow-scroll min-w-fit"
          ref={globalScrollRef}
          onScroll={handleScroll}
        >
          <div className="flex flex-col items-center mx-2 gap-5" ref={childrenContainerRef}>
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading...</div>}>
              <Search />
            </Suspense>
            {children}
          </div>
        </div>
        <Notifications open={notificationsOpen} />
        <div className="flex flex-col justify-between absolute top-0 right-0 h-screen pointer-events-none pb-12">
          <button
            className="rd-block mr-3 py-4 mt-2 hover:bg-antiqueWhite relative cursor-pointer pointer-events-auto border-2 border-isabelline"
            onClick={() => {
              user ? setNotificationsOpen(!notificationsOpen) : router.push("/auth/signup");
            }}
          >
            <div className="absolute top-[-5px] right-[-4px] rd-block bg-rosyBrown px-2 py-0 rounded-sm">
              {notifications.filter((notif) => !notif.viewed).length || ""}
            </div>
            <BellSimple size={26} color="var(--color-deepBeaver)" />
          </button>
          <Link
            className="rd-block mr-3 py-3 hover:bg-antiqueWhite cursor-pointer pointer-events-auto border-2 border-isabelline"
            href={user ? "/create" : "/auth/signup"}
          >
            <Plus size={26} color="var(--color-deepBeaver)" />
          </Link>
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
