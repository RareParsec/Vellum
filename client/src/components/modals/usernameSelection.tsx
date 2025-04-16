import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SelectUsername({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  const [username, setUsername] = useState("");

  const router = useRouter();

  const handleSubmit = () => {};

  return (
    <div className="absolute top-0 left-0 h-full w-full backdrop-blur-[5px]">
      <div className="flex flex-row justify-center items-center mt-52">
        <div className="rd-block text-center flex flex-col justify-between p-4 py-8 w-[50%] max-w-[500px]">
          <div>
            <div className="text-lg font-bold">Select a username!</div>
            <div className="text-sm">You won't be able to change it later</div>
          </div>

          <div className="flex flex-col mt-2">
            <input type="text" placeholder="foxy..." className="outline-none border border-dun p-2 rounded-[10px] mt-5" />
            <div className="mt-3">
              <button
                className="font-semibold rd-block bg-dun w-[40%] hover:bg-beaver hover:cursor-pointer"
                onClick={handleSubmit}
                value={username}
                onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
              >
                Select!
              </button>
            </div>
          </div>
          <div
            className="text-xs mt-1 hover:cursor-pointer"
            onClick={() => {
              signOut(auth);
              router.push("/auth/signin");
            }}
          >
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectUsername;
