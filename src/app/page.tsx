"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-5 gap-6">
      <h1 className="font-extrabold text-4xl"> Welcome </h1>
      <p className="" style={{ maxWidth: "50%" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
