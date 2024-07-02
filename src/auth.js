import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "./lib/db";
import { saltAndHashPassword } from "./lib/utils";

function exclude(user, keys) {
    return Object.fromEntries(
        Object.entries(user).filter(([key]) => !keys.includes(key))
    );
}

const ADMIN = {
    id: 0,
    fullname: "Thomas N",
    email: "thomas.n@compfest.id",
    phone: "08123456789",
    password: "Admin123",
    role: "ADMIN"
}


const getUserFromDb = async (email, pwHash) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (user.password !== pwHash) return null;
        const userWithoutPassword = exclude(user, ['password'])
        return userWithoutPassword
    } catch (error) {
        console.error(error);
        return null
    }
}


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null
                if (credentials.email === ADMIN.email && credentials.password === ADMIN.password) {
                    user = ADMIN
                } else {
                    const { hashedPassword } = await saltAndHashPassword(credentials.password)
                    user = await getUserFromDb(credentials.email, hashedPassword)
                }

                if (!user) {
                    throw new CredentialsSignin("Wrong email or password");
                }

                // return user object with the their profile data
                return user
            },
        }),
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) { // User is available during sign-in
                token.id = user.id
                token.role = user.role
            }
            return token
        },
        session({ session, token }) {
            session.user.id = token.id
            session.user.role = token.role
            return session
        },
    },
})