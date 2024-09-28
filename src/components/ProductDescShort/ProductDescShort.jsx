import React, { FC } from 'react';
//import { Header } from 'src/components/Header/Header';
import { CartButton } from '../CartButton/CartButton';
import styles from './ProductDescShort.module.css';

//стоимость, изображение, название, описание (обрезанно)
export const ProductDescShort = ({cost, pic, productName, productDescShort}) => {
  return (
    <div className=''>
      <h1>{productName}</h1>
      <p>{productDescShort}</p>
      <p>Цена: {cost}</p>
      <div>{pic}</div>
      <CartButton />
    </div>
  )
};