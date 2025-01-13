import React, { FC } from 'react';
import { CartButton } from '../../../CartButton/CartButton';
import styles from './ProductDescFull.module.css';

interface ProductDescFullProps {
  cost: number;
  categoryName: string;
  productName: string; 
  productDesc?: string;
  pics?: string[];
}

//стоимость, изображения, название категории, название, описание 
export const ProductDescFull: FC<ProductDescFullProps> = ({cost, pics, categoryName, productName, productDesc}) => {
  return (
    <div className=''>
      <h1>{productName}</h1>
      <p>{categoryName}</p>
      <p>{productName}</p>
      <p>Описание:</p>
      <p>{productDesc}</p>
      <p>Цена: {cost}</p>
      <div>
        {pics?.map((x: string, i: number) => (
          <img key ={i} src={x} alt={"Picture " + i.toString()} />
        ))}
      </div>
      <CartButton count={0} />
    </div>
  )
};