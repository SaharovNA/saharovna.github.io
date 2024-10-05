import React, { FC } from 'react';
//import { Header } from 'src/components/Header/Header';
import { CartButton } from '../CartButton/CartButton';
import styles from './ProductDescShort.module.css';

interface ProductDescShortProps {
  cost: number;
  productName: string; 
  productDescShort?: string;
  pic?: string;
}

//стоимость, изображение, название, описание (обрезанно)
export const ProductDescShort: FC<ProductDescShortProps> = ({cost, pic, productName, productDescShort}) => {
  return (
    <div className=''>
      <h1>{productName}</h1>
      <p>{productDescShort}</p>
      <p>Цена: {cost}</p>
      <div>
        {pic ? <img src={pic} alt="Picture 1" /> : ''}
      </div>
      <CartButton count={0} />
    </div>
  )
};