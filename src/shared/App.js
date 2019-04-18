import React, { Component } from 'react'
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import YesmPage from "./YesmPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:lang?" component={ YesmPage } />
      </Switch>
    )
  }
}

export default App
