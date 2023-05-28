import SidebarNav from "@/components/SidebarNav";
import { profileConfig } from "@/config/profile";
import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

interface ProfileLayoutProps {
  children?: React.ReactNode;
}

export default async function ProfileLayout({ children }: ProfileLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <div className="container grid gap-12 grid-cols-[180px_1fr] px-52 m-4">
      <div className="w-[180px]">
        <SidebarNav items={profileConfig.sidebarNav} />
      </div>
      <main className="flex w-full flex-col overflow-hidden">{children}</main>
    </div>
  );
}
