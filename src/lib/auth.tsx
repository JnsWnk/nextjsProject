import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function getGoogleClientID() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId || clientId === "") {
    throw new Error("GOOGLE_CLIENT_ID not found");
  }
  return clientId;
}

function getGoogleClientSecret() {
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientSecret || clientSecret === "") {
    throw new Error("GOOGLE_CLIENT_SECRET not found");
  }
  return clientSecret;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: getGoogleClientID(),
      clientSecret: getGoogleClientSecret(),
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
