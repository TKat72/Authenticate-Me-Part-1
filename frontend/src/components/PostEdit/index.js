import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostEditFrom from './PostEdit';



function PostEditModal({ id, post }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="signInButt">Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostEditFrom post={post} id={id}></PostEditFrom>
                </Modal>
            )}
        </>
    );
}

export default PostEditModal;
