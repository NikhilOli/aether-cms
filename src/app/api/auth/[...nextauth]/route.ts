import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export const authOptions = {
  // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt" as const
    },
    pages: {
        signIn: "/sign-in",
    },
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
        }),
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, user } : { token: any, user: any}) { 
            if (user) {
                const dbUser = prisma.user.findUnique({
                    where: {
                        email: user.email,
                        select: {
                            id: true,
                            email: true,
                            username: true,
                            image: true,
                            role: true
                        }
                    }
                })
                if(dbUser){
                    token.id = dbUser.id,
                    token.email = dbUser.email,
                    token.name = dbUser.name,
                    token.username = dbUser.username,
                    token.image = dbUser.image,
                    token.role = dbUser.role
                } else {
                    const newUser = await prisma.user.create({
                        data: {
                            email: user.email,
                            name: user.name,
                            username: user.username,
                            image: user.image,
                            role: "USER" // Default role, can be changed later
                        }
                    })
                    token.id = newUser.id;
                }
                return token;
            }
        },
        async session ({session, token} :  { token: any, session: any}) {
            if(token) {
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.name = token.name;
                session.user.username = token.username;
                session.user.image = token.image;
                session.user.role = token.role; // Add role to session
            }
            return session;
        },
        redirect() {
            return './dashboard'
        }
    }
}

export default NextAuth(authOptions)