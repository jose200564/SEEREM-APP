import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./components/Home";
import View from "./components/View";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Map">
          <View />
        </Route>
        <Route path="/Home">
          <Home />
        </Route> 
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
