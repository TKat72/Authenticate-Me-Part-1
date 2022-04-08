
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { NavLink } from "react-router-dom";
import PostInfo from "./PostInfo"


function PostInfoModal({ id, post }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="signInButt"><NavLink to={`/posts/${id}`}>Info</NavLink></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostInfo post={post} id={id}></PostInfo>
                </Modal>
            )}
        </>
    );
}

export default PostInfoModal;
