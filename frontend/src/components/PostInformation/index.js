import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import DeleteForm from "../DeleteFile/DeleteForm";


export default function PostInfo({ posts }) {
    const { postId } = useParams();
    const post = posts.find(ele => ele.id === parseInt(postId));



    return (
        <>
            <div>Post info</div>
            <h2>{post?.title}
                <NavLink to={`/posts/${post?.id}/edit`} > <i className="fa-solid fa-pen-to-square"></i></NavLink>
                <button>Delete</button>
            </h2>
            <img
                src={post?.imgUrl}
                alt={post?.title}
                style={{ height: "200px", borderRadius: "10px", boxShadow: "", width: "280px", margin: "9px" }}
            />
            <p>{post?.context}</p>
            <p>{post?.availability}</p>


        </>
    )
}
