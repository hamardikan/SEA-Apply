import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "./lib/db";
import { saltAndHashPassword } from "./lib/utils";




const getUserFromDb = async (email, pwHash) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        console.log("user", user)

        if (user.password !== pwHash) return null;
        return user
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

                // logic to salt and hash password
                const { hashedPassword } = await saltAndHashPassword(credentials.password)
                console.log("hash", hashedPassword)

                // logic to verify if user exists
                user = await getUserFromDb(credentials.email, hashedPassword)


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
})