import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage'
import * as sessionActions from "./store/session";
import './index.css'

function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));

  }, [dispatch]);

  return (
    <>
      <nav>
        <div className='navBar'>
          <NavLink to="/login" className='navLink'>Login</NavLink>
          <NavLink to="/signup" className='navLink'>SignUp</NavLink>
        </div>
      </nav>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
