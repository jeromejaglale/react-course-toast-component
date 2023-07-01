import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastList, setToastList] = React.useState([]);

  function handlePopToast(e, message, variant, setMessage, setVariant) {
    e.preventDefault();

    const newToast = {message, variant, id: crypto.randomUUID()};
    const newToastList = [newToast, ...toastList];
    setToastList(newToastList);
    setMessage('');
    setVariant('notice');
  }

  function closeToast(id) {
    const newToastList = toastList.filter(toast => {
      return toast.id !== id;
    });
    setToastList(newToastList);
  }

  return (
    <ToastContext.Provider value={{toastList, setToastList, handlePopToast, closeToast}}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
