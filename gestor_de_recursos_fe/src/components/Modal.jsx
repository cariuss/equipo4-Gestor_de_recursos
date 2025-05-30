import React, { useEffect, useRef } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const Modal = ({ isOpen, onClose, title, text, icon, confirmButtonText, children, onConfirm }) => {
  const hasFired = useRef(false);

  useEffect(() => {
    if (isOpen && !hasFired.current) {
      hasFired.current = true;
      MySwal.fire({
        title: title || '',
        text: text || '',
        icon: icon || '',
        confirmButtonText: confirmButtonText || 'OK',
        showCancelButton: !!onConfirm,
        html: children ? <div>{children}</div> : null,
        didClose: () => {
          hasFired.current = false; // reset para próximos usos
          if (onClose) {
            setTimeout(() => onClose(), 0); // postergar la llamada
          }
        },
        preConfirm: () => {
          if (onConfirm) {
            return onConfirm();
          }
        }
      });
    }
  }, [isOpen, onClose, title, text, icon, confirmButtonText, children, onConfirm]);

  return null;
};
