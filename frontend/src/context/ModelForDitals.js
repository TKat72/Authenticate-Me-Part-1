import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalForDitalsContext = React.createContext();

export function ModalForDitalsContextProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [])

    return (
        <>
            <ModalForDitals.Provider value={value}>
                {children}
            </ModalForDitals.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function ModalForDitals({ onClose, children }) {
    const modalNode = useContext(ModalForDitalsContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}
