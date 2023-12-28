'use client'

import ProductCard from "./card";
import Slider from 'react-slick';
import { getProducts } from '../lib/products'
import { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
};

export default function ProductSlider() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        handleProducts();
    }, []);

    const handleProducts = async () => {
        const products = await getProducts();
        setProducts(products);
    }

    return (
        <Slider {...settings}>
            {products && products.map((product) => (
                <div>
                    <ProductCard props={product}/>
                </div>
            ))}
        </Slider>
    )
}