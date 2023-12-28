import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { z } from "zod";
import { authOptions } from "./authoptions";
import { getUser } from './app/lib/users'

export const { auth, signIn, signOut } = NextAuth({
    ...authOptions,
    secret:process.env.AUTH_SECRET,
    providers: [
        Credentials({
            async authorize(credentials: any) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success == true) {
                    const { email, password } = parsedCredentials.data;

                    const user = await getUser(email);
                    console.log('user ->' + JSON.stringify(user))

                    if (!user) {
                        // console.log('n rolou');
                        return null;
                    };

                    const passwordOk = await bcrypt.compare(password, user.password);
                    if (passwordOk){
                        // console.log('rolou ->' + user.email);
                        return user as any;
                    
                    };
                }

                // console.log('Login inválido');
                return null;
            },
        }),
    ],
});