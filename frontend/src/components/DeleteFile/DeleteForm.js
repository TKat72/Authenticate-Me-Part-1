import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as postActions from "../../store/posts"



export default function DeleteForm({ post }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const result = useSelector(state => state.session?.user)


    const onSubmit = (e) => {
        e.preventDefault();

        const userId = result?.id;
        console.log(post.userId)
        if (userId === post.userId) {
            // history.push('/posts');
            dispatch(postActions.removePost(post.id)).catch(async (res) => {
                const data = await res.json();
            })

            history.replace('/posts');

        }
    }

    return (
        <>
            <form onSubmit={onSubmit} >
                <h2>are you shure you whant to delete your post?</h2>
                <button>delete</button>
            </form>
        </>
    )
}
