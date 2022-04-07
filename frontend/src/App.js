import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import PostsPage from './components/PostsPage'
import PostEditForm from "./components/PostEdit/PostEditForm";
import AddNewPost from "./components/AddNewPost/AddNewPost"
import DeleteForm from "./components/DeleteFile/DeleteForm";
import PostInfo from "./components/PostInformation";
import Splash from "./components/Splash/Splash";

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
        <Route exact path='/posts/:postId/edit'>
          <PostEditForm />
        </Route>
        <Route exact path="/posts/new">
          <AddNewPost></AddNewPost>
        </Route>

        <Route exact path='/posts/:postId/delete'>
          <DeleteForm></DeleteForm>
        </Route >
        <Route exact path={`/`}>
          <Splash></Splash>
        </Route>


      </Switch>

    </>
  );
}

export default App;
