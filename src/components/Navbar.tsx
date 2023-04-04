import { getServerSession } from "next-auth";
import Link from "next/link";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import ThemeProvider from "./ThemeProvider";
import { authOptions } from "@/lib/auth";

const Navbar = async ({}) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="px-20 border-b-1 shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-8">
          <Link
            href="/"
            className="flex gap-1 px-5 py-5 text-gray-600 hover:text-gray-400 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-violet-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
            Home
          </Link>
          <Link
            href="/about"
            className="px-5 py-5 text-gray-600 hover:text-gray-400"
          >
            About
          </Link>
          <Link
            href="/"
            className="px-5 py-5 text-gray-600 hover:text-gray-400"
          >
            Api
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeProvider></ThemeProvider>
          <div className="flex bg-slate-700 text-slate-200 rounded px-3 py-2 hover:bg-slate-600 hover:text-slate-100">
            <>{session ? <SignOutButton /> : <SignInButton />}</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
