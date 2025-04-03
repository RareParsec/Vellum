"use client";
import { BellSimple, GearSix, MagnifyingGlass, User } from "@phosphor-icons/react";
import React, { useState } from "react";

function Navbar({ children, show = true }: { children: React.ReactNode; show?: boolean }) {
  if (!show) return null;

  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <div className="flex flex-row h-screen">
        <div className="flex flex-col justify-end mb-12 gap-4 ml-3">
          <button className="rd-block py-3 hover:bg-antiqueWhite cursor-pointer">
            <User size={26} color="--color-beaver" />
          </button>
          <button className="rd-block py-3 hover:bg-antiqueWhite cursor-pointer">
            <GearSix size={26} color="--color-beaver" />
          </button>
        </div>
        <div className="flex-grow overflow-scroll flex flex-col items-center scroll no-scrollbar">
          <div className="flex flex-row justify-center my-1 mt-3 top-1 sticky">
            <div className="flex flex-row rd-block items-center h-fit text-center gap-1">
              <MagnifyingGlass size={22} color={"--color-beaver"} />
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search"
                className="pr-[200px] py-1 text-[13px] px-2 border-none focus:ring-0 outline-none"
              />
            </div>
          </div>
          {children}
        </div>
        <div className="flex flex-col">
          <button className="rd-block mr-3 py-4 px-4 mt-2 hover:bg-antiqueWhite relative cursor-pointer">
            <div className="absolute top-[-5px] right-[-4px] rd-block bg-rosyBrown px-2 py-0 rounded-sm">4</div>
            <BellSimple size={26} color="--color-beaver" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

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
//         <BellSimple size={26} color="--color-beaver" />
//       </div>
//     </div>

//     <div className="grid">2</div>
//     <div className="h-full overflow-scroll border-black border">{children}</div>
//   </div>
// </div>;
