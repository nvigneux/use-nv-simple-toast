import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import { ToastComponent } from '.'

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

export const ToastContext = React.createContext([{}, () => {}])

export const ToastContainer = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const portalTarget = canUseDOM ? document.body : null

  return (
    <ToastContext.Provider value={[toasts, setToasts]}>
      {children}

      {createPortal(<ToastComponent />, portalTarget)}
    </ToastContext.Provider>
  )
}

ToastContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
