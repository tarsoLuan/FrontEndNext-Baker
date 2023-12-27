import NextAuth from "next-auth";
import { authOptions } from "./authoptions";

export default NextAuth(authOptions).auth;

export const config = {
    matcher : ['/((?!api|_next/static|_next/image|images|icon.ico).*)',]
};
