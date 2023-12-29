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

export async function getAllProducts() {
    try {
        const products = await sql<Products>`SELECT * FROM products`;
        console.log(products.rows);
        return products.rows;
    } catch (error) {
        console.log(error);
        throw new Error("Não foi possível encontrar os produtos");
    }
}

export async function getProductById(id: string) {
    try {
        const product = await sql<Products>`SELECT * FROM products WHERE id = ${id}`;
        console.log(product.rows);
        return product.rows[0];
    } catch (error) {
        console.log(error);
        throw new Error("Não foi possível encontrar o produto");
    }
}