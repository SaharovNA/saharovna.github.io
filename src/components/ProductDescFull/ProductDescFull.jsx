import React, { FC } from 'react';
//import { Header } from 'src/components/Header/Header';
import { CartButton } from '../CartButton/CartButton';
import styles from './ProductDescFull.module.css';

//стоимость, изображения, название категории, название, описание 
export const ProductDescFull = ({cost, pics, categoryName, productName, productDesc}) => {
  return (
    <div className=''>
      <h1>{productName}</h1>
      <p>{categoryName}</p>
      <p>{productName}</p>
      <p>Описание</p>
      <p>{productDesc}</p>
      <p>Цена: {cost}</p>
      <div>{pics}</div>
      <CartButton />
    </div>
  )
};