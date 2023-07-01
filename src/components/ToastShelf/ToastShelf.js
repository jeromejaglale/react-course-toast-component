import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import {ToastContext} from '../ToastPlayground';

function ToastShelf() {

  const {toastList, setToastList} = React.useContext(ToastContext);

  function closeToast(id) {
    const newToastList = toastList.filter(toast => {
      return toast.id !== id;
    });
    setToastList(newToastList);
  }

  return (
    <ol className={styles.wrapper}>
      {toastList.map(({message, variant, id}) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} id={id} close={closeToast}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
