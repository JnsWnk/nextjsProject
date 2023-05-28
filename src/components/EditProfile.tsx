"use client";

import { toast } from "react-toastify";
import Button from "./Button";

type User = {
  id: string;
  name: string;
};

const EditProfile = (props: User) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username") as string;
    const res = await fetch(`/api/user/${props.id}`, {
      method: "PATCH",
      body: JSON.stringify({ name: username }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      console.log("Profile updated");
      toast.success("Profile updated");
    }
  };

  return (
    <div className="border rounded-lg shadow-md p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 items-start">
          <label htmlFor="username" className="font-bold text-xl">
            Your Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={props.name}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
          <Button children={"Save"} />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
