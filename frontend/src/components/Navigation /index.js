import React from "react"
import { NavLink } from "react-router-dom"


export default function Navigation() {

    return (
        <nav>
            <div className='navBar'>
                <ul>
                    <li> <NavLink to="/login" className='navLink'>Login</NavLink> </li>
                    <li> <NavLink to="/signup" className='navLink'>SignUp</NavLink> </li>
                </ul>
            </div>
        </nav>
    )
}
