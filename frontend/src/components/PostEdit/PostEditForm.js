import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as postAction from "../../store/posts"


export default function PostEditForm({ post }) {

    const { postId } = useParams()


    const history = useHistory()
    const dispatch = useDispatch();
    const [title, setTitle] = useState(post.title);
    const [imgUrl, setImgURl] = useState(post.imgUrl);
    const [context, setContext] = useState(post.context);
    const [availability, setAvailability] = useState(post.availability);
    const result = useSelector(state => state.session.user)
    const [errors, setErrors] = useState([]);




    const onSubmit = (e) => {
        e.preventDefault();
        const post1 = {
            title,
            imgUrl,
            context,
            availability
        }

        dispatch(postAction.updatePost(post.id, post1)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
        })
        history.push('/posts')


    }


    return (
        <>

            <form className="formSignUp" onSubmit={onSubmit}>
                <h1>Edit Form</h1>
                <ul>
                    {errors.map((err, inx) => <li key={inx}>{err}</li>)}
                </ul>
                <label>Title</label>
                <input
                    onChange={e => setTitle(e.target.value)}
                    value={title}

                ></input>
                <label>Image Url</label>
                <input
                    onChange={e => setImgURl(e.target.value)}
                    value={imgUrl}
                ></input>
                <label>Context</label>
                <textarea
                    onChange={e => setContext(e.target.value)}
                    value={context}></textarea>
                <label>Availability</label>
                <input
                    onChange={e => setAvailability(e.target.value)}
                    value={availability}></input>
                <button>Submit</button>
            </form>
        </>
    )
}
