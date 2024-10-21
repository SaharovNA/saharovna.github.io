import React, { FC } from 'react';
//import cn from 'clsx';
//import { Logo } from 'src/components/Logo/Logo';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.css';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ThemeSwitcher />
    </header>
  );
}