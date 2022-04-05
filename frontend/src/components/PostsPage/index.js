import React, { useState, useEffect } from "react";
import { NavLink, Switch, Route } from "react-router-dom"
import PostEditForm from "../PostEdit/PostEditForm";
import * as postActions from "../../store/posts"
import { useDispatch, useSelector } from "react-redux";


export default function PostsPage() {
    const dispatch = useDispatch();
    const result = useSelector(state => {
        return state.post
    })
    const posts = Object.values(result)
    // posts.map(ele => console.log(ele))
    useEffect(() => {

        dispatch(postActions.getAll())

    }, [dispatch])
    // userId, title, imgUrl, context, availability

    return (
        <>
            <div>Im here </div>
            <ul>
                {posts.map(post => (

                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <img
                            src={post?.imgUrl}
                            alt={post?.title}
                            style={{ height: "200px", borderRadius: "10px", boxShadow: "" }}
                        />
                        <p>{post.context}</p>
                        <p>{post.availability}</p>
                        <i class="fa-solid fa-pen-to-square"></i>
                        <button><i class="fa-solid fa-trash-can"></i></button>
                    </li>

                ))}

            </ul>

        </>
    )


}
