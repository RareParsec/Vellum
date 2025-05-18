"use client";
import { UserCircleMinus } from "@phosphor-icons/react";
import React from "react";

export default function NotFound() {
  return (
    <div className="mt-[10%] flex flex-row justify-center text-xl text-deepBeaver font-semibold gap-4 items-center defined-w">
      <div className="text-deepMocha">
        <UserCircleMinus size={40} />
      </div>
      <div>That user could not be found :&#40;</div>
    </div>
  );
}
