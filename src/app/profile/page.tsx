import EditProfile from "@/components/EditProfile";
import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const Profile = async () => {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-4xl"> Profile </h1>
      <EditProfile id={user.id} name={user.name || ""} />
    </div>
  );
};

export default Profile;
