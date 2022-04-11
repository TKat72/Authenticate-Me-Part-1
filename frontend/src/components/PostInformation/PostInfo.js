import React, { useEffect, useState } from "react";
import { NavLink, Route, useHistory, useParams } from "react-router-dom";
import * as registerAction from "../../store/registration"
import "./PostInfo.css"
import AddRegistrationModel from "../AddRegistration"
import { useDispatch, useSelector } from "react-redux";
import RegistrationEditModel from "../RegistrationEdit";
import RegistrationDisplay from "../RegistrationDisplay.js";




export default function PostInfo({ id, post, setShowModal }) {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory()

    const state = useSelector(state => state)
    const userId = state.session?.user?.id

    const registrations = state?.register;
    const result = Object.values(registrations)
    const registationsForThisPost = result.filter(ele => ele.postId === id);
    const alrediRegister = result.find(ele => ele.userId === userId && id === ele.postId)
    const owner = post.userId === userId;
    const onClick = (e) => {
        e.preventDefault();
        setShowModal(false)
    }


    useEffect(() => {
        dispatch(registerAction.getAll())
    }, [dispatch])

    const handelHide = () => {
        history.push(`/posts/${id}`)
    }
    return (
        <>
            <div className="infoPage">
                <button onClick={onClick}><i class="fa-solid fa-arrow-left-long"></i></button>
                <div className="infoCard">

                    <h2>{post?.title}

                    </h2>
                    <img
                        src={post?.imgUrl}
                        alt={post?.title}
                        style={{ height: "200px", borderRadius: "10px", boxShadow: "", width: "280px", margin: "9px" }}
                    />
                    <p className="contextP">{post?.context}</p>

                    {(() => {

                        if (!alrediRegister && !owner && userId) {



                            return (

                                <AddRegistrationModel postId={post.id}></AddRegistrationModel>

                            )

                        } else if (alrediRegister && !owner) {

                            return (

                                <RegistrationEditModel id={alrediRegister.id} info={alrediRegister} postId={id}></RegistrationEditModel>


                            )

                        } else if (owner) {

                            return (
                                <div>
                                    <NavLink to={`/posts/${id}/registrations`} className="linkForShowRegister"> <button>Show registration</button> </NavLink>
                                    <button onClick={handelHide}>hide</button>
                                </div>
                            )

                        }

                    })()}
                    <Route path={`/posts/${id}/registrations`}>
                        <RegistrationDisplay id={id}></RegistrationDisplay>
                    </Route>
                </div>
            </div>
        </>
    )
}
