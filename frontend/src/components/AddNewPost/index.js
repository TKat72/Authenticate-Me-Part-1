
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddNewPost from './AddNewPost';



function NewPostModal({ post }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="signInButt">Create Post</button>
            {showModal && (
                <Modal onClick={() => setShowModal(false)}>
                    <AddNewPost></AddNewPost>
                </Modal>
            )}
        </>
    );
}

export default NewPostModal;
