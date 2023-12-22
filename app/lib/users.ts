'use server';

import { signIn } from "../../auth";
import { AuthError } from "next-auth";
import { sql } from '@vercel/postgres';
import type { Users } from "./types"
import bcrypt from "bcrypt";

export async function handleSignIn(formData: any) {
    try {
        await signIn("credentials", formData);
    } catch (error) {
        if(error instanceof AuthError) {
            return 'Login inválido';
        }
        throw error;
    }
}

export async function getUser(email: string) {
    try {
        const user = await sql<Users>`SELECT * FROM users WHERE email = ${email}`;
        return user[0];
    } catch (error) {
        console.log(error)
        throw new Error("Não foi possível encontrar o usuário");
    }
}

export async function addUsers(user: Users) {
    try {
        const passwordHash = await bcrypt.hash(user.password, 10);
        const newUser = await sql<Users>`INSERT INTO users (name, email, password) VALUES (${user.name}, ${user.email}, ${passwordHash}) RETURNING *`;
        return newUser;
    } catch (error) {
        console.log(error)
        throw new Error("Não foi possível criar o usuário");
    }
}

