// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModel'
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser} />
                <NavLink to='/new'> add New post</NavLink>
                <NavLink to="/posts">posts</NavLink>
            </>
        );
    } else {
        sessionLinks = (
            <>

                <LoginFormModal />
                <SignupFormModal />

            </>
        );
    }

    return (
        <div className='navBar'>
            <ul >
                <li>
                    <NavLink exact to="/" className='homeLink'><i className="fa-solid fa-house"></i></NavLink>


                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </div >
    );
}

export default Navigation;
