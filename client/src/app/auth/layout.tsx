import React from "react";
import SignUp from "./signup/page";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="select-none">
      <SignUp />
    </div>
  );
}
