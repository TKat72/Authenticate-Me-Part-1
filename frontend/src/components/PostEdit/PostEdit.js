import React, { useEffect, useState } from "react";
import * as postAction from "../../store/posts"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


export default function PostEditFrom({ id, post }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [title, setTitle] = useState(post.title);
    const [imgUrl, setImgURl] = useState(post.imgUrl);
    const [context, setContext] = useState(post.context);
    const [availability, setAvailability] = useState(post.availability);
    const result = useSelector(state => state.session?.user)
    const [errors, setErrors] = useState([]);

    


    // const id = result.user.id;

    const onSubmit = (e) => {
        e.preventDefault();
        const userId = result?.id
        const post = {
            userId,
            title,
            imgUrl,
            context,
            availability
        }

        dispatch(postAction.updatePost({ id, post })).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
        })
        history.push('/posts')
    }

    return (
        <>
            <form onSubmit={onSubmit} >
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
