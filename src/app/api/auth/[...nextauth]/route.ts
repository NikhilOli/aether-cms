import NextAuth, { Account, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@/generated/prisma";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
      username?: string;
      image?: string;
      role?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    name?: string;
    email?: string;
    username?: string;
    image?: string;
    role?: string;
  }
}

const prisma = new PrismaClient();

// Custom Prisma adapter to fix snake_case fields from OAuth account
function CustomPrismaAdapter(p: PrismaClient) {
  const originalAdapter = PrismaAdapter(p);

  return {
    ...originalAdapter,
    linkAccount: async (account: Account) => {
      // Map snake_case keys from NextAuth to camelCase for Prisma model
      const fixedAccount = {
        provider: account.provider,
        type: account.type,
        providerAccountId: account.providerAccountId,
        userId: account.userId!, // userId MUST be defined here
        refreshToken: account.refresh_token ?? null,
        accessToken: account.access_token ?? null,
        expiresAt: account.expires_at ?? null,
        tokenType: account.token_type ?? null,
        scope: account.scope ?? null,
        idToken: account.id_token ?? null,
        sessionState: account.session_state ?? null,
      };

      return await p.account.create({ data: fixedAccount });
    },
  };
}

export const authOptions = {
  adapter: CustomPrismaAdapter(prisma),
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // Add more providers here if needed
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: {
            id: true,
            email: true,
            name: true,
            username: true,
            image: true,
            role: true,
          },
        });
        if (dbUser) {
          token.id = dbUser.id;
          token.email = dbUser.email;
          token.name = dbUser.name;
          token.username = dbUser.username;
          token.image = dbUser.image;
          token.role = dbUser.role;
        } else {
          const newUser = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              username: user.username,
              image: user.image,
              role: "USER", // Default role
            },
          });
          token.id = newUser.id;
        }
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.username = token.username;
        session.user.image = token.image;
        session.user.role = token.role;
      }
      return session;
    },
    redirect() {
      return "/dashboard";
    },
  },
};

const handler = NextAuth(authOptions);

// App Router handler export
export { handler as GET, handler as POST };
export const getAuthSession = () => getServerSession(authOptions);
