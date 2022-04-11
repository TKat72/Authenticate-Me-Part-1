import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as registrationAction from '../../store/registration'



export default function DeleteRegisteration({ register }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const result = useSelector(state => state.session?.user)
    const state = useSelector(state => state)

    const onSubmit = (e) => {
        e.preventDefault();

        const userId = result?.id;


        console.log("state ", state)
        if (userId === register.userId) {
            dispatch(registrationAction.deleteRegistration({ id: register.id }))


            history.push('/registration');

        }
    }

    return (
        <>
            <form onSubmit={onSubmit} >
                <h2>are you shure you whant to delete your registration?</h2>
                <button>delete</button>
            </form>
        </>
    )
}
