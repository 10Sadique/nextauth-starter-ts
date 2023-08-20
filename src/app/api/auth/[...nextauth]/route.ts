import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialProvider from "next-auth/providers/credentials";

import db from "@/lib/db";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter email address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Please enter your email or password.");
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("No user found.");
        }

        const passwordMatched = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!passwordMatched) {
          throw new Error("Wrong password.");
        }
        return user;
      },
    }),
  ],
  secret: process.env.SECRET as string,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
