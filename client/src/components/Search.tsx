"use client";
import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import toast from "react-hot-toast";
import { useStoredPostsStore } from "@/zustand/storedPostsStore";
import { globalScrollRef } from "./AppShell";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const clearStoredPosts = useStoredPostsStore((state) => state.clearPosts);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue === "") {
      searchRef.current?.blur();
      setOpen(false);
      return router.push("/");
    }

    if (searchValue.length < 3) {
      toast.error("Search query must be at least 3 characters long");
      return;
    }

    const words = searchValue.split(" ");

    const hashtags = words.filter((word) => word.startsWith("#")).map((word) => word.slice(1));
    const filteredWords = words.filter((word) => !word.startsWith("#"));

    searchRef.current?.blur();

    if (pathname.includes("/search")) {
      clearStoredPosts(pathname);
    }
    router.push(`/search?q=${filteredWords.join(" ")}${hashtags?.length > 0 ? `&hashtags=${hashtags.join(",")}` : ""}`);
    setOpen(false);
  };

  useEffect(() => {
    setSearchValue(
      `${
        (searchParams.get("hashtags") &&
          searchParams
            .get("hashtags")
            ?.split(",")
            .map((hashtag) => {
              return `#${hashtag}`;
            })
            .join(" ")) ||
        ""
      } ${searchParams.get("q") || ""}`.trim()
    );
    globalScrollRef.current?.scrollTo({
      top: 0,
    });
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
      <div className="flex flex-col my-1 mt-3 top-1 rd-block border-2 border-isabelline sticky z-30 w-full h-fit">
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
          <>
            <div
              className="absolute hover:cursor-pointer hover:bg-antiqueWhite top-0 rd-block right-full h-full flex flex-row items-center mr-2 border-isabelline"
              onClick={() => {
                router.back();
              }}
            >
              <div className="flex rounded-[50px] flex-row font-bold items-center text-[14px]">
                <CaretLeft size={18} weight="bold" color="var(--color-deepMocha)" />
                Back
              </div>
            </div>
            {/* <div
              className="absolute hover:cursor-pointer hover:bg-antiqueWhite top-full rd-block right-full h-full flex flex-row items-center mr-2 mt-2 border-isabelline"
              onClick={() => {
                router.replace("/");
              }}
            >
              <div className="flex rounded-[50px] flex-row font-bold items-center text-[14px] px-2">/</div>
            </div> */}
          </>
        )}
      </div>
    </>
  );
}

export default Search;
