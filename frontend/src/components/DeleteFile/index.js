import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteForm from './DeleteForm';


function PostDeleteModal({ post }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="signInButt">Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteForm post={post}></DeleteForm>
                </Modal>
            )}
        </>
    );
}

export default PostDeleteModal;
