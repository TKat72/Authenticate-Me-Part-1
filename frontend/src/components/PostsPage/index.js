import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom"

import * as postActions from "../../store/posts"
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import DeleteForm from "../DeleteFile/DeleteForm";
import './PostPage.css'
import PostInfo from "../PostInformation";
import PostEditModal from "../PostEdit";



export default function PostsPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const state = useSelector(state => state)

    const posts = Object.values(state.post)


    useEffect(() => {

        dispatch(postActions.getAll())

    }, [dispatch])




    return (
        <>
            <NavLink to={`/posts/new`}>Create Post </NavLink>
            <ul className="postsContainer">
                {posts.map(post => (



                    <li className="postCard" style={{ width: "100%", width: "300px" }}
                        key={post?.id}>
                        <h2>{post?.title}
                            <PostEditModal post={post}><NavLink to={`/posts/${post?.id}/edit`} key={`post-${post?.id}`} id={`post${post?.id}`}> <i className="fa-solid fa-pen-to-square"></i></NavLink></PostEditModal>

                            <button onClick={() => setShowModal(true)} >Delete</button>
                            {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
                                    <DeleteForm post={post}></DeleteForm>
                                </Modal>
                            )}</h2>
                        <img
                            src={post?.imgUrl}
                            alt={post?.title}
                            style={{ height: "200px", borderRadius: "10px", boxShadow: "", width: "280px", margin: "9px" }}
                        />
                        <p>{post?.context}</p>
                        <p>{post?.availability}</p>



                    </li>

                ))}

            </ul>

        </>
    )


}
