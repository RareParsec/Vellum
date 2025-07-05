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
    window.scrollTo({
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
            className="absolute top-0 left-0 h-full w-full backdrop-blur-[5px] z-20 sm:hidden"
            onClick={() => {
              setOpen(false);
            }}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-row z-30 w-full h-full">
        {pathname !== "/" && (
          <>
            <div
              className="absolute sm:static hover:cursor-pointer hover:bg-toastedLinen top-0 rd-block right-full h-full flex flex-row items-center mr-2 border-linen sm:bg-transparent sm:border-none sm:shadow-none sm:mr-0 font-bold sm:font-medium"
              onClick={() => {
                router.back();
              }}
            >
              <div className="flex rounded-[50px] flex-row items-center text-[14px]">
                <CaretLeft size={18} weight="bold" color="var(--color-deepMocha)" />
                <div className="sm:hidden">Back</div>
              </div>
            </div>
          </>
        )}
        <div
          className={`flex flex-row items-center h-fit text-center gap-1 cursor-pointer hover:cursor-text py-2 pr-2 rounded-md pl-2 sm:pl-0 ${
            pathname === "/" && "pl-2 sm:pl-4"
          }`}
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
              className="py-1 text-[16px] px-2 border-none focus:ring-0 outline-none w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Search;
