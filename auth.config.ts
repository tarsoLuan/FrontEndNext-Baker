import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth"

export const authConfig = {
    callbacks: {
        authorized({auth, request: { nextUrl}}) {
            const isLoggedIn = !!auth?.user;

            if(isLoggedIn) {
                return Response.redirect(new URL('/', nextUrl));
            }
            return true;

        },
    },
    providers: [],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)