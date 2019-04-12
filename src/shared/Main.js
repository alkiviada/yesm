import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import YesCube from "./YesCube";
import YesBrandName from "./YesBrandName";
import MainContent from "./MainContent";
import { sideNav } from './constants'

class Main extends Component {
  render() {
    const { location } = this.props
    const page = location.pathname.substr(1)
    console.log(page)
    console.log(location.pathname)

    return location.pathname === '/' ? (
      <div className="yesm-main">
        <img src="/cube.png" alt="" className='yesm-main-cube' />
        <YesBrandName /> 
      </div>) : 
      sideNav[page] ? (<MainContent page={page} />) : ''
  }
}

export default withRouter(Main)
