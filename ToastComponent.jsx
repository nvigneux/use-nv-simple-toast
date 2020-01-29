import React from 'react'
import PropTypes from 'prop-types'

import { useToast } from '.'

export const ToastComponent = () => {
  const { removeToast, getToasts } = useToast()

  return (
    <div style={{ position: 'fixed', top: 0 }}>
      {getToasts.map(toast => (
        <div onClick={() => removeToast(toast.id)} key={toast.id}>
          {toast.title}
        </div>
      ))}
    </div>
  )
}

const Toast = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
})

ToastComponent.propTypes = {
  toasts: PropTypes.arrayOf(Toast.isRequired).isRequired,
}
