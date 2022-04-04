import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css'


export default function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    )

    const onSubmit = (e) => {
        e.preventDefault();
        const err = []

        if (password === confPassword) {
            const user = {
                username,
                email,
                password
            }
            return dispatch(sessionActions.signup(user)).catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            })
        } else {
            err.push("Your passwords mast match")
            setErrors(err)
        }

    }



    return (
        <div className='formWparer'>
            <form onSubmit={onSubmit} className="formSignUp">
                <ul>
                    {errors.map((err, inx) => <li key={inx}>{err}</li>)}
                </ul>
                <label>User Name</label>
                <div>
                    <input
                        onChange={e => setUserName(e.target.value)}
                        value={username}
                    />
                </div>
                <label>Email</label>
                <div>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <label>Password</label>
                <div>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password} />
                </div>
                <label>Confurm Password</label>
                <div>
                    <input
                        onChange={e => setConfPassword(e.target.value)}
                        value={confPassword} />
                </div>
                <button> Sugn Up</button>
            </form>
        </div>
    )


}
