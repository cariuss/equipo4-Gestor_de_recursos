import React, { useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const Modal = ({ isOpen, onClose, title, text, icon, confirmButtonText, children, onConfirm }) => {
    useEffect(() => {
        if (isOpen) {
            MySwal.fire({
                title: title || '',
                text: text || '',
                icon: icon || '',
                confirmButtonText: confirmButtonText || null,
                showCancelButton: onConfirm ? true : false,
                html: children ? <div>{children}</div> : <div className="flex items-center justify-center min-h-[200px] bg-gray-100 rounded-lg shadow-md">
                <span className="text-gray-500 text-lg font-medium">Contenido no disponible</span>
              </div>,
                didClose: () => {
                    if (onClose) {
                        onClose();
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

export default Modal;
