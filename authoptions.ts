import type { NextAuthConfig } from "next-auth";

export const authOptions = {
    callbacks: {
        authorized({auth, request: { nextUrl}}) {
            console.log('auth ->' + JSON.stringify(auth))
            const isLoggedIn = !!auth?.user;
            const isOnLogin = nextUrl.pathname.startsWith('/entrar');

            if(isOnLogin) {
                if (isLoggedIn) {
                    return Response.redirect(new URL('/', nextUrl));
                }
                return true;
            } else if (isLoggedIn) {
                return true;
            }
            return true;
        },
        // session({session, user}) {
        //     console.log('sessionkk ->' + JSON.stringify(session))
        //     session.user = user;
        //     return session;
        // },
    },
    providers: [],
} satisfies NextAuthConfig;