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
                <NavLink to="/registration/new">new registration</NavLink>
                <NavLink to="/registration"> registration</NavLink>
                <NavLink to='/new' className={`addPost`}> add New post</NavLink>
                <NavLink to="/posts" className={`allPosts`}>posts</NavLink>
                <ProfileButton user={sessionUser} />

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
            <ul className='ulNav' >
                <li className='liNavBar'>
                    <NavLink exact to="/" className='homeLink'><i className="fa-solid fa-house"></i></NavLink>



                </li>
                <li> {isLoaded && sessionLinks}</li>
            </ul>
        </div >
    );
}

export default Navigation;
