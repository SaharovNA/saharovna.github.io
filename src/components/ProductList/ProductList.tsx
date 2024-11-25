import React, { FC } from 'react';
//import { Header } from 'src/components/Header/Header';
//import { CartButton } from '../CartButton/CartButton';
import styles from './ProductList.module.css';
import { Product } from 'src/homeworks/ts1/3_write';
import { ProductDescFull } from '../ProductDescFull/ProductDescFull';

interface ProductListProps {
    products: Product[];
}

//стоимость, изображения, название категории, название, описание 
export const ProductList: FC<ProductListProps> = ({products}) => {
    return (
    <div className=''>
        {products ?
            <ul>
            {products?.map((product: Product) => (
                <li>
                    <ProductDescFull
                        key={product.id}
                        cost={product.price}
                        categoryName={product.category.name}
                        productName={product.name}
                        productDesc={product.desc}
                        pics={[product.photo]}
                    />
                </li>
            ))}
            </ul>
        : null}
    </div>
    )
};