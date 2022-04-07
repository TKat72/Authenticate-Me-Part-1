import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostEditForm from './PostEditForm';


function PostEditModal({ post }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="signInButt">Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostEditForm post={post}></PostEditForm>
                </Modal>
            )}
        </>
    );
}

export default PostEditModal;
