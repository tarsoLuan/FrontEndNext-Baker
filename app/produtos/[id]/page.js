'use client'

import { getProductById } from "app/lib/products"
import { useEffect, useState } from 'react';

export default function ProductDetail({params}) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        handleProduct();
    }, []);

    const handleProduct = async () => {
        const product = await getProductById(params.id);
        setProduct(product);
    }

    return (
        <main className="pt-20">
            {!product && <div>Loading...</div>}
            {product && 
                <div className="pt-10 flex justify-center text-white">
                    <div>{product.name}</div>
                </div>
            }
        </main>
    )
}