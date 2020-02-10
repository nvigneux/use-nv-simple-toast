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

export const ToastContainer = ({
  children,
  positionX,
  positionY,
  backgroundColor
}) => {
  const [toasts, setToasts] = useState([])

  const portalTarget = canUseDOM ? document.body : null

  return (
    <ToastContext.Provider value={[toasts, setToasts]}>
      {children}

      {createPortal(
        <ToastComponent
          positionX={positionX}
          positionY={positionY}
          backgroundColor={backgroundColor}
        />,
        portalTarget
      )}
    </ToastContext.Provider>
  )
}

ToastContainer.propTypes = {
  children: PropTypes.node.isRequired,
  positionX: PropTypes.oneOf(['left', 'center', 'right']),
  positionY: PropTypes.oneOf(['top', 'middle', 'bottom']),
  backgroundColor: PropTypes.oneOf(['white', 'black'])
}

ToastContainer.defaultProps = {
  positionX: 'right',
  positionY: 'bottom',
  backgroundColor: 'black'
}
