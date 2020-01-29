import React from 'react'
// import PropTypes from 'prop-types'

import { useToast } from '.'
import './Toast.css'

export const ToastComponent = () => {
  const { removeToast, getToasts } = useToast()

  return (
    <section className="nv-toasts">
      {getToasts.map(toast => (
        <div key={toast.id} className="nv-toast">
          <p className="nv-toast__text">{toast.title}</p>
          <span
            className="nv-toast__action"
            onClick={() => removeToast(toast.id)}
            key={toast.id}
          >
            remove
          </span>
        </div>
      ))}
    </section>
  )
}

// const Toast = PropTypes.shape({
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// })
