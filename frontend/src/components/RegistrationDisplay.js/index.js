import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as registerAction from "../../store/registration"
import RegisterDeleteModal from '../DeleteRegistration'
import RegistrationEditModel from "../RegistrationEdit"

export default function RegistrationDisplay({ id }) {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const userId = state?.session?.user?.id;

    const allregistations = Object.values(state.register)
    const registations = allregistations.filter(ele => ele.postId === id)

    useEffect(() => {
        dispatch(registerAction.getAll())

    }, [dispatch])
    return (
        <>
            {!registations.length ? <div> You dont have any registrations</div> : <h1>Here is ypur registrations</h1>}

            <ul>
                {registations.map(register => (
                    <>
                        <li key={`regest-${register?.id}`}>
                            <p>{register?.name}</p>
                            <p>{register?.email}</p>
                            <p>{register?.phone}</p>
                            {userId === register.userId && (
                                <>
                                    <RegistrationEditModel id={register?.id} info={register}></RegistrationEditModel>
                                    <RegisterDeleteModal register={register}></RegisterDeleteModal>
                                </>
                            )}

                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}
