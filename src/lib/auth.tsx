import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { db } from "@/lib/db";
import { login } from "./credential";

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
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: getGoogleClientID(),
      clientSecret: getGoogleClientSecret(),
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username: email, password } = credentials as {
          username: string;
          password: string;
        };
        const user = await login(email, password);
        return user ? user : null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
};
