import React, { useEffect, useState } from "react";
import * as postAction from "../../store/posts"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


export default function AddNewPost() {
    const history = useHistory()
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [imgUrl, setImgURl] = useState('');
    const [context, setContext] = useState('');
    const [availability, setAvailability] = useState('');
    const result = useSelector(state => state.session?.user)
    const [errors, setErrors] = useState([]);




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




        dispatch(postAction.createNewPost({ userId, title, imgUrl, context, availability }))
        if (!errors.length) {
            history.push('/posts')
        }


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
                    type="number"
                    onChange={e => setAvailability(e.target.value)}
                    value={availability}></input>
                <button>Submit</button>
            </form>
        </>
    )
}
