import React, { useEffect, useState } from "react";
import * as postAction from "../../store/posts"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


export default function PostEditFrom({ id, post, setShowModal }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [title, setTitle] = useState(post.title);
    const [imgUrl, setImgURl] = useState(post.imgUrl);
    const [context, setContext] = useState(post.context);
    const [availability, setAvailability] = useState(post.availability);
    const result = useSelector(state => state.session?.user)
    const [errors, setErrors] = useState([]);

    const postId = post.id;


    useEffect(() => {
        let errors = [];
        if (title.length < 3) {
            errors.push("Please enter title");
        }

        if (context.length < 4) {
            errors.push("Provide some context");
        }
        setErrors(errors);
    }, [title, context])


    const onSubmit = (e) => {
        e.preventDefault();
        const userId = result?.id
        const post = {
            id: postId,
            userId,
            title,
            imgUrl,
            context,
            availability
        }

        dispatch(postAction.updatePost({ id, post }))
        if (!errors.length) {
            setShowModal(false)
            history.push('/posts')
        }

    }

    return (
        <>
            <form onSubmit={onSubmit} className="formSignUp" >
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
                <input type="number"
                    onChange={e => setAvailability(e.target.value)}
                    value={availability}></input>
                <button disabled={errors.length} >Submit</button>
            </form>
        </>
    )
}
