import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

export default async function Register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const newUser = req.body;
    const user = await db.credentialUser.findFirst({
      where: {
        email: newUser.email,
      },
    });
    if (user) {
      res.status(422).json({
        success: false,
        message: "A user with the same email already exists!",
        userExists: true,
      });
      return;
    }

    newUser.password = await bcrypt.hash(newUser.password, salt);
    await db.credentialUser.create({
      data: newUser,
    });

    res
      .status(201)
      .json({ success: true, message: "User signed up successfuly" });
  } else {
    res.status(400).json({ success: false, message: "Invalid method" });
  }
}
