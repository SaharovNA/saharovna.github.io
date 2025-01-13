import React, { FC } from 'react';
import styles from './ProductList.module.css';
import { Product } from 'src/homeworks/ts1/3_write';
import { ProductDescFull } from '../ProductDescFull/ProductDescFull';

interface ProductListProps {
    products: Product[];
}

const MemoProduct = React.memo(ProductDescFull, (oldProps, newProps) => {
    return oldProps.productName === newProps.productName
})

//стоимость, изображения, название категории, название, описание 
export const ProductList: FC<ProductListProps> = ({products}) => {
    return (
    <div className=''>
        {products?.map((product: Product) => (
            <MemoProduct
                key={product.id}
                cost={product.price}
                categoryName={product.category.name}
                productName={product.name}
                productDesc={product.desc}
                pics={[product.photo]}
            />
        ))}
    </div>
    )
};