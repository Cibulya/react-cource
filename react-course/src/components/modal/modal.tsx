/* eslint-disable react/jsx-no-useless-fragment */

import { ModalWindow } from '../../inerfaces/modal';
import './modal.css';

function Modal(props: ModalWindow) {
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-box">
                    <button
                        type="button"
                        onClick={props.toggle}
                        className="modal-close"
                    >
                        X
                    </button>
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Modal;
