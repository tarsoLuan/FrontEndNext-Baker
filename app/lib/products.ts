'use server'

import { sql } from '@vercel/postgres';
import type { Products } from "../lib/types";

export async function getProducts() {
    try {
        const products = await sql<Products>`SELECT * FROM products LIMIT 5`;
        console.log(products.rows);
        return products.rows;
    } catch (error) {
        console.log(error);
        throw new Error("Não foi possível encontrar os produtos");
    }
}