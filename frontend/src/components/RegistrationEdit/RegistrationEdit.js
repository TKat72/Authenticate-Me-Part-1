import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import * as registerAction from "../../store/registration"
import RegisterDeleteModal from "../DeleteRegistration";
import "./RegistrationEdit.css"
export default function RegistrationEdit({ id, info, setShowModal, postId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState(info.name);
    const [email, setEmail] = useState(info.email);
    const [phone, setPhone] = useState(info.phone);
    const [errors, setErrors] = useState([])
    let regEx = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    const userId = useSelector(state => state.session.user?.id)
    useEffect(() => {
        let err = []
        if (name.length < 4) {
            err.push("Please enter your name ")
        }
        if (!email.includes("@")) {
            err.push("Please enter valid email address")
        }
        if (!regEx.test(phone)) {
            err.push("Please enter valid phone number")
        }

        setErrors(err)
    }, [name, email, phone])

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
        <div className="editBlock">
            <form onSubmit={onSubmit} className="formSignUp">
                <ul>
                    {errors.map((err, index) => (
                        <li key={index}>
                            {err}
                        </li>
                    ))}
                </ul>
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
                <button disabled={errors.length}>Submit</button>


            </form>
            <RegisterDeleteModal register={info}></RegisterDeleteModal>
        </div>
    )
}
