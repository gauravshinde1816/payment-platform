import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import SmartFarming from "./components/smartFarming";
import Diploma from "./components/diploma";

function App() {
  return (
    <Switch>
      <Route path="/smartfarming">
        <SmartFarming />
      </Route>
      <Route path="/diploma">
        <Diploma />
      </Route>
      <Route path="/">
        <Register />
      </Route>
      <Route path="/">
        <Register />
      </Route>
      <Route path="/">
        <Register />
      </Route>
      <Route path="/">
        <Register />
      </Route>
    </Switch>
  );
}

export default App;
