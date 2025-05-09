import React, { useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            MySwal.fire({
                showConfirmButton: false,
                showCloseButton: true,
                html: children ? <div>{children}</div> : null,
                didClose: () => {
                    if (onClose) {
                        onClose();
                    }
                }
            });
        }
    }, [isOpen, onClose, children]);

    return null;
};

export default Modal;
