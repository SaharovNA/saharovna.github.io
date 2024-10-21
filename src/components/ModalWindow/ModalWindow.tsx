import React, { FC } from 'react';
//import { Header } from 'src/components/Header/Header';
//import './ModalWindow.module.css';
import styles from './ModalWindow.module.css';

interface ModalWindowProps {
  visible: boolean;
  children: React.ReactNode;
}
/*
const [isOpen, setIsOpen] = useState(false);
const openModal = () => {
  setIsOpen(true);
}

const closeModal = () => {
  setIsOpen(false);
}
*/
export const ModalWindow: FC<ModalWindowProps> = ({visible , children}) => {
  return (
    <>
      <div className={styles.modal__overlay}></div>
      <div className={styles.modal}>
        <header className={styles.modal__header}>
          <h2>Modal Title</h2>
          <button className={styles.close__button}>&times;</button>
        </header>
        <main className={styles.modal__main}>
          {children}
        </main>
      </div>
    </>
  );
};