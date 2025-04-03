import Image from "next/image";
import Post from "./components/post";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-[500px] mt-30">
        {Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14).map((e) => {
          return (
            <div className="mb-10">
              <Post key={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
