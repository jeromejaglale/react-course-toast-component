import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastList, setToastList}) {

  return (
    <ol className={styles.wrapper}>
      {toastList.map(({message, variant, id}) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
