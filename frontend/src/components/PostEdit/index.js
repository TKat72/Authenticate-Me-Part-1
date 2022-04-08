import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import PostEditFrom from './PostEdit';



function PostEditModal({ id, post }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="signInButt"><NavLink to={`/posts/${id}`}><i className="fa-solid fa-pen-to-square"></i></NavLink></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostEditFrom post={post} id={id} setShowModal={setShowModal}></PostEditFrom>
                </Modal>
            )}
        </>
    );
}

export default PostEditModal;
