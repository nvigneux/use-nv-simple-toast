import { useContext } from "react";

// Utils & misc
import { ToastContext } from "./ToastContainer";

export const useToast = () => {
  const [state, setState] = useContext(ToastContext);

  function generateId() {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  }

  const getToasts = () => {
    return { ...state };
  };

  const setToast = toast => {
    const id = generateId();
    const newToasts = [].concat({ ...toast, id }, state.toasts || []);
    setState({ ...state, toasts: newToasts });
  };

  const removeToast = toastId => {
    const newToasts = state.toasts.filter(({ id }) => id !== toastId);
    setState({ ...state, toasts: newToasts });
  };

  const clearToasts = () => {
    setState({ ...state, toasts: [] });
  };

  return {
    getToasts,
    setToast,
    removeToast,
    clearToasts
  };
};
