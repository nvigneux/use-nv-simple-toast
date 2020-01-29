import React from "react";
import PropTypes from "prop-types";

import { useToast } from ".";

export const ToastComponent = ({ toasts }) => {
  const { removeToast } = useToast();

  return (
    <div style={{ position: "fixed", top: 0 }}>
      {toasts.map(toast => (
        <div onClick={() => removeToast(toast.id)} key={toast.id}>
          {toast.name}
        </div>
      ))}
    </div>
  );
};

ToastComponent.propTypes = {
  toasts: PropTypes.array.isRequired
};
