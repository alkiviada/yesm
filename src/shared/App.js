import React, { Component } from 'react'
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/about" exact component={ About } />
      </Switch>
    )
  }
}

export default App
