import React from 'react'
// import PropTypes from 'prop-types'

import { useToast } from '.'
import style from './Toast.module.css'

export const ToastComponent = () => {
  const { removeToast, getToasts } = useToast()

  return (
    <section className={style.nvToasts}>
      {getToasts.map(toast => (
        <div key={toast.id} className={style.nvToast}>
          <p className={style.nvToastText}>{toast.title}</p>
          <span
            className={style.nvToastAction}
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
