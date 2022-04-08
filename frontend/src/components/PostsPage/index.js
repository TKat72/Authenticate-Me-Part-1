import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom"
import * as postActions from "../../store/posts"
import { useDispatch, useSelector } from "react-redux";
import './PostPage.css'

import PostDeleteModal from "../DeleteFile";




export default function PostsPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    const state = useSelector(state => state)

    const posts = Object.values(state.post)
    const userId = state.session.user?.id;
    console.log()
    useEffect(() => {

        dispatch(postActions.getAll())

    }, [dispatch])




    return (
        <>

            <ul className="postsContainer">
                {posts.map(post => (



                    <li className="postCard" style={{ width: "300px", }}
                        key={post?.id}>
                        <h2>{post?.title}
                            {userId === post?.userId && (
                                <>
                                    <PostDeleteModal post={post}><NavLink to={`/post/${post.id}/delete`}></NavLink></PostDeleteModal>
                                </>
                            )}

                        </h2>
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
