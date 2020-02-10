import React from 'react'
import PropTypes from 'prop-types'

import { useToast } from '.'
import style from './Toast.module.css'

export const ToastComponent = ({ positionX, positionY, backgroundColor }) => {
  const { removeToast, getToasts } = useToast()

  return (
    <section
      className={`${style.nvToasts} ${style[positionX]} ${style[positionY]} ${style[backgroundColor]}`}
    >
      {getToasts.map(toast => (
        <div
          key={toast.id}
          className={style.nvToast}
          onClick={() => removeToast(toast.id)}
        >
          <p className={style.nvToastText}>{toast.title}</p>
        </div>
      ))}
    </section>
  )
}

ToastComponent.propTypes = {
  positionX: PropTypes.string.isRequired,
  positionY: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
}

// const Toast = PropTypes.shape({
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// })
