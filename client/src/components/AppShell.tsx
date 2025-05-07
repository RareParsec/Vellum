"use client";

import { BellSimple, GearSix, Plus, User } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import React, { UIEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Notifications from "./Notifications";
import { useNotificationsStore } from "@/zustand/notificationsStore";
import { useRouteScrollStore } from "@/zustand/routeScrollStore";
import Search from "./Search";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";

function AppShell({ children }: { children: React.ReactNode }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = useNotificationsStore((state) => state.notifications);

  const pathname = usePathname();

  const scrollFeedRef = useRef<HTMLDivElement>(null);
  const lastSavedScroll = useRef<number | null>(null);

  const childrenContainerRef = useRef<HTMLDivElement>(null);

  const persistedScrollSet = useRef<boolean>(false);

  const getRouteScroll = useRouteScrollStore((state) => state.getRouteScroll);
  const setRouteScroll = useRouteScrollStore((state) => state.setRouteScroll);
  const scrollNow = useRouteScrollStore((state) => state.scrollNow);

  const handleScroll = (e: any) => {
    if (e.currentTarget.scrollTop === null) return;

    if (Math.abs(e.currentTarget.scrollTop - (lastSavedScroll.current || 0)) > 10) {
      lastSavedScroll.current = e.currentTarget.scrollTop;
      if (e.currentTarget.scrollTop < 2) return;

      setRouteScroll({ route: pathname, scroll: e.currentTarget.scrollTop });
    }
  };

  // useEffect(() => {
  //   console.log("2");
  //   if (!childrenContainerRef.current) return;

  //   console.log("3");
  //   const resizeObserver = new ResizeObserver((entries) => {
  //     for (const entry of entries) {
  //       console.log(entry.contentRect.height);
  //       if (entry.target === childrenContainerRef.current && !persistedScrollSet.current) {
  //         console.log("Scrolling to", getRouteScroll(pathname));
  //         scrollFeedRef.current?.scrollTo({ top: getRouteScroll(pathname) });
  //         persistedScrollSet.current = true;
  //       }
  //     }
  //   });

  //   resizeObserver.observe(childrenContainerRef.current);

  //   return () => {
  //     resizeObserver.disconnect();
  //     persistedScrollSet.current = false;
  //     console.log("1");
  //   };
  // }, [pathname]);

  useEffect(() => {
    persistedScrollSet.current = false;
  }, [pathname]);

  useEffect(() => {
    if (!childrenContainerRef.current) return;
    const savedScroll = getRouteScroll(pathname);

    if (savedScroll !== null && scrollFeedRef.current) {
      scrollFeedRef.current.scrollTo({ top: savedScroll });
      persistedScrollSet.current = true;
    }
  }, [scrollNow]);

  if (pathname.startsWith("/auth")) return children;

  return (
    <div>
      <div className="flex flex-row h-screen justify-start">
        <div className="absolute h-screen top-0 left-0 flex flex-col justify-end pb-12 gap-4 pl-3 pointer-events-none">
          <Link
            className="rd-block py-3 hover:bg-antiqueWhite cursor-pointer pointer-events-auto"
            href={auth.currentUser ? "/profile/fkirkfro" : "/auth/signup"}
          >
            <User size={26} color="var(--color-deepBeaver)" />
          </Link>
          <button className="rd-block py-3 hover:bg-antiqueWhite cursor-pointer pointer-events-auto">
            <GearSix size={26} color="var(--color-deepBeaver)" />
          </button>
        </div>
        <div
          className="w-full flex flex-col items-center no-scrollbar overflow-scroll min-w-fit"
          ref={scrollFeedRef}
          onScroll={handleScroll}
        >
          <div className="flex flex-col items-center" ref={childrenContainerRef}>
            <Search />
            {children}
          </div>
        </div>
        <Notifications open={notificationsOpen} />
        <div className="flex flex-col justify-between absolute top-0 right-0 h-screen pointer-events-none pb-12">
          <button
            className="rd-block mr-3 py-4 mt-2 hover:bg-antiqueWhite relative cursor-pointer pointer-events-auto"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <div className="absolute top-[-5px] right-[-4px] rd-block bg-rosyBrown px-2 py-0 rounded-sm">{notifications.length || ""}</div>
            <BellSimple size={26} color="var(--color-deepBeaver)" />
          </button>
          <Link className="rd-block mr-3 py-3 hover:bg-antiqueWhite cursor-pointer pointer-events-auto" href={"/create"}>
            <Plus size={26} color="var(--color-deepBeaver)" />
          </Link>
        </div>
      </div>
    </div>
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
