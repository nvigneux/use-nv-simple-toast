import { useContext } from 'react'

// Utils & misc
import { ToastContext } from './ToastContainer'

let timerToast = {}

export const useToast = () => {
  const [toasts, setState] = useContext(ToastContext)

  /**
   * Generate a generic ID
   */
  function generateId() {
    return Math.random()
      .toString(36)
      .substr(2, 9)
  }

  /**
   * Create a timeout to delete the toast in limit time
   * @param toast : Toast
   * @param time : number
   */
  function createTimeOut(toast, time) {
    timerToast[toast.id] = setTimeout(() => removeToast(toast.id), time)
  }

  /**
   * Clear timeout of toast created in timerToast
   * @param toastId : string
   */
  function removeTimeOut(toastId) {
    clearTimeout(timerToast[toastId])
    delete timerToast[toastId]
  }

  /**
   * add toast to toasts and create a timeout to delete him
   * @param toast : Toast
   */
  const setToast = (toast, time = 5000) => {
    const id = generateId()
    let newToasts = [].concat({ ...toast, id }, toasts || [])
    createTimeOut({ ...toast, id }, time)

    if (newToasts.length > 3) newToasts.pop()
    setState(newToasts)
  }

  /**
   * Remove the toast by his id and clear his timeout from memory
   * @param toast : toastId
   */
  const removeToast = toastId => {
    removeTimeOut(toastId)
    setState(prevState => {
      const newToasts = prevState.filter(({ id }) => id !== toastId)
      return newToasts
    })
  }

  /**
   * Delete all toast from array
   */
  const clearToasts = () => {
    setState([])
  }

  return {
    getToasts: toasts,
    setToast,
    removeToast,
    clearToasts,
  }
}
