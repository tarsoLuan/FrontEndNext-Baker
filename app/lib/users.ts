'use server';

import { signIn, signOut } from "../../nextauth";
import { AuthError } from "next-auth";
import { sql } from '@vercel/postgres';
import type { Users } from "../lib/types";
import bcrypt from "bcrypt";

export async function handleSignIn(prevState: string | undefined,formData: FormData) {
    try {
        await signIn('credentials', formData).then(() => {
            console.log('signIn ');

            const user = getUser(formData.get('email') as string);
            console.log('user ->' + JSON.stringify(user))

            return user;
        });
    } catch (error) {
        if (error instanceof AuthError) {
            return 'E-mail ou senha incorretos. Tente novamente.';
        }
        throw error;
    }
}

export async function handleSignOut() {
    try {
        await signOut();
    } catch (error) {
        throw error;
    }
}

export async function getUser(email: string) {
    try {
        const user = await sql<Users>`SELECT * FROM users WHERE email = ${email}`;
        return user.rows[0];
    } catch (error) {
        console.log('error ->' + error)
        console.log('error.message ->' + error.message)
        throw new Error("Não foi possível encontrar o usuário");
    }
}

export async function addUsers(prevState: string | undefined,formData: FormData) {
    try {        
        const user = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        }    

        console.log('user.email ->' + user.email)
        const userExists = await checkIfUserExists(user.email);
        console.log('userExists ->' + userExists)
        if(userExists === true) {

            throw new Error("Usuário já cadastrado");
        }
        const passwordHash = await bcrypt.hash(user.password, 10);
        console.log('passwordHash ->' + passwordHash)
        const newUser = await sql<Users>`INSERT INTO users (name, email, password) VALUES (${user.name}, ${user.email}, ${passwordHash}) RETURNING *`;
        console.log('newUser ->' + JSON.stringify(newUser))
        return newUser.rows[0];

    } catch (error) {

        return error.message;
    }
}

export async function checkIfUserExists(email: string) {
    try {
        console.log('email ->' + email)
        const user = await sql<Users>`SELECT * FROM users WHERE email=${email}`;
        console.log('user ->' + JSON.stringify(user))
        if(user.rowCount === 0) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error)
        throw new Error("Não foi possível encontrar o usuário");
    }
}

