import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import PostsPage from './components/PostsPage'
import PostEditForm from "./components/PostEdit/PostEditForm";

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
        <Route path='posts/:postId/edit'>
          <PostEditForm />
        </Route>
      </Switch>

    </>
  );
}

export default App;
