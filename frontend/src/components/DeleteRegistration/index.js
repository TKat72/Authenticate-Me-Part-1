import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import DeleteRegisteration from "./DeleteRegistartion"


function RegisterDeleteModal({ register }) {
    const [showModal, setShowModal] = useState(false);
    const id = register?.id;

    return (
        <>
            <button onClick={() => setShowModal(true)} className="signInButt" style={{ width: "70px", marginTop: "-8px", marginBottom: "5px" }}> Delete </button>
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <DeleteRegisteration register={register} setShowModal={setShowModal}></DeleteRegisteration>
                    </Modal>
                )
            }
        </>
    );
}

export default RegisterDeleteModal;
