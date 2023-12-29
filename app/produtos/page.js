'use client'
import { getAllProducts } from '../lib/products'
import { useEffect, useState } from 'react';
import MiniCard from '../components/miniCard';

export default function Produtos() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
      handleProducts();
  }, []);

  const handleProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
  }

  return (
    <main className="pt-20">
      <div className="pt-10">
      <h1 className="text-[#FFF]" style={{fontSize:"50px", paddingLeft:"23%"}}>Produtos</h1>
      <h1 className="text-[#FFF] pb-20" style={{fontSize:"25px", paddingLeft:"23%"}}>Encontre os produtos vendidos na Baker</h1>
      <div className="text-[#FFF] flex justify-center">
        {!products && <div>Loading...</div>}
        {products && products.map((product) => (
          <div key={product.id}>
            <MiniCard props={product}/>
          </div>
        ))}
      </div>
    </div>
    </main>
  )
}
  