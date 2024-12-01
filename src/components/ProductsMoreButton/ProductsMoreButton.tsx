import React, { FC, useState } from 'react';
import styles from './ProductsMoreButton.module.css';
import { Product, createRandomProduct } from '../../../src/homeworks/ts1/3_write';
import { ProductList } from '../ProductList/ProductList';


//стоимость, изображения, название категории, название, описание 
export const ProductsMoreButton: FC = () => {
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