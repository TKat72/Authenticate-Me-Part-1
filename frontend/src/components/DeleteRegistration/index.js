import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import DeleteRegisteration from "./DeleteRegistartion"


function RegisterDeleteModal({ register }) {
    const [showModal, setShowModal] = useState(false);
    const id = register?.id;

    return (
        <>
            <button onClick={() => setShowModal(true)} className="signInButt"> Delete </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteRegisteration register={register}></DeleteRegisteration>
                </Modal>
            )}
        </>
    );
}

export default RegisterDeleteModal;
