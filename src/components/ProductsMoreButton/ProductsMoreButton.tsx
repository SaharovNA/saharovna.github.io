import React, { FC, useState } from 'react';
//import { Header } from 'src/components/Header/Header';
//import { CartButton } from '../CartButton/CartButton';
import styles from './ProductsMoreButton.module.css';
import { Product, createRandomProduct } from '../../../src/homeworks/ts1/3_write';
import { ProductList } from '../ProductList/ProductList';


interface ProductsMoreButtonProps {
    //products?: Product[];
}

//стоимость, изображения, название категории, название, описание 
export const ProductsMoreButton: FC<ProductsMoreButtonProps> = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const getMore = () => {
        setProducts([...products, createRandomProduct(Date.now().toString())]);
      }

    return (
        <div className=''>
            <ProductList products={products} />
            <button onClick={getMore}>Показать еще</button>
        </div>
    )
};