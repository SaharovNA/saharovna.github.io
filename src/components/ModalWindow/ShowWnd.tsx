import React, { FC, useRef, useState } from 'react';
import { ModalWindow } from './ModalWindow';
//import './ShowWnd.module.css';
//import styles from './ShowWnd.module.css';

interface ShowWndProps {
  content: string;
  children: React.ReactNode;
}


export const ShowWnd: FC<ShowWndProps> = ({content}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inputContent, setInputContent] = useState(content);

  const openModal = () => {
    setIsOpen(true);
    setInputContent(inputRef.current.value);
  }
  const closeModal = () => {
    setIsOpen(false);
  }


  return (
    <>
      <div style={{width: '100px', height: '100px', display: 'flex'}}>
        <input type="text" ref={inputRef} />
        <button
            type="button"
            //className={cn('storybook-button', `storybook-button--${size}`, mode)}
            //style={{ backgroundColor: backgroundColor || 'green' }}
            onClick={openModal} >Открыть окно</button>
        <ModalWindow visible={isOpen} children={inputContent} onClose={closeModal} />
      </div>
    </>
  );
};