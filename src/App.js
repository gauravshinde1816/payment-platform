import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import SmartFarming from "./components/smartFarming";
import Diploma from "./components/diploma";
import Stem from './components/stem';
import Engineering from './components/Engineering';

function App() {
  return (
    <Switch>
      <Route path="/smartfarming">
        <SmartFarming />
      </Route>
      <Route path="/diploma">
        <Diploma />
      </Route>
      <Route path="/stem">
        <Stem />
      </Route>
      <Route path="/engineering">
        <Engineering />
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
