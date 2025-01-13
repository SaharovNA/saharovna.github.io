import React, { FC } from 'react';
//import cn from 'clsx';
import logo from './logo.svg';
import styles from './Logo.module.css';

export const Logo: FC = () => {
  return (
    <img src={logo} className={styles.logo} alt="logo" />
  );
}