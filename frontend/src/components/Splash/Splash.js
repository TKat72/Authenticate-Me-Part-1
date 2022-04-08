import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModel";

import './Splash.css'

export default function Splash() {
    const user = useSelector(state => state.session?.user)
   
    return (
        <>
            <div className="splashPage">
                <h1>Welcome to <span className="name">Give In</span> {user && (user.username)}!!! </h1>
                <p className="contextSplash">
                    We are trying to make this world little better ,
                    You can share up coming events connected  to charity or givine away  free stuff ,
                    if you came here for help here is our
                    <NavLink to={'/posts'}><button className="button">Posts</button></NavLink> , you can browse  around and see if there is something that can be to your use  ,
                    or  maybe you came to  help someone , even small things matter,
                    <span className="highlite">lets make this world better together </span>

                </p>
                {!user && (
                    <>
                        <div className="butt-splash-box">
                            <LoginFormModal >  <button className="butt-splash">Login</button></LoginFormModal>
                            <SignupFormModal><button className="butt-splash">Sign Up </button></SignupFormModal>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
