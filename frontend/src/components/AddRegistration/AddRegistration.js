import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as registerAction from "../../store/registration"

export default function AddRegistration({ postId, setShowModal }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session?.user)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const info = {
            userId: user?.id,
            postId,
            name,
            email,
            phone
        }
        e.preventDefault();
        dispatch(registerAction.addRegistration({ info }))
        setShowModal(false)
        history.push(`/posts/${postId}`);

    }

    return (


        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input onChange={(e) => setName(e.target.value)}
                value={name} ></input>
            <label>Email</label>
            <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email} ></input>
            <label>Phone</label>
            <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone} ></input>
            <button>Submit </button>
        </form>


    )
}
