import React, { useEffect } from "react";
// import { NavLink, useHistory } from "react-router-dom"
import * as postActions from "../../store/posts"
import { useDispatch, useSelector } from "react-redux";
import './PostPage.css'

import PostDeleteModal from "../DeleteFile";
import PostInfoModal from "../PostInformation"
import PostEditModal from "../PostEdit";



export default function PostsPage() {
    // const history = useHistory();
    const dispatch = useDispatch();

    const state = useSelector(state => state)

    const posts = Object.values(state.post)
    const userId = state.session.user?.id;

    useEffect(() => {

        dispatch(postActions.getAll())

    }, [dispatch])




    return (
        <>

            <ul className="postsContainer">
                {posts.map(post => (



                    <li className="postCard" style={{ width: "300px", }}
                        key={post?.id}>
                        <h2>
                            {post?.title}
                            <PostInfoModal id={post.id} post={post}></PostInfoModal>
                            {userId === post?.userId && (
                                <>
                                    <PostEditModal post={post} id={post.id}></PostEditModal>
                                    <PostDeleteModal post={post}></PostDeleteModal>
                                </>
                            )}

                        </h2>
                        <img
                            src={post?.imgUrl}
                            alt={post?.title}
                            style={{ height: "200px", boxShadow: "", width: "280px", margin: "9px" }}
                        />
                        <p className="contextDisplay">{post?.context}</p>




                    </li>

                ))}

            </ul>

        </>
    )


}
