"use client";
import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import toast from "react-hot-toast";
import { useStoredPostsStore } from "@/zustand/storedPostsStore";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const router = useRouter();

  const showBackButtonRoutes = ["/post"];

  const clearStoredPosts = useStoredPostsStore((state) => state.clearPosts);

  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue === "") {
      searchRef.current?.blur();
      setOpen(false);
      return router.replace("/");
    }

    if (searchValue.length < 3) {
      toast.error("Search query must be at least 3 characters long");
      return;
    }

    searchRef.current?.blur();
    setOpen(false);

    if (pathname.includes("/search")) {
      clearStoredPosts(pathname);
    }
    router.replace(`/search?q=${searchValue}`);
  };

  useEffect(() => {
    setSearchValue(searchParams.get("q") || "");
  }, [searchParams]);

  return (
    <>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
            className="absolute top-0 left-0 h-full w-full backdrop-blur-[5px] z-20"
            onClick={() => {
              setOpen(false);
            }}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-col my-1 mt-3 top-1 rd-block border-2 border-isabelline sticky z-30 w-full">
        <div
          className="flex flex-row items-center h-fit text-center gap-1 cursor-pointer hover:cursor-text"
          onClick={() => {
            setOpen(true);
            searchRef.current?.focus();
          }}
        >
          <MagnifyingGlass size={22} color="var(--color-deepBeaver)" />
          <form onSubmit={handleSearch} className="w-full">
            <input
              ref={searchRef}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="py-1 text-[13px] px-2 border-none focus:ring-0 outline-none w-full"
            />
          </form>
        </div>

        {pathname !== "/" && (
          // showBackButtonRoutes.map((route) => pathname.includes(route)).includes(true)
          <div
            className="absolute right-full hover:cursor-pointer top-0 rd-block py-3 border-isabelline border-x-8"
            onClick={() => {
              router.back();
            }}
          >
            <div className="flex flex-row font-bold items-center text-[14px]">
              <CaretLeft size={18} weight="bold" color="var(--color-deepMocha)" />
              Back
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
