import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Places from "./components/Places";
import NoPlace from "./components/NoPlace";

function App(props) {
  return (
    <Router>
      <div className="container-fluid">
        <main className="row main">
          <aside className="sidebar col">
            <Sidebar />
          </aside>
          <section className="content col">
            <Switch>
              <Route exact path="/">
                <Redirect to="/places" />
              </Route>
              <Route exact path="/places" component={NoPlace}></Route>
              <Route path="/places/:id" component={Places}></Route>
            </Switch>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
