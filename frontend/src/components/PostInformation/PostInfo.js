import React from "react";
import { useParams } from "react-router-dom";
import PostDeleteModal from "../DeleteFile";
import PostEditModal from "../postEdit";
import "./PostInfo.css"

export default function PostInfo({ id, post }) {
    const { postId } = useParams();




    return (
        <>
            <div className="infoCard">
                <h2>{post?.title}
                    <PostEditModal post={post} id={post.id}></PostEditModal>
                    <PostDeleteModal post={post}></PostDeleteModal>
                </h2>
                <img
                    src={post?.imgUrl}
                    alt={post?.title}
                    style={{ height: "200px", borderRadius: "10px", boxShadow: "", width: "280px", margin: "9px" }}
                />
                <p>{post?.context}</p>
                <p>{post?.availability}</p>
                <button>Register for Event</button>

            </div>
        </>
    )
}
