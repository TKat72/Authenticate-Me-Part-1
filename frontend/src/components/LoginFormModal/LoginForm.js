import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css"

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );

    };
    const demoUser = (e) => {
        const credential = 'Demo'
        const password = 'password'
        e.preventDefault();
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                console.log(data);
                if (data && data.errors) setErrors(data.errors);
            }
        );

    }

    return (
        <div className="loginFormWrap">
            <form onSubmit={handleSubmit} className="formSignUp">
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label>
                    Username or Email
                </label>
                <div>
                    <i className="fa-solid fa-user"></i> <input
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </div>
                <label>
                    Password
                </label>
                <div>
                    <i class="fa-solid fa-lock"></i> <input
                        
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Log In</button>

                </div>
            </form>
            <form onSubmit={demoUser} className="demoUserButt">
                <button >Demo</button>
            </form>
        </div>
    );
}

export default LoginForm;
