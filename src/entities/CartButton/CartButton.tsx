import React, { FC } from 'react';
//import cn from 'clsx';
import cart from './cart.png';
import styles from './CartButton.module.css';

interface CartButtonProps {
  count: number
}

export const CartButton: FC<CartButtonProps> = ({count}) => {
  return (
    count ?
    <div className={styles.button_counter}>
      <button>-</button>
      <input className={styles.button_counter_text} type="text" value={count} />
      <button>+</button>
    </div>
    :
    <button>
      <img src={cart} className={styles.cart} alt="cart" />
    </button>
  );
}