import { db } from "./db";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

export async function signUp() {}

export async function login(email: string, password: string) {
  const user = await db.credentialUser.findFirst({
    where: {
      email: email,
    },
  });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return user;
    }
  }
  return null;
}
