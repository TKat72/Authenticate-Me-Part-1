import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import RegistrationEdit from "./RegistrationEdit";

function RegistrationEditModel({ id, info, postId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}> <i className="fa-solid fa-pen-to-square"></i>Edit your registartion</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <RegistrationEdit info={info} id={id} setShowModal={setShowModal} postId={postId}></RegistrationEdit>
                </Modal>
            )}
        </>
    );
}

export default RegistrationEditModel;
