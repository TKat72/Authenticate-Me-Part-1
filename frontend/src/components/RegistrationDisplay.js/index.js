import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as registerAction from "../../store/registration"
import RegisterDeleteModal from '../DeleteRegistration'


export default function RegistrationDisplay() {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const userId = state?.session?.user?.id;
    console.log(userId, " user Id ")
    console.log("this is state ", state)
    const registations = Object.values(state.register)
    useEffect(() => {
        dispatch(registerAction.getAll())

    }, [dispatch])
    return (
        <>
            <div> Im in display register</div>
            <ul>
                {registations.map(register => (
                    <>
                        <li key={`regest-${register?.id}`}>
                            <p>{register?.name}</p>
                            <p>{register?.email}</p>
                            <p>{register?.phone}</p>
                            {userId === register.userId && (
                                <>

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
