import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


export default function RegistrationEdit() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    

    return (
        <form>
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
