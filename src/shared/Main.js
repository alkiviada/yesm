import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import YesCube from "./YesCube";
import YesBrandName from "./YesBrandName";
import AboutMain from "./AboutMain";

class Main extends Component {
  render() {
    const { location } = this.props
    return location.pathname === '/' ? (
       <div className="yesm-main">
      <YesCube />
      <YesBrandName /> 
      </div>)
       :
      ( <AboutMain /> )
  }
}

export default withRouter(Main)
