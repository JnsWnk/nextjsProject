import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userid } = req.query;
  if (req.method === "PATCH") {
    const { name } = req.body;
    const user = await getServerSession(req, res, authOptions);
    if (!user || user?.user.id !== userid) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    await db.user.update({
      where: { id: userid as string },
      data: { name },
    });
    res.status(200).json({ name });
    return;
  }
  res.status(400).json({ message: "Bad request" });
}
