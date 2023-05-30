import { db } from "./db";
import bcrypt from "bcryptjs";

export async function login(email: string, password: string) {
  const user = await db.user.findFirst({
    where: {
      email: email,
    },
  });
  if (user && user.password) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return user;
    }
  }
  return null;
}
