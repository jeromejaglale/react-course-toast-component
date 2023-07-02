import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import {ToastContext} from '../ToastProvider';

function ToastShelf() {

  const {toastList, dismissToast} = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toastList.map(({message, variant, id}) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} id={id} close={dismissToast}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
