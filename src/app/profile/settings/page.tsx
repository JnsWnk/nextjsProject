import EditProfile from "@/components/EditProfile";
import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const Settings = async () => {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  return (
    <div>
      <h1 className="font-bold text-4xl"> Settings </h1>
      <EditProfile id={user.id} name={user.name || ""} />
    </div>
  );
};

export default Settings;
