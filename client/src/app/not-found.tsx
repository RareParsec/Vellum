"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-2xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="mb-8 text-lg text-gray-600">Sorry, the page you are looking for does not exist. :&#40;</p>
      <button
        onClick={() => router.back()}
        className="rd-block flex items-center text-bold gap-2 px-4 py-2 hover:bg-antiqueWhite transition cursor-pointer"
      >
        <ArrowLeft size={20} />
        Go Back
      </button>
    </div>
  );
}
