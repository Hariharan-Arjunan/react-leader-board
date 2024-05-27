import React from "react";
import "./App.css";
import LeaderBoard from "./Component/LeaderBoard";
import Age from "./pages/Age";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "h8k-components";
import Points from "./pages/Points";
import Name from "./pages/Name";
import Rank from "./pages/Rank";
import Home from "./pages/Home";

const title = "SPA - LeaderBoard";

function App() {
  return (
    <Router>
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <LeaderBoard />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/age">
            <Age />
          </Route>
          <Route path="/points">
            <Points />
          </Route>
          <Route path="/name">
            <Name />
          </Route>
          <Route path="/rank">
            <Rank />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
