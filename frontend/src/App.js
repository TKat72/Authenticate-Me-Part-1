import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import PostsPage from './components/PostsPage'

import AddNewPost from "./components/AddNewPost/AddNewPost"
import DeleteForm from "./components/DeleteFile/DeleteForm";
import PostInfo from "./components/PostInformation/PostInfo";
import Splash from "./components/Splash/Splash";
import RegistrationDisplay from "./components/RegistrationDisplay.js";
import AddRegistration from "./components/AddRegistration";
import RegistrationEdit from "./components/RegistrationEdit/RegistrationEdit";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route path="/posts">
          <PostsPage></PostsPage>
        </Route>

        <Route exact path="/new">
          <AddNewPost></AddNewPost>
        </Route>
        <Route exact path={`/posts/:postId`}>
          <PostInfo></PostInfo>
        </Route>
        <Route exact path='/posts/:postId/delete'>
          <DeleteForm></DeleteForm>
        </Route >
        <Route exact path={`/`}>
          <Splash></Splash>
        </Route>
        <Route exact path={`/registration`}>
          <RegistrationDisplay></RegistrationDisplay>
        </Route>
        <Route exact path={'/registration/new'}>
          <AddRegistration></AddRegistration>
        </Route>

        <Route>
          <div>Page not found</div>
        </Route>

      </Switch>

    </>
  );
}

export default App;
