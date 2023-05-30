import Link from "next/link";
import SignOutButton from "./SignOutButton";
import ThemeProvider from "./ThemeProvider";
import { getCurrentUser } from "@/lib/session";

const Navbar = async ({}) => {
  const user = await getCurrentUser();

  return (
    <div className="px-52 border-b border-slate-400 text-slate-950 dark:text-slate-400">
      <div className="flex justify-between">
        <div className="flex gap-8">
          <Link
            href="/"
            className="flex gap-1 px-5 py-5 hover:text-gray-400 font-bold text-xl"
          >
            Home
          </Link>
          <Link href="/about" className="px-5 py-5 hover:text-gray-400">
            About
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeProvider></ThemeProvider>
          {user && (
            <div className="flex gap-2">
              <Link
                href="/profile"
                className="px-5 py-5 text-gray-600 hover:text-gray-400"
              >
                Profile
              </Link>
            </div>
          )}
          <div className="flex bg-slate-700 text-slate-200 rounded px-3 py-2 hover:bg-slate-600 hover:text-slate-100">
            <>
              {user ? <SignOutButton /> : <Link href="/login"> Sign In </Link>}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
