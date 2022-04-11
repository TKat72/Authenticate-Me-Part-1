import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import AddRegistration from "./AddRegistration";


function AddRegistrationModel({ postId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} >Register for event</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddRegistration postId={postId} setShowModal={setShowModal}></AddRegistration>
                </Modal>
            )}
        </>
    );
}

export default AddRegistrationModel;
