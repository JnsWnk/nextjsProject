"use client";

import GoogleSignIn from "@/components/GoogleSignIn";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });
    const json = await response.json();
    if (response.ok && json) {
      toast.success("Account created successfully");
      redirect("/login");
    } else {
      toast.error(json.message);
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-4 sm:w-[350px] mt-4">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-3xl font-semibold ">Welcome</h1>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Use your email or google account to sign in
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <div className="flex">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Your Username"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="name@example.com"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="font-semibold text-lg p-2 bg-slate-800 text-white dark:bg-white dark:text-slate-800 hover:bg-slate-600 dark:hover:bg-slate-300 rounded-md"
            >
              Register
            </button>
          </div>
        </form>
        <div className="relative">
          <div className="relative flex justify-center text-slate-600 dark:text-slate-400 text-sm font-medium">
            <span className="bg-background px-2">Or continue with</span>
          </div>
        </div>
        <GoogleSignIn />
      </div>
      <Link
        href="/login"
        className="underline text-slate-600 dark:text-slate-400 hover:text-slate-100 text-sm text-center"
      >
        Back to login
      </Link>
    </div>
  );
};

export default Register;
