import React from "react";

import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  useEscapeKey(() => {
    setToastList([]);
  });

  const [toastList, setToastList] = React.useState([]);

  function createToast(message, variant) {
    const newToast = {message, variant, id: crypto.randomUUID()};
    const newToastList = [newToast, ...toastList];
    setToastList(newToastList);
  }

  function dismissToast(id) {
    const newToastList = toastList.filter(toast => {
      return toast.id !== id;
    });
    setToastList(newToastList);
  }

  return (
    <ToastContext.Provider value={{toastList, setToastList, createToast, dismissToast}}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
