import type { NextAuthConfig } from "next-auth";

export const authConfig = {
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
    },
    providers: [],
} satisfies NextAuthConfig;