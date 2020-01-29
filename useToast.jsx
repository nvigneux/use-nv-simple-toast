import { useContext } from 'react'

// Utils & misc
import { ToastContext } from './ToastContainer'

let timerToast = {}

export const useToast = () => {
  const [state, setState] = useContext(ToastContext)

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
  const setToast = toast => {
    const id = generateId()
    const newToast = { ...toast, id }
    let newToasts = [].concat(newToast, state.toasts || [])
    createTimeOut(newToast, 2000)
    
    if (newToasts.length > 3) newToasts.pop()

    setState(prevState => ({ ...prevState, toasts: newToasts }))
  }

  /**
   * Remove the toast by his id and clear his timeout from memory
   * @param toast : toastId
   */
  const removeToast = toastId => {
    setState(prevState => {
      removeTimeOut(toastId)
      const newToasts = prevState.toasts.filter(({ id }) => id !== toastId)
      return { ...prevState, toasts: newToasts }
    })
  }

  /**
   * Delete all toast from array
   */
  const clearToasts = () => {
    setState(prevState => ({ ...prevState, toasts: [] }))
  }

  return {
    getToasts: state,
    setToast,
    removeToast,
    clearToasts,
  }
}
