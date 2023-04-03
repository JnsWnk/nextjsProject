"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const SignInButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
      toast("Signed in successfully", { type: "success" });
    } catch {
      toast("Error signing in", { type: "error" });
    }
  };

  return (
    <button onClick={signInGoogle} disabled={isLoading}>
      Sign In
    </button>
  );
};

export default SignInButton;
