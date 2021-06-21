import "./App.css";
import React, { useState } from "react";
import {Switch, Route} from 'react-router-dom';

import PayNow from './components/PayNow';
import Register from './components/Register';

const dateObject = new Date();

function App() {

  return (
    <Switch>
      <Route eaxct path='/pay'>
        <PayNow/>
      </Route>
      <Route path='/'>
        <Register/>
      </Route>
    </Switch>
  );
}

export default App;
