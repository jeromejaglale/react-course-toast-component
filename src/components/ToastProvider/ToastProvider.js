import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if(e.code === 'Escape') {
        setToastList([]);
      }
      console.log(e.code);
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

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
