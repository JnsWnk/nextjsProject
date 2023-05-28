"use client";

import Link from "next/link";
import { SidebarNavItem } from "../../types";
import { usePathname } from "next/navigation";

type Props = {
  items: SidebarNavItem[];
};

const SidebarNav = (props: Props) => {
  const path = usePathname();
  return (
    <nav className="grid gap-2 items-start">
      {props.items.map((item, index) => {
        return (
          <Link key={index} href={item.href}>
            <span
              className={
                "flex items-center font-semibold text-lg p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700" +
                (path === item.href ? " bg-slate-200 dark:bg-slate-700" : "")
              }
            >
              {item.title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default SidebarNav;
