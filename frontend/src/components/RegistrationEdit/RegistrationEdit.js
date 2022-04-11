import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as registerAction from "../../store/registration"

export default function RegistrationEdit({ id, info, setShowModal, postId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState(info.name);
    const [email, setEmail] = useState(info.email);
    const [phone, setPhone] = useState(info.phone);
    const userId = useSelector(state => state.session.user?.id)
    console.log(userId)
    const onSubmit = (e) => {
        e.preventDefault();
        const info = {
            id,
            userId: userId,
            postId,
            name,
            email,
            phone
        }
        dispatch(registerAction.updateRegistration({ id, info }))
        setShowModal(false)
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input onChange={(e) => setName(e.target.value)}
                value={name}
            ></input>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)}
                value={email}
            ></input>
            <label>Phone</label>
            <input onChange={(e) => setPhone(e.target.value)}
                value={phone}
            ></input>
            <button>Submit</button>

        </form>
    )
}
