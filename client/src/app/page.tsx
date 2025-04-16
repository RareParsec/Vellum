"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Rnd } from "react-rnd";

export default function Home() {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
      dragHandleClassName="handle"
    >
      <div className="bg-red-500 w-full h-full flex">
        <div className="w-full h-10 bg-blue-500 handle"></div>
        <input type="text" className="flex-grow" />
      </div>
    </Rnd>
  );
}
