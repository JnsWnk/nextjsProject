"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";

const SignOutButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
      toast("Signed out successfully", { type: "success" });
    } catch {
      toast("Error signing out", { type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleSignOut} disabled={isLoading}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
