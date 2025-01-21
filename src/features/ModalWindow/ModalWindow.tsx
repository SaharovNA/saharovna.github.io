import React, { FC, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styles from './ModalWindow.module.css';

interface ModalWindowProps {
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

interface MainProps {
  children: React.ReactNode;
}
const Main: FC<MainProps> = ({children}) => {
  return (
    <main className={styles.modal__main}>
      {children}
    </main>
  );
}

const MemoMain = React.memo<MainProps>(Main)

export const ModalWindow: FC<ModalWindowProps> = ({visible, children, onClose}) => {

  const memoChildren = useMemo(() => children, [children]);

  return (
    visible ?
      createPortal(
        <>
          <div className={styles.modal__overlay}></div>
          <div className={styles.modal}>
            <header className={styles.modal__header}>
              <h2>Modal Title</h2>
              <button onClick={onClose} className={styles.close__button}>&times;</button>
            </header>
            <MemoMain>
              {memoChildren}
            </MemoMain>
          </div>
        </>,
        document.querySelector('#modal-root')!
      )
      : null
  );
};